const initialState = {
    loggedIn: false,
    loggedInUser: "",
    ingredients: [],
    recipes: [],
    availableRecipes: [],
    errorMessage: ""
}

export default (state = initialState, action) => {
    switch(action.type) {
        case('GET_ALL'):
            return state
        case('CREATE'):
            return {
                ...state,
                errorMessage: ""
            }
        case('REGISTRATION_ERROR_USERNAME_ALREADY_EXISTS'):
            return {
                ...state,
                errorMessage: "There already exists a user with that username."
            }
        case('LOGIN_USER'):
            return {
                ...state,
                loggedIn: true,
                loggedInUser: action.payload.username,
                ingredients: action.payload.ingredients,
                recipes: action.payload.recipes
            }
        case('LOGOUT_USER'):
            return initialState
        case('ADD_INGREDIENT'):
            return { 
                ...state,
                ingredients: action.payload //payload contains all ingredients after addition
            }
        case('DELETE_INGREDIENT'):
            return {
                ...state,
                ingredients: action.payload // payload contains all ingredients after deletion
            }
        case('TOGGLE_INGREDIENT_DEPLETED'):
            return {
                ...state,
                ingredients: action.payload
            }
        case('ADD_RECIPE'): //payload contains all recipes after addition
            return {
                ...state,
                recipes: action.payload
            }
        case('DELETE_RECIPE'): //payload contains all recipes after deletion
            return {
                ...state,
                recipes: action.payload
            }
        case('UPDATE_AVAILABLE_RECIPES'):
            const result = []
            const availableIngredients = state.ingredients.filter((ingredient => !ingredient.depleted))
            const availableIngredientsNames = availableIngredients.map(ingredient => ingredient.name)
            for (let i = 0; i < state.recipes.length; i++) {
                let possible = true
                for (let j = 0; j < state.recipes[i].requiredIngredients.length; j++) {
                    if (!availableIngredientsNames.includes(state.recipes[i].requiredIngredients[j])) {
                        possible = false
                    }
                }
                if (possible) {
                    result.push(state.recipes[i])
                }
            }
            return {
                ...state,
                availableRecipes: result
            }
        default:
            return state
    }
}