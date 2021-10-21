import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addIngredient } from '../state/actions/users'
import { toggleAddIngredientForm } from '../state/actions/popups'

const IngredientForm = () => {

    const dispatch = useDispatch()

    const [ingredientName, setIngredientName] = useState("")

    const handleChange = (e) => {
        setIngredientName(e.target.value)
    }

    const handleSubmitClick = (e) => {
        e.preventDefault()
        const newIngredient = ingredientName
        dispatch(addIngredient(newIngredient))
        const shouldOpenPopup = false
        dispatch(toggleAddIngredientForm(shouldOpenPopup))
    }

    const handleCancelClick = (e) => {
        const shouldOpenPopup = false
        dispatch(toggleAddIngredientForm(shouldOpenPopup))
    }

    return (
        <div className="popup-outer">
            <Form className="popup">
                <div className="popup-inner">
                    <h1>Add an Ingredient</h1>
                    <Form.Group controlId="ingredientName">
                        <Form.Label>Ingredient Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Ingredient Name" onChange={handleChange}/>
                    </Form.Group>
                    <Button className="popup-inner-button" variant="warning" type="submit" onClick={handleSubmitClick}>
                        Add
                    </Button>
                    <Button className="popup-inner-button" variant="warning" onClick={handleCancelClick}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default IngredientForm
