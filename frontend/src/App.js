import './App.css';
import React , { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import NavigationBar from './components/NavigationBar'
import RegistrationForm from './components/RegistrationForm'
import IngredientForm from './components/IngredientForm'
import LoginForm from './components/LoginForm'
import RecipesBox from './components/RecipesBox';
import MainDisplay from './components/MainDisplay';
import IngredientsBox from './components/IngredientsBox';
import AddRecipeForm from './components/AddRecipeForm';
import LogoutConfirmation from './components/LogoutConfirmation';
import IngredientDetails from './components/IngredientDetails';
import RecipeDetails from './components/RecipeDetails'
import { updateAvailableRecipes } from './state/actions/users'

function App() {

  const dispatch = useDispatch()

  const showIngredientDetails = useSelector((state) => state.popups.showIngredientDetails)
  const showRecipeDetails = useSelector((state) => state.popups.showRecipeDetails)
  const showLoginForm = useSelector((state) => state.popups.showLoginForm)
  const showRegistrationForm = useSelector((state) => state.popups.showRegistrationForm)
  const showLogoutForm = useSelector((state) => state.popups.showLogoutForm)
  const showAddIngredientForm = useSelector((state) => state.popups.showAddIngredientForm)
  const showAddRecipeForm = useSelector((state) => state.popups.showAddRecipeForm)
  
  const ingredients = useSelector((state) => state.users.ingredients)
  const recipes = useSelector((state) => state.users.recipes)

  useEffect(() => {
    dispatch(updateAvailableRecipes())
  }, [JSON.stringify(ingredients), JSON.stringify(recipes)])

  return (
    <div className="App">
      <NavigationBar />
      {showRegistrationForm ? <RegistrationForm /> : null}
      {showAddIngredientForm ? <IngredientForm /> : null}
      {showLoginForm ? <LoginForm /> : null}
      {showLogoutForm ? <LogoutConfirmation /> : null}
      {showAddRecipeForm ? <AddRecipeForm /> : null}
      {showIngredientDetails ? <IngredientDetails /> : null}
      {showRecipeDetails ? <RecipeDetails /> : null}
      
      <Container fluid className="main-container">
        <Row>
          <Col xs={3} style={{ paddingLeft:0, paddingRight:0 }}>
            <IngredientsBox />
          </Col>
          <Col xs={3} style={{ paddingLeft:0, paddingRight:0 }}>
            <RecipesBox />
          </Col>
          <Col xs={6} style={{ paddingLeft:0, paddingRight:0 }}>
            <MainDisplay />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
