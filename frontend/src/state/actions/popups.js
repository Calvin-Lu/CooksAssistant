export const toggleIngredientDetails = (ingredient) => async (dispatch) => {
    dispatch({ type: 'TOGGLE_INGREDIENT_DETAILS', payload: ingredient })
}

export const toggleRecipeDetails = (recipe) => async (dispatch) => {
    dispatch({ type: 'TOGGLE_RECIPE_DETAILS', payload: recipe })
}

export const toggleLoginForm = (shouldOpenPopup) => async (dispatch) => {
    dispatch({ type: 'TOGGLE_LOGIN_FORM', payload: { shouldOpenPopup } })
}

export const toggleRegistrationForm = (shouldOpenPopup) => async (dispatch) => {
    dispatch( { type:'TOGGLE_REGISTRATION_FORM', payload: { shouldOpenPopup } })
}

export const toggleLogoutForm = (shouldOpenPopup) => async (dispatch) => {
    dispatch( { type:'TOGGLE_LOGOUT_FORM', payload: { shouldOpenPopup } } )
}

export const toggleAddIngredientForm = (shouldOpenPopup) => async (dispatch) => {
    dispatch( { type:'TOGGLE_ADD_INGREDIENT_FORM', payload: { shouldOpenPopup } } )
}

export const toggleAddRecipeForm = (shouldOpenPopup) => async (dispatch) => {
    dispatch( { type:'TOGGLE_ADD_RECIPE_FORM', payload: { shouldOpenPopup } } )
}