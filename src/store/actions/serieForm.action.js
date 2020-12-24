import firebase from 'firebase';

export const SET_FIELD= 'SET_FIELD';
export const setField = (field, value) => ({
    type: SET_FIELD,
    payload: { field, value}
})

export const STORE_SERIE = 'STORE_SERIE';
export const saveSerie = serie => (dispatch, getState) => {

    const state = getState();
    const { uid } = state.userReducer.user;
    console.log(uid);

    firebase
        .database()
        .ref(`/users/${uid}/series`)
        .push(serie)
        .then((res)=>{
            console.log(res);
        })

    return {
        type: STORE_SERIE,
        serie
    }
}