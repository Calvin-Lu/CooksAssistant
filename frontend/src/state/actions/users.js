import * as api from '../../api/index'

// Action Creators
export const getAllUsers = () => async(dispatch) => {
    try {
        const { data } = await api.getAllUsers()

        dispatch({ type: 'GET_ALL', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createUser = (user) => async (dispatch) => {

    try {
        const { data } = await api.createUser(user)
        if (data.error === null) {
            dispatch({ type: 'CREATE', payload: data })
        } else {
            dispatch({ type: 'REGISTRATION_ERROR_USERNAME_ALREADY_EXISTS'})
        }
    } catch (error) {
        console.log(error)
    }
}

export const addIngredient = (ingredient) => async (dispatch) => {
    const newIngredient = { ingredientName: ingredient }
    api.addIngredient(newIngredient)
        .then((response) => {
            dispatch({ type:'ADD_INGREDIENT', payload: response.data })
        })
        .catch((error) => {
            console.log(error)
        })

}

export const deleteIngredient = (ingredientId) => async (dispatch) => {
    const ingredientIdObject = { ingredientId } // api expects json object, need to wrap recipeId in an object
    api.deleteIngredient(ingredientIdObject)
        .then((response) => {
            dispatch({ type: 'DELETE_INGREDIENT', payload: response.data })
        })
        .catch((error) => {
            console.log(error)
        })
}

export const toggleIngredientDepleted = (ingredient) => async (dispatch) => {
    api.toggleIngredientDepleted(ingredient)
        .then((response) => {
            dispatch({ type: 'TOGGLE_INGREDIENT_DEPLETED', payload: response.data })
        })
        .catch((error) => {
            console.log(error)
        })
}

export const addRecipe = (newRecipe) => async (dispatch) => {
    api.addRecipe(newRecipe)
        .then((response) => {
            dispatch({ type:'ADD_RECIPE', payload: response.data})
        })
        .catch((error) => {
            console.log(error)
        })
}

export const deleteRecipe = (recipeId) => async (dispatch) => {

    const recipeIdObject = { recipeId }    // api expects json object, need to wrap recipeId in an object
    api.deleteRecipe(recipeIdObject)
        .then((response) => {
            dispatch({ type:'DELETE_RECIPE', payload: response.data })
        })
        .catch((error) => {
            console.log(error)
        })
}

export const updateAvailableRecipes = () => async (dispatch) => {
    dispatch({ type:'UPDATE_AVAILABLE_RECIPES' })
}

export const loginUser = (userInfo) => async (dispatch) => {
    try {    // TODO: delete try-catch block
        api.loginUser(userInfo).then((response) => {
            dispatch({ type:'LOGIN_USER', payload: response.data })
        }).catch((error) => {
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }

}

export const logoutUser = () => async (dispatch) => {
    try {
        api.logoutUser().then((response) => {
            dispatch({ type:'LOGOUT_USER' })
        }).catch(error => console.log(error)) 
    } catch (error) {
        console.log(error)
    }
}