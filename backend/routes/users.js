import express from 'express'
import { getAllUsers, createUser, addIngredient, deleteIngredient, toggleIngredientDepleted, addRecipe, deleteRecipe, loginUser, logoutUser } from '../controllers/users.js'

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.patch('/addIngredient', addIngredient)
router.patch('/deleteIngredient', deleteIngredient)
router.patch('/toggleIngredientDepleted', toggleIngredientDepleted)
router.patch('/addRecipe', addRecipe)
router.patch('/deleteRecipe', deleteRecipe)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

export default router