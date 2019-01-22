import { TRACKS_SET } from '../constants/actionTypes'

export function setTracks (tracks) {
    return {
        type: TRACKS_SET,
        tracks
    }
}