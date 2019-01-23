import {GET_HOME_DATA, FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS} from '../constants/actionTypes';
import axios from 'axios'


export const getHomeData = () => (dispatch, getState) => {
    dispatch({type: FETCH_POSTS_REQUEST});
    return axios.get('http://localhost:3000/personalized').then(
        response => {
            dispatch({type: FETCH_POSTS_SUCCESS, payload: response})
        }
        
    )
}