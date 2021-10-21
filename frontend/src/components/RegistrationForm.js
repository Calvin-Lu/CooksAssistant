import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../state/actions/users'
import { toggleRegistrationForm } from '../state/actions/popups'

const RegistrationForm = () => {
    const dispatch = useDispatch()

    const registrationError = useSelector((state) => state.users.errorMessage)

    const [registrationState, setRegistrationState] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setRegistrationState(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault()
        if (registrationState.password === registrationState.confirmPassword) {
            const newUser = {"username": registrationState.username,
                        "password": registrationState.password
                    }
            dispatch(createUser(newUser))
                .then((result) => {
                    if (registrationError === "") {
                        const shouldOpenPopup = false
                        dispatch(toggleRegistrationForm(shouldOpenPopup))
                        alert("Registration successful.")
                    } else {
                        alert(registrationError)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })

        } else {
            alert("Passwords do not match.")
        }
    }

    const handleCancelClick = (e) => {
        const shouldOpenPopup = false
        dispatch(toggleRegistrationForm(shouldOpenPopup))
    }

    return (
        <div className="popup-outer">
            <Form className="popup">
                <div className="popup-inner">
                    <h1>New User Registration</h1>
                    <Form.Group controlId="username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" placeholder="Enter a Username" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter a Password" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" onChange={handleChange}/>
                    </Form.Group>
                    <Button className="popup-inner-button" variant="warning" type="submit" onClick={handleSubmitClick}>
                        Register
                    </Button>
                    <Button className="popup-inner-button" variant="warning" onClick={handleCancelClick}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default RegistrationForm
