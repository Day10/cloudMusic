import {GET_HOME_DATA, FETCH_REQUEST, FETCH_FAILURE, FETCH_SUCCESS} from '../constants/actionTypes';
import axios from 'axios'


export const getHomeData = () => (dispatch, getState) => {
    dispatch({type: FETCH_REQUEST});
    axios.get('http://localhost:3000/personalized').then(
        response => {
            dispatch({type: FETCH_SUCCESS, payload: response})
        }
    ).catch(
        error => {
            dispatch({type: FETCH_FAILURE})
        }
    )
}