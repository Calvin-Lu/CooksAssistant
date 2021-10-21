import axios from 'axios'

const url = "http://localhost:5000/users"

export const getAllUsers = () => axios.get(url)
export const createUser = (newUser) => axios.post(url, newUser)
export const addIngredient = (newIngredient) => {
    const addIngredientUrl = url + "/addIngredient"
    return axios.patch(addIngredientUrl, newIngredient, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
}
export const deleteIngredient = (ingredientId) => {
    const deleteIngredientUrl = url + "/deleteIngredient"
    return axios.patch(deleteIngredientUrl, ingredientId, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
    })
}
export const toggleIngredientDepleted = (ingredientId) => {
  const toggleIngredientDepletedUrl = url + "/toggleIngredientDepleted"
  return axios.patch(toggleIngredientDepletedUrl, ingredientId, {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}
export const addRecipe = (newRecipe) => {
    const addRecipeUrl = url + "/addRecipe"
    return axios.patch(addRecipeUrl, newRecipe, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
    })
}
export const deleteRecipe = (recipeId) => {
    console.log("deleteRecipe api reached")
    const deleteRecipeUrl = url + "/deleteRecipe"
    return axios.patch(deleteRecipeUrl, recipeId, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
  })
}
export const loginUser = (userInfo) => {
    const loginUrl = url + "/login"
    return axios.post(loginUrl, userInfo, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
}
export const logoutUser = () => {
    const logoutUrl = url + "/logout"
    return axios.post(logoutUrl)
}