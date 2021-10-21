import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toggleRecipeDetails } from '../state/actions/popups'
import { deleteRecipe } from '../state/actions/users'

const RecipeDetails = () => {

    const dispatch = useDispatch()

    const selectedRecipe = useSelector((state) => state.popups.selectedRecipe)

    const handleCloseClick = (e) => {
        e.preventDefault()
        const payload = {
            showRecipeDetails: false,
            selectedRecipe: {}
        }
        dispatch(toggleRecipeDetails(payload))
    }

    const handleModifyClick = (e) => {
        e.preventDefault()
        const payload = {
            showRecipeDetails: false,
            selectedRecipe: {}
        }
        dispatch(toggleRecipeDetails(payload))
    }

    const handleDeleteClick = (e) => {
        e.preventDefault()
        dispatch(deleteRecipe(selectedRecipe.id))
        const payload = {
            showRecipeDetails: false,
            selectedRecipe: {}
        }
        dispatch(toggleRecipeDetails(payload))
    }

    return (
        <div className="popup-outer">
            <Form className="popup">
                <div className="popup-inner">
                    <h1>{selectedRecipe.name}</h1>
                    <p>Required Ingredients:</p>
                    <div className="recipe-details-ingredients-list">
                        {selectedRecipe.requiredIngredients.map((ingredient) => (
                            <p className="recipe-details-ingredient">{ingredient}</p>
                        ))}
                    </div>
                    <Button className="popup-inner-button" variant="warning" onClick={handleModifyClick}>
                        Modify
                    </Button>
                    <Button className="popup-inner-button" variant="warning" type="submit" onClick={handleCloseClick}>
                        Close
                    </Button>
                    <Button className="popup-inner-button" variant="danger" onClick={handleDeleteClick}>
                        Delete
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default RecipeDetails
