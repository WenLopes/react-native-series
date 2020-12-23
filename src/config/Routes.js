import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginPage from '../pages/LoginPage'
import SeriesPage from '../pages/SeriesPage'
import SerieDetailPage from '../pages/SerieDetailPage'

export default function Routes() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="SeriesPage"
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

                <Stack.Screen
                    name="SerieDetailPage"
                    component={SerieDetailPage}
                    options={({route}) => ({title: route.params.serie.title, ...navigation.serieDetailPage})}
                />

            </Stack.Navigator>
        </NavigationContainer>
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
    },

    serieDetailPage: {}
}