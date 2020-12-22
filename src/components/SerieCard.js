import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'

export default function SerieCard({serie}) {
    return (
        
        // <Card containerStyle={styles.container}>
        //     <Card.Title>{serie.title}</Card.Title>
        //     <Card.Image 
        //         source={{ 
        //             uri: serie.img,
        //             aspectRatio: 1,
        //             resizeMode: 'cover'
        //         }}
        //     >
        //         <Button
        //             icon={<Icon name='code' color='#ffffff' />}
        //             buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        //             title='INFO' 
        //         />
        //     </Card.Image>
        // </Card>

        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
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