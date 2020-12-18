import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../pages/LoginPage'
import SeriesPage from '../pages/SeriesPage'

export default function Routes() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={navigation.defaultOptions}                    
        >

            <Stack.Screen
                name="LoginPage"
                component={LoginPage}
                options={navigation.login}
            />

            <Stack.Screen
                name="SeriesPage"
                component={SeriesPage}
                options={navigation.series}
            />

        </Stack.Navigator>
    )
}

const navigation = {

    defaultOptions: {
        title: 'Séries',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#77a9d1',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 30
        }
    },

    login: {
        title: 'Login'
    },

    series: {
        title: 'Séries'
    }

}