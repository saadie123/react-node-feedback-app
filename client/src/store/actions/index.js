import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchUser = () => {
    return async (dispatch) => {
        let response = await axios.get('/auth/current_user');
        console.log(response);
        dispatch({ type: actionTypes.FETCH_USER, payload: response.data });       
    }
}