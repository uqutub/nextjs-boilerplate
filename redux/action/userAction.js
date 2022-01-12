import axios from 'axios'
import absoluteUrl from 'next-absolute-url'
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from '../constant/userConstant'

export const userLoginAction = (req) => async (dispatch) => {
    try {
        const { origin } = absoluteUrl(req)
        // for same origin
        // const { data } = await axios.get(`${origin}/todos/1`)
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/x1x123')
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error?.response?.data?.message || 'Login: Error!'
        })
    }
}