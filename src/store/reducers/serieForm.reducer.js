import { 
    SET_FIELD, 
    SERIE_SAVED_SUCCESS, 
    SET_WHOLE_SERIE,
    RESET_FORM
} from '../actions/index'

const initialState =     {
    id: null,
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

    case SET_WHOLE_SERIE:
        return {...state, ...payload}

    case RESET_FORM:
        return {...state, ...initialState};

    case SERIE_SAVED_SUCCESS:
        return {...state, ...initialState};

    case SET_FIELD:
        return {...state, ...payload};

    default:
        return state;
    }
}
