import React from 'react'
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'
import { ThemeProvider, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import { tryLogin, userLoginSuccess } from './../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import userReducer from '../store/reducers/user.reducer';

export default function LoginPage(props) {

    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer);

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

    const makeLogin = () => {

        setIsLoading(true);
        setMessage('');

        tryLogin( login, password )
            .then( (user) => {

                if(user){
                    dispatch( userLoginSuccess(user) );
                    return props.navigation.replace('SeriesPage');
                }

                setIsLoading(false);
                setMessage('');

            })
            .catch(error => {

                setIsLoading(false);
                setMessage('Algo deu errado: '+error.code);

            })
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
                    onPress={ () => { makeLogin() }}
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
                    keyboardType="email-address"
                    autoCapitalize='none'
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
