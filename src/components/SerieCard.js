import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'

export default function SerieCard({serie, onNavigate}) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={ () => onNavigate(serie) }
        >
            <SafeAreaView style={styles.card}>

                <Image
                    aspectRatio={1}
                    resizeMode='cover'
                    source={{
                        uri: serie.img
                    }}
                />
                
                <SafeAreaView style={styles.cardTitleWrapper}>
                    <Text style={styles.cardTitle}> {serie.title} </Text>
                </SafeAreaView>

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
        borderWidth: 1        
    },
    cardTitleWrapper: {
        backgroundColor: 'black',
        height: 50,
        position: 'absolute',
        bottom: 0,
        opacity: 0.8,
        width: '100%',
        alignItems: 'center',

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 3,
        paddingRight: 3,
    },
    cardTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
});