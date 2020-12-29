import { SET_FIELD, SERIE_SAVED_SUCCESS } from '../actions/index'

const initialState =     {
    title: '',
    gender: 'drama',
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

    case SERIE_SAVED_SUCCESS:
        return {...state, ...initialState};

    case SET_FIELD:
        return {...state, ...payload};

    default:
        return state;
    }
}
