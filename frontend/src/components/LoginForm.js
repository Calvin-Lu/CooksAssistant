import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { loginUser } from '../state/actions/users'
import { toggleLoginForm } from '../state/actions/popups'

const LoginForm = () => {

    const dispatch = useDispatch()

    const [loginFormState, setLoginFormState] = useState({ username: "", password: "" })

    const handleChange = (e) => {
        setLoginFormState(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault()
        dispatch(loginUser(loginFormState))
        const shouldOpenForm = false
        dispatch(toggleLoginForm(shouldOpenForm))
    } 

    const handleCancelClick = (e) => {
        const shouldOpenForm = false
        dispatch(toggleLoginForm(shouldOpenForm))
    }

    return (
        <div className="popup-outer">
            <Form className="popup">
                <div className="popup-inner">
                    <h1>User Login</h1>
                    <Form.Group controlId="username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" onChange={handleChange}/>
                    </Form.Group>
                    <Button className="popup-inner-button" variant="warning" type="submit" onClick={handleSubmitClick}>
                        Login
                    </Button>
                    <Button className="popup-inner-button" variant="warning" onClick={handleCancelClick}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm
