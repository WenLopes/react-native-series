import firebase from 'firebase';

export const SET_FIELD= 'SET_FIELD';
export const setField = (field, value) => ({
    type: SET_FIELD,
    payload: { field, value}
})

export const SET_WHOLE_SERIE = 'SET_WHOLE_SERIE';
export const setWholeSerie = payload => ({
    type: SET_WHOLE_SERIE,
    payload
})

export const SERIE_SAVED_SUCCESS = 'SERIE_SAVED_SUCCESS';
export const serieSavedSuccess = () => ({
    type: SERIE_SAVED_SUCCESS
})

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
    type: RESET_FORM
})

export const STORE_SERIE = 'STORE_SERIE';
export const saveSerie = serie => {  
    return async (dispatch, getState) => {
        const state = getState();
        const { uid } = state.userReducer.user;
        const db = firebase.database();

        if(serie.id){

            await db.ref(`/users/${uid}/series/${serie.id}`).set(serie)

        } else {

            await db.ref(`/users/${uid}/series`).push(serie)

        }

        dispatch( serieSavedSuccess() );
    }
}