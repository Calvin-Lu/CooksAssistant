import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleRecipeDetails } from '../state/actions/popups'

const Recipe = ({ content, available }) => {

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        const payload = {
            showRecipeDetails: true,
            selectedRecipe: content
        }
        dispatch(toggleRecipeDetails(payload))
    }

    return (
        <div className={available ? "recipes-list-item" : "recipes-list-item unavailable-recipe"} onClick={handleClick}>
            {content.name}
        </div>
    )
}

export default Recipe
