import firebase from 'firebase';

export const SET_SERIES = 'SET_SERIES';
const setSeries = payload => ({
    type: SET_SERIES,
    payload
})

export const watchSeries = () => {

    return (dispatch, getState) => {
        const state = getState();
        const { uid } = state.userReducer.user;
        firebase
            .database()
            .ref(`/users/${uid}/series`)
            .on('value', snapshot => {
                /** Método "ON" é próprio do firebase e monitora as modificações feitas na base de dados */
                dispatch( setSeries( snapshot.val() ) );
            })
    }
}