import axios from 'axios'
import { FETCH_TODOS_SUCCESS, FETCH_TODOS_FAIL } from '../constant/todoConstant'

export const getTodo = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        dispatch({
            type: FETCH_TODOS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FETCH_TODOS_FAIL,
            payload: error?.response?.data?.message || 'Error in Fetching Todo'
        })
    }
}