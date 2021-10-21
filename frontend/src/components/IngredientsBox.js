import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Ingredient from './Ingredient'
import { v4 as uuidv4 } from 'uuid'
import { toggleAddIngredientForm } from '../state/actions/popups'

const IngredientsBox = () => {

    const dispatch = useDispatch()

    const currentIngredients = useSelector((state) => state.users.ingredients)

    const handleAddIngredientClick = (e) => {
        const shouldOpenPopup = true
        dispatch(toggleAddIngredientForm(shouldOpenPopup))
    }

    return (
        <Container className="ingredients-box">
            <div className="ingredients-box-header">
                <h1>Ingredients</h1>
                <Button variant="warning add-ingredient-button" onClick={handleAddIngredientClick}>
                    +
                </Button>
            </div>
            <div className="ingredients-list">
                {currentIngredients.map((ingredient) => (
                    <Ingredient key={uuidv4()} ingredientInfo={ingredient} />
                ))}
            </div>
        </Container>
    )
}

export default IngredientsBox
 