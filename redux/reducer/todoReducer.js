import { FETCH_TODOS_SUCCESS, FETCH_TODOS_FAIL } from '../constant/todoConstant'

export const todoReducer = (state = { user: null, error: null }, action) => {
    switch (action.type) {

        case FETCH_TODOS_SUCCESS:
            return { todo: action.payload, error: null }

        case FETCH_TODOS_FAIL:
            return { error: { message: action.payload } }

        default:
            return { ...state };
    }
}