import firebase from 'firebase';
import { Alert } from 'react-native'

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


export const deleteSerie = serie => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            Alert.alert(
                'Deletar', 
                `Deseja deletar a série ${serie.title} ?`,
                [
                    {
                        text: 'Não',
                        onPress: () => {
                            resolve(false);
                        }
                    },
                    {
                        text: 'Sim',
                        onPress: async () => {
                            const state = getState();
                            const { uid } = state.userReducer.user;
                            try {

                                await firebase
                                        .database()
                                        .ref(`/users/${uid}/series/${serie.id}`)
                                        .remove()
    
                                resolve(true);

                            } catch(e){

                                reject(e)

                            }
                        } 
                    }
                ],
                { cancelable: false }
            )
        })
    }
}