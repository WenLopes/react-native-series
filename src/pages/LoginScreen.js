import React from 'react'
import { View, StyleSheet, ActivityIndicator, Text, Alert } from 'react-native'
import { ThemeProvider, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';

export default function LoginScreen(props) {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');

    React.useEffect(()=> {
        const firebaseConfig = {
            apiKey: "AIzaSyAtkgMgQjhDfpyEhsO04yxvlvFRwrj9uqE",
            authDomain: "series-b95c0.firebaseapp.com",
            projectId: "series-b95c0",
            storageBucket: "series-b95c0.appspot.com",
            messagingSenderId: "162541579687",
            appId: "1:162541579687:web:431de2bd5f2f59ab3a9a82",
            measurementId: "G-947DFFW25E"
        };

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

    }, [])

    const tryLogin = () => {

        setIsLoading(true);
        setMessage('');

        firebase
            .auth()
            // .signInWithEmailAndPassword('testefirebase@mail.com.br', '123123')
            .signInWithEmailAndPassword(login, password)
            .then((response) => {
                setMessage('Sucesso ao autenticar');
            })
            .catch( error => { 

                if(error.code === 'auth/user-not-found'){
                    Alert.alert(
                        'Usuário não encontrado',
                        'Deseja criar um cadastro com os dados inseridos?',
                        [
                            {
                                text: 'Não',
                                onPress: () => {},
                                style: 'cancel'
                            },
                            {
                                text: 'Sim',
                                onPress: () => {
                                    firebase
                                        .auth()
                                        .createUserWithEmailAndPassword(login, password)
                                        .then( () => {
                                            setMessage('Sucesso ao criar usuário');
                                        })
                                        .catch(error => {
                                            setMessage('Erro ao criar usuário: '+error) 
                                        })
                                }
                            }
                        ],
                        { cancelable: false }
                    )

                    return;
                }

                setMessage('Erro ao autenticar: '+error) 
            })
            .then( () => setIsLoading(false) )     
    }

    const renderButton = () => {

        if( !isLoading ){
            return (
                <Button
                    icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                        />
                    }
                    title=" Entrar"
                    onPress={ () => { tryLogin() }}
                />
            );
        }

        return (
            <ActivityIndicator size="large" color="#6ca2f7" />
        );
    } 

    const renderMessage = () => {

        return (
            <View>
                <Text> {message} </Text>
            </View>
        )

    }

    return (
        <ThemeProvider>
            <View style={styles.container}>
                <Input 
                    placeholder='Login' 
                    value={login}
                    onChangeText={ value => setLogin(value) } 
                />
 
                <Input 
                    placeholder="Senha" 
                    value={password} 
                    secureTextEntry={true}
                    onChangeText={ value => setPassword(value) } 
                />
                
                { renderButton() }

                { renderMessage() }

            </View>
        </ThemeProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 50,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    },
});
