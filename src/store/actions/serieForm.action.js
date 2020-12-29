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
        return await firebase
                .database()
                .ref(`/users/${uid}/series`)
                .push(serie)
                .then(() => dispatch( serieSavedSuccess() ))
    }
}

/** Código da aula que funciona */
// export const saveSerie = serie => {  

//     const {currentUser} = firebase.auth();
//     return async dispatch => {
//         try{
//             const {uid} = currentUser;
//             return await firebase
//                     .database()
//                     .ref(`/users/${uid}/series`)
//                     .push(serie)

//         } catch(error){
//             console.log('entrei no error: '+error);
//         }
//     }
// }