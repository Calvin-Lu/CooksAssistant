import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleIngredientDetails } from '../state/actions/popups'

const Ingredient = ({ ingredientInfo }) => {

    const dispatch = useDispatch()

    const showIngredientDetails = useSelector((state) => state.popups.showIngredientDetails)

    const handleClick = (e) => {
        const payload = {
            showIngredientDetails: !showIngredientDetails,
            selectedIngredient: ingredientInfo
        }
        dispatch(toggleIngredientDetails(payload))
    }

    return (
        <div className={ingredientInfo.depleted ? "ingredients-list-item depleted-item" : "ingredients-list-item"} onClick={handleClick}>
            {ingredientInfo.name}
        </div>
    )
}

export default Ingredient
