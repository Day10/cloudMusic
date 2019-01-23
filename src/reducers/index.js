import {combineReducers } from 'redux';
import tracks from './tracks';
import explore from './explore'

export default combineReducers({
    tracks,
    explore
})