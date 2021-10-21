import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { logoutUser } from '../state/actions/users'
import { toggleLogoutForm } from '../state/actions/popups'

const LogoutConfirmation = () => {

    const dispatch = useDispatch()

    const handleLogoutClick = (e) => {
        e.preventDefault()
        dispatch(logoutUser())
        const shouldOpenPopup = false
        dispatch(toggleLogoutForm(shouldOpenPopup))
    }

    const handleCancelClick = (e) => {
        const shouldOpenPopup = false
        dispatch(toggleLogoutForm(shouldOpenPopup))
    }

    return (
        <div className="popup-outer">
            <div className="popup">
                <div className="popup-inner">
                    <h1>Confirm Logout?</h1>
                    <Button className="popup-inner-button" variant="warning" onClick={handleLogoutClick}>
                        Yes
                    </Button>
                    <Button className="popup-inner-button" variant="warning" onClick={handleCancelClick}>
                        No
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LogoutConfirmation
