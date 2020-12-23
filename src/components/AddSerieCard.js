import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'

export default function AddSerieCard({serie, onNavigate}) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={ () => onNavigate(serie) }
        >
            <SafeAreaView style={styles.card}>

                <Image
                    style={styles.image}
                    source={require('../resources/plus.png')}
                />

            </SafeAreaView>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width / 2  
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: '50%',
        height: '50%',
    }
});