import firebase from 'firebase';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT'

const userLoginSuccess = payload => {
 
    return {
        type: USER_LOGIN_SUCCESS,
        payload
    }
};

const userLogout = () => ({
    type: USER_LOGOUT
})

export const tryLogin = (login, password) => dispatch => {

    firebase
        .auth()
        // .signInWithEmailAndPassword('testefirebase@mail.com.br', '123123')
        .signInWithEmailAndPassword(login, password)
        .then(user => {
            console.log(user);
            dispatch(userLoginSuccess(user))
        })
        .catch(error => {
            console.log('Algo deu errado: '+error)
        })
        // .catch( error => { 

        //     if(error.code === 'auth/user-not-found'){
        //         Alert.alert(
        //             'Usuário não encontrado',
        //             'Deseja criar um cadastro com os dados inseridos?',
        //             [
        //                 {
        //                     text: 'Não',
        //                     onPress: () => {},
        //                     style: 'cancel'
        //                 },
        //                 {
        //                     text: 'Sim',
        //                     onPress: () => {
        //                         firebase
        //                             .auth()
        //                             .createUserWithEmailAndPassword(login, password)
        //                             .then( () => {
        //                                 loginUserSuccess()
        //                             })
        //                             .catch(error => {
        //                                 loginUserFailed(error)
        //                             })
        //                     }
        //                 }
        //             ],
        //             { cancelable: false }
        //         )

        //         return;
        //     }

        //     loginUserFailed(error)
        // })
        // .then( () => setIsLoading(false) ) 

}