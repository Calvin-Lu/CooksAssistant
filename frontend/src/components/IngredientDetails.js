import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIngredientDetails } from '../state/actions/popups'
import { deleteIngredient, toggleIngredientDepleted } from '../state/actions/users'

const IngredientDetails = () => {

    const dispatch = useDispatch()

    const selectedIngredient = useSelector((state) => state.popups.selectedIngredient)
    const [isDepleted, setIsDepleted] = useState(selectedIngredient.depleted)

    const handleCloseClick = (e) => {
        e.preventDefault()
        const payload = {
            showIngredientDetails: false,
            selectedName: {}
        }
        dispatch(toggleIngredientDetails(payload))
    }

    const handleModifyClick = (e) => {
        e.preventDefault()
        const payload = {
            showIngredientDetails: false,
            selectedName: {}
        }
        dispatch(toggleIngredientDetails(payload))
    }

    const handleDeleteClick = (e) => {
        e.preventDefault()
        dispatch(deleteIngredient(selectedIngredient.id))
        const payload = {
            showIngredientDetails: false,
            selectedName: {}
        }
        dispatch(toggleIngredientDetails(payload))
    }

    const handleDepletedClick = (e) => {
        const newValue = !isDepleted
        setIsDepleted(newValue)
        const payload = {
            ingredientId: selectedIngredient.id,
            isDepleted: newValue
        }
        dispatch(toggleIngredientDepleted(payload))
    }

    return (
        <div className="popup-outer">
            <Form className="popup">
                <div className="popup-inner">
                    <h1>{selectedIngredient.name}</h1>
                    <Form.Check
                        label={`Ingredient Depleted`}
                        onClick={handleDepletedClick}
                        checked={isDepleted}
                    />
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

export default IngredientDetails
