const initialState = {
    showIngredientDetails: false,
    selectedIngredient: {},
    showRecipeDetails: false,
    selectedRecipe: {},
    showLoginForm: false,
    showRegistrationForm: false,
    showLogoutForm: false,
    showAddIngredientForm: false,
    showAddRecipeForm: false
}

export default(state=initialState, action) => {
    switch (action.type) {
        case ('TOGGLE_LOGIN_FORM'):
            return {
                ...state,
                showLoginForm: action.payload.shouldOpenPopup
            }
        case ('TOGGLE_LOGOUT_FORM'):
            return {
                ...state,
                showLogoutForm: action.payload.shouldOpenPopup
            }
        case ('TOGGLE_REGISTRATION_FORM'):
            return {
                ...state,
                showRegistrationForm: action.payload.shouldOpenPopup
            }
        case ('TOGGLE_ADD_INGREDIENT_FORM'):
            return {
                ...state,
                showAddIngredientForm: action.payload.shouldOpenPopup
            }
        case ('TOGGLE_INGREDIENT_DETAILS'):
            return {
                ...state,
                showIngredientDetails: action.payload.showIngredientDetails, //payload will be true/false
                selectedIngredient: action.payload.selectedIngredient
            }
        case ('TOGGLE_ADD_RECIPE_FORM'):
            return {
                ...state,
                showAddRecipeForm: action.payload.shouldOpenPopup
            }
        case('TOGGLE_RECIPE_DETAILS'):
            return {
                ...state,
                showRecipeDetails: action.payload.showRecipeDetails,
                selectedRecipe: action.payload.selectedRecipe
            }
        default:
            return state
    }
}