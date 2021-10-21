import React from 'react'

const MainDisplayRecipe = ({ recipe }) => {
    return (
        <div>
            <h2 className="main-display-recipe-title">{recipe.name} (~{recipe.preparationTime} mins)</h2>
            <h4>Ingredients:</h4>
            {recipe.requiredIngredients.map((ingredient) => (
                <p>{ingredient}</p>
            ))}
            <h4>How to prepare:</h4>
            <p>{recipe.instructions}</p>
        </div>
    )
}

export default MainDisplayRecipe
