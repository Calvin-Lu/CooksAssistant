import { combineReducers } from 'redux'
import users from './users'
import popups from './popups'


export default combineReducers( {
    users,
    popups
})