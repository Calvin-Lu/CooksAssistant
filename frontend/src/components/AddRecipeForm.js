import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addRecipe } from '../state/actions/users'
import { toggleAddRecipeForm } from '../state/actions/popups'

const AddRecipeForm = () => {

    const dispatch = useDispatch()

    const currentIngredients = useSelector((state) => state.users.ingredients)
    const [listedCurrentIngredients, setListedCurrentIngredients] = useState(currentIngredients.map((ingredient) => ingredient.name))
    const [selectedIngredients, setSelectedIngredients] = useState([])
    const [newRecipeName, setNewRecipeName] = useState("")
    const [customIngredientName, setCustomIngredientName] = useState("")

    const handleRecipeNameChange = (e) => {
        setNewRecipeName(e.target.value)
    }

    const handleCustomIngredientNameChange = (e) => {
        setCustomIngredientName(e.target.value)
    }

    const handleAddCustomIngredientClick = (e) => {
        setSelectedIngredients([...selectedIngredients, customIngredientName])
        setCustomIngredientName("")
    }

    const handleResetCustomIngredientClick = (e) => {
        setCustomIngredientName("")
    }

    const handleIngredientClick = (e) => {
        if (selectedIngredients.includes(e.target.innerText)) {  // ingredient already selected
            setListedCurrentIngredients([...listedCurrentIngredients, e.target.innerText])
            setSelectedIngredients(selectedIngredients.filter((ingredient) => (ingredient !== e.target.innerText)))
        } else {
            setListedCurrentIngredients(listedCurrentIngredients.filter((ingredient) => (ingredient !== e.target.innerText)))
            setSelectedIngredients([...selectedIngredients, e.target.innerText])
        }
    }

    const handleDeleteIngredientClick = (e) => {
        const deletedIngredientName = e.target.id
        setListedCurrentIngredients([...listedCurrentIngredients, deletedIngredientName])
        setSelectedIngredients(selectedIngredients.filter((ingredient) => (ingredient !== deletedIngredientName)))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault()
        const newRecipe = {
            name: newRecipeName,
            requiredIngredients: selectedIngredients
        }
        dispatch(addRecipe(newRecipe))
        const shouldOpenPopup = false
        dispatch(toggleAddRecipeForm(shouldOpenPopup))
    }

    const handleCancelClick = (e) => {
        const shouldOpenPopup = false
        dispatch(toggleAddRecipeForm(shouldOpenPopup))
    }

    return (
        <div className="popup-outer">
            <Form className="add-recipe-form-popup">
                <div className="add-recipe-form-popup-inner">
                    <h1>Add a Recipe</h1>
                    <Form.Group controlId="recipeName">
                        <Form.Label>Recipe Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Recipe Name" onChange={handleRecipeNameChange}/>
                    </Form.Group>
                    <div className="add-recipe-form-popup-inner-child">
                        <div className="add-recipe-form-popup-inner-child-column">
                            <h3>Add Ingredients:</h3>
                            <Form.Group controlId="customIngredientNameInput">
                                <Form.Label>Manually enter an ingredient name (one at a time):</Form.Label>
                                <Form.Control type="text" placeholder="Enter an Ingredient Name" value={customIngredientName} onChange={handleCustomIngredientNameChange}/>
                            </Form.Group>
                            <Button className="add-recipe-form-add-ingredient-button" variant="warning" onClick={handleAddCustomIngredientClick}>
                                Add Ingredient
                            </Button>
                            <Button className="add-recipe-form-add-ingredient-button" variant="warning" onClick={handleResetCustomIngredientClick}>
                                Reset Field
                            </Button>
                            <p className="add-recipe-form-header">Or choose from your currently listed ingredients (Select multiple):</p>
                            <div className="add-recipe-form-ingredients-list">
                                {listedCurrentIngredients.map((ingredient) => (
                                    <div className="add-recipe-form-ingredient" onClick={handleIngredientClick}>
                                        <p className="add-recipe-form-ingredient-label">{ingredient}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="add-recipe-form-popup-inner-child-column">
                            <p className="add-recipe-form-header">Selected Ingredients:</p>
                            <div className="add-recipe-form-selected-ingredients-list">
                                {selectedIngredients.map((ingredientName) => (
                                    <div className="add-recipe-form-selected-ingredients-list-item">
                                        <p className="add-recipe-form-ingredient-label add-recipe-form-selected-ingredient">{ingredientName}</p>
                                        <div id={ingredientName} className="delete-button" onClick={handleDeleteIngredientClick}>X</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="add-recipe-form-popup-button-row">
                        <Button className="popup-inner-button" variant="success" type="submit" onClick={handleSubmitClick}>
                            Submit Recipe
                        </Button>
                        <Button className="popup-inner-button" variant="warning" onClick={handleCancelClick}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default AddRecipeForm
