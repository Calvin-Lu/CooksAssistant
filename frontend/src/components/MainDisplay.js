import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Button } from 'react-bootstrap'
import MainDisplayRecipe from './MainDisplayRecipe'
import { v4 as uuidv4 } from 'uuid'
import { updateAvailableRecipes } from '../state/actions/users'

const MainDisplay = () => {

    const dispatch = useDispatch()
    
    const availableRecipes = useSelector((state) => state.users.availableRecipes)

    const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0)

    const handleNextClick = (e) => {
        if ((currentRecipeIndex + 1) < availableRecipes.length) {
            setCurrentRecipeIndex(currentRecipeIndex + 1)
        } else {
            setCurrentRecipeIndex(0)   // first recipe
        }
    }

    const handlePreviousClick = (e) => {
        if ((currentRecipeIndex - 1) >= 0) {
            setCurrentRecipeIndex(currentRecipeIndex - 1)
        } else {
            setCurrentRecipeIndex(availableRecipes.length - 1) // last recipe
        }
    }

    return (
        <Container classname="main-display">
            <h1 className="main-display-header">Here's what I can cook:</h1>
            <div className="main-display-control-panel">
                <Button variant="warning" onClick={handlePreviousClick}>Previous</Button>
                <h4>{availableRecipes.length > 0 ? currentRecipeIndex + 1 : 0} of {availableRecipes.length}</h4>
                <Button variant="warning" onClick={handleNextClick}>Next</Button>
            </div>
            <div className="main-display-recipe">
                {typeof availableRecipes[currentRecipeIndex] !== "undefined" ? 
                    <MainDisplayRecipe key={uuidv4()} recipe={availableRecipes[currentRecipeIndex]}/>
                : null}
            </div>
        </Container>

    )
}

export default MainDisplay
