import * as actionsTypes from '../constants/actionTypes';

const initialState = [];

export default function tracks(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.TRACKS_SET:
            return {...state, ...tracks}
    }
    return state
}
