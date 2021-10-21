import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import Logo from '../imgs/Logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoginForm, toggleRegistrationForm, toggleLogoutForm } from '../state/actions/popups'

const NavigationBar = () => {

    const dispatch = useDispatch()

    const user = useSelector((state) => state.users)

    const handleRegisterClick = (e) => {
        const shouldOpenPopup = true
        dispatch(toggleRegistrationForm(shouldOpenPopup))
    }

    const handleLoginClick = (e) => {
        const shouldOpenPopup = true
        dispatch(toggleLoginForm(shouldOpenPopup))
    }

    const handleLogoutClick = (e) => {
        const shouldOpenPopup = true
        dispatch(toggleLogoutForm(shouldOpenPopup))
    }

    return (
        <div>
            <Navbar className="navbar" expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <img 
                            src={Logo}
                            alt="Cook's Assistant logo"
                            className="d-line-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className="me-auto">

                        </Nav>
                        {user.loggedIn ? 
                        <div className="navbar-logged-in">
                            <h1 className="navbar-text">Hello, {user.loggedInUser}</h1>
                            <Button variant="warning" className="navbar-button navbar-logout-button" onClick={handleLogoutClick}>
                                <div className="navbar-button-text">Logout</div>
                            </Button>
                         </div>
                        : 
                        <div>
                            <Button variant="warning" className="navbar-button" onClick={handleRegisterClick}>
                                <div className="navbar-button-text" >Register</div>
                            </Button>
                            <Button variant="warning" className="navbar-button" onClick={handleLoginClick}>
                                <div className="navbar-button-text">Login</div>
                            </Button>
                        </div>
                        }

                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )  
}

export default NavigationBar
