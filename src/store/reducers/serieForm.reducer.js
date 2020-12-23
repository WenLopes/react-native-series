import { SET_FIELD } from '../actions/index'

const initialState =     {
    title: '',
    gender: '',
    rate: 0,
    img: '',
    description: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_FIELD:
        const newState = {...state};
        newState[payload.field] = payload.value;
        return {...state, ...newState};

    default:
        return state
    }
}
