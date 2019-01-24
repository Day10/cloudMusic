import {FETCH_REQUEST, FETCH_FAILURE, FETCH_SUCCESS} from '../constants/actionTypes'
const initalState = {
    banners: [],
    personalized: [],
    isFetching: true,
    didInvalidate: true
}

const exploreReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            console.log('loading...')
            return state;
        case FETCH_SUCCESS:
            return {
                ...state,
                ...{personalized: action.payload.data.result}
            };
        case FETCH_FAILURE:
            console.log('error')
            return state;
        default:
            return state
    }
}

export default exploreReducer