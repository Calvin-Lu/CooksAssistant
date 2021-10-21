import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Recipe from './Recipe'
import {v4 as uuidv4} from 'uuid'
import { toggleAddRecipeForm } from '../state/actions/popups'

const RecipesBox = () => {

    const dispatch = useDispatch()

    const currentRecipes = useSelector((state) => state.users.recipes)
    const availableRecipes = useSelector((state) => state.users.availableRecipes)

    const handleAddRecipeClick = (e) => {
        const shouldOpenPopup = true
        dispatch(toggleAddRecipeForm(shouldOpenPopup))
    }

    return (
        <Container className="recipes-box" sm="2">
            <div className="recipes-box-header">
                <h1>Recipes</h1>
                <Button variant="warning add-recipe-button" onClick={handleAddRecipeClick}>
                    +
                </Button>
            </div>
            <div className="recipes-list">
                {currentRecipes.map((recipe) => (
                    <Recipe key={uuidv4()} content={recipe} available={availableRecipes.includes(recipe)}/>
                ))}
            </div>
            
        </Container>
    )
}

export default RecipesBox
