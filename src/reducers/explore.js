import {GET_HOME_DATA, FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS} from '../constants/actionTypes'
const initalState = {
    banners: [],
    personalized: [],
    isFetching: true,
    didInvalidate: true
}

const exploreReducer = (state = initalState, action) => {
    switch(action.type){
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                ...{personalized: action.payload}
            };
        default:
            return state
    }
}

export default exploreReducer