import UserModel from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'

export const getAllUsers = async (req, res) => {
    try {
        const userModel = await UserModel.find()
        res.status(200).json(userModel)
    } catch (error) {
        res.status(404).json( { message: error.message })
    }
}

export const createUser = async (req, res) => {
    const data = req.body
    UserModel.find(
        { "username": data.username }
    )
        .then((queryResult) => {
            if (queryResult.length === 0) {
                const saltRounds = 10
                bcrypt.hash(data.password, saltRounds, (err, hash) => {
                    data.password = hash
                    const newUser = new UserModel(data)  
                    try {
                        newUser.save()   // might need await
                        res.status(201).json(newUser)
                    } catch (error) {
                        res.status(409).json({ message: error.message })
                    }
                })
            } else {
                res.status(400).json({ error: "There already exists a user with that username." })
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

export const addIngredient = async (req, res) => {
    const newIngredient = {id: uuidv4(), name: req.body.ingredientName, depleted: false}
    try {
        UserModel.findOneAndUpdate(
            { "username": req.session.user.username },
            { $push:{ "ingredients": newIngredient }},
            { new: true }
        ).then((result) => {
            res.status(200).json(result.ingredients)
        }).catch((error) => {
            res.status(400).send(`Add Ingredient Error: ${error}`)
        })
    } catch (error) {
        res.status(404).send("No user with that id.")
    }
}

export const deleteIngredient = async (req, res) => {
    UserModel.findOneAndUpdate(
        { "username": req.session.user.username },
        { $pull: { "ingredients": { "id": req.body.ingredientId } } },
        { new: true }
    )
        .then((result) => {
            res.status(200).json(result.ingredients)
        })
        .catch((error) => {
            res.status(400).send(`Delete Ingredient Error: ${error}`)
        })
}

export const toggleIngredientDepleted = async (req, res) => {
    UserModel.findOneAndUpdate(
        { "username": req.session.user.username, "ingredients.id": req.body.ingredientId },
        { $set: { "ingredients.$.depleted": req.body.isDepleted }},
        { new: true }
    )
        .then((result) => {
            res.status(200).json(result.ingredients)
        })
        .catch((error) => [
            res.status(400).send(`Toggle Ingredient Depleted Error: ${error}`)
        ])
}

export const addRecipe = async (req, res) => {
    const newRecipe = { id:uuidv4(), name: req.body.name, requiredIngredients: req.body.requiredIngredients}
    UserModel.findOneAndUpdate(
        { "username": req.session.user.username },
        { $push: {"recipes": newRecipe }},
        { new: true }
    ).then((result) => {
        res.status(200).json(result.recipes)
    }).catch((error) => {
        res.status(400).send(`Add Recipe Error: ${error}`)
    })
}

export const deleteRecipe = async (req, res) => {
    UserModel.findOneAndUpdate(
        { "username": req.session.user.username },
        { $pull: { "recipes": { "id": req.body.recipeId } } },
        { new: true }
    )
        .then((result) => {
            res.status(200).json(result.recipes)
        })
        .catch((error) => {
            res.status(401)(`Delete Recipe Error: ${error}`)
        })
}

export const loginUser = async (req, res) => {
    try {
        const userModel = await UserModel.find({ username: req.body.username })
        if (userModel.length > 1) {
            res.status(404).send("More than one user with that username.")
        } else if (userModel.length === 0) {
            res.status(404).send("No user with that username")
        } else {
            bcrypt.compare(req.body.password, userModel[0].password, (error, result) => {
                if (!result) { //incorrect password, access denied
                    res.status(404).send("Incorrect username/password.")
                } else {       //correct password, login
                    req.session.user = {
                        uuid: userModel[0]._id,
                        username: userModel[0].username
                    }
                    res.status(200).json(userModel[0])
                }
            })
        }
    } catch (error) {
        res.status(404).json( { message: error.message })
    }
}

export const logoutUser = async (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            res.status(400).send(`Logout error: ${error}`)
        }
        res.status(200).send("User successfully logged out.")
    })
}