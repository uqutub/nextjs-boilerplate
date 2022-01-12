import { combineReducers } from 'redux'
import { userReducer } from '../reducer/userReducer'
import { todoReducer } from '../reducer/todoReducer'

export default combineReducers({
    user: userReducer,
    todo: todoReducer
})