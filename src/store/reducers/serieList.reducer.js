import { SET_SERIES } from '../actions'

const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_SERIES:
            return { ...state, ...payload }

        default:
            return state
    }
}
