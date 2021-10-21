# Cook's Assistant

Web application that tracks recipes and ingredients, and displays the recipes that can be prepared with the currently available ingredients.


# Table of Contents
1. [How to Use](#howToUse)
    1. [Landing page](#landingPage)
    2. [Register an account](#registerAnAccount)
    3. [Login](#login)
    4. [Add an ingredient](#addAnIngredient)
    5. [Deleting or marking an ingredient as unavailable](#deleteOrMarkIngredient)
    6. [Add a recipe](#addARecipe)
    7. [View Recipes that can be prepared with available ingredients](#viewAvailableRecipes)
2. [Built With](#builtWith)

# How to Use <a name="howToUse"></a>

## Landing page <a name="landingPage"></a>
Users will need to register and log into an account.
![Alt text](frontend/src/imgs/LandingPage.png)

## Register an account <a name="registerAnAccount"></a>
Clicking the register button in the navigation bar will open the registration form. Usernames will have to be unique.
![Alt text](frontend/src/imgs/RegistrationForm.png)

## Login <a name="login"></a>
Clicking the login button in the navigation bar will open the login form, where users will be able to log into an existing account.
![Alt text](frontend/src/imgs/LoginForm.png)

## Add an ingredient <a name="addAnIngredient"></a>
Clicking the + button next to the "Ingredients" header will open a form that will allow logged in users to add and save ingredients to their profile. Users will be required to provide a name for the new ingredient.
![Alt text](frontend/src/imgs/AddIngredientForm.png)
Added ingredients are listed in the ingredients column:
![Alt text](frontend/src/imgs/SavedIngredient.png)

## Deleting or marking an ingredient as unavailable <a name="deleteOrMarkIngredient"></a>
Clicking on an ingredient inthe ingredients list will open a menu where users will be able to delete an ingredient, or mark an ingredient as being unavailable. Ingredients that are marked as being unavailable will cause recipes that require these ingredients to also be marked as being unavailable.
![Alt text](frontend/src/imgs/ModifyIngredient.png)
Ingredients that are marked as being unavailable will appear in the ingredients list with a red background. 
![Alt text](frontend/src/imgs/UpdatedIngredientList.png)

## Add a recipe <a name="addARecipe"></a>
Clicking the + button next to the "Recipes" header will open a form that will allow logged in users to add and save recipes to their profile. Users will be required to provide a name for the new recipe, as well as a list of necessary ingredients:
![Alt text](frontend/src/imgs/BlankRecipeForm.png)
<br/>
Example:
![Alt text](frontend/src/imgs/FilledRecipeForm.png)
Saved recipes will be listed in the recipes column:
![Alt text](frontend/src/imgs/InterfaceAfterRecipeAdded.png)
Recipes that cannot be prepared with the currently available ingredients will be highlighted in red.
![Alt text](frontend/src/imgs/MultipleRecipesListed.png)

## View recipes that can be prepared with available ingredients <a name="viewAvailableRecipes"></a>
Recipes that can be prepared with the currently available ingredients can be viewed in the "Here's what I can cook" column. The "Prev" and "Next" buttons will cycle between available recipes.
![Alt text](frontend/src/imgs/NextRecipe.png)



# Built with <a name="builtWith"></a>
- [React-Redux](https://react-redux.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Express](https://expressjs.com/)
- [Node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
