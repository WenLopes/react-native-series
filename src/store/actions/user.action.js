import firebase from 'firebase';
import { Alert } from 'react-native'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT'

export const userLoginSuccess = payload => {
 
    return {
        type: USER_LOGIN_SUCCESS,
        payload
    }
};

const userLogout = () => ({
    type: USER_LOGOUT
})

export const tryLogin = (login, password) => {

    return firebase
        .auth()
        .signInWithEmailAndPassword(login, password)
        .then(user => {
            return user;
        })
        .catch( error => { 

            if(error.code === 'auth/user-not-found'){
                return new Promise( (resolve, reject) => {
                    Alert.alert(
                        'Usuário não encontrado',
                        'Deseja criar um cadastro com os dados inseridos?',
                        [
                            {
                                text: 'Não',
                                onPress: () => resolve(),
                                style: 'cancel'
                            },
                            {
                                text: 'Sim',
                                onPress: () => {
                                    firebase
                                        .auth()
                                        .createUserWithEmailAndPassword(login, password)
                                        .then(user => resolve(user))
                                        .catch(error => reject(error))
                                }
                            }
                        ],
                        { cancelable: false }
                    )
                })

            }

            return new Promise.reject(error);
        });
}

/** Exemplo de Async Await com Axios */
// export default function createUser(params) {  
//     return async dispatch => {
//       function onSuccess(success) {
//         dispatch({ type: CREATE_USER, payload: success });
//         return success;
//       }
//       function onError(error) {
//         dispatch({ type: ERROR_GENERATED, error });
//         return error;
//       }
//       try {
//         const success = await axios.post('http://www', params);
//         return onSuccess(success);
//       } catch (error) {
//         return onError(error);
//       }
//     }
//   }