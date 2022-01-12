import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from '../constant/userConstant'

export const userReducer = (state = { user: null, error: null }, action) => {
    switch (action.type) {

        case USER_LOGIN_SUCCESS:
            return {
                // will use action.payload on actual API
                user: { name: 'guest', id: 1234 },
                error: null
            }

        case USER_LOGIN_FAIL:
            console.log('USER_LOGIN_FAIL > ', action.payload)
            return {
                error: { message: action.payload }
            }

        default:
            return { ...state };
    }
}