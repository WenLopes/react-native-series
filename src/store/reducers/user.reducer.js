import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions'

const initialState = null

export default (state = initialState, { type, payload }) => {

    switch (type) {

        case USER_LOGIN_SUCCESS:
            console.log('Estou no user_login_success', payload)
            return { ...state, ...payload }

        case USER_LOGOUT:
            return { ...state, ...payload }

        default:
            return state
    }
}
