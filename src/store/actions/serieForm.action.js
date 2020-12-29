import firebase from 'firebase';

export const SET_FIELD= 'SET_FIELD';
export const setField = (field, value) => ({
    type: SET_FIELD,
    payload: { field, value}
})

export const SERIE_SAVED_SUCCESS = 'SERIE_SAVED_SUCCESS';
export const serieSavedSuccess = () => ({
    type: SERIE_SAVED_SUCCESS
})

export const STORE_SERIE = 'STORE_SERIE';
export const saveSerie = serie => {  
    return async (dispatch, getState) => {
        const state = getState();
        const { uid } = state.userReducer.user;
        await firebase
            .database()
            .ref(`/users/${uid}/series`)
            .push(serie)

        dispatch( serieSavedSuccess() );
    }
}