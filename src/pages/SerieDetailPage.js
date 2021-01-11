import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Image, View,  } from 'react-native'
import Line from '../components/Line'
import LongLine from '../components/LongLine'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { deleteSerie } from '../store/actions'

const SerieDetailPage = (props) => {
    
    const {serie} = props.route.params; 
    
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer} >

                <Image 
                    style={ styles.avatar }
                    source={{ uri: serie.img }}
                />

                <View style={styles.detailContainer}> 

                    <Line label="Título:" content={ serie.title } />
                    <Line label="Gênero:" content={ serie.gender } />
                    <Line label="Nota:" content={ serie.rate } />
                    <LongLine label="Sinopse:" content={ serie.description } />

                </View>

                <View style={styles.button}>
                    <Button
                        title="Editar"
                        onPress={ () => { props.navigation.replace('SerieFormPage',{ serieToEdit: serie}) } }
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        title="Remover"
                        buttonStyle={{backgroundColor: 'red'}}
                        onPress={ async () => { 
                            const hasDeleted = await props.deleteSerie(serie)
                            if(hasDeleted){
                                props.navigation.goBack();
                            }
                        }}
                    />
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 10, 
        flex: 1
    },

    scrollContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
    },

    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },

    avatar: {
        aspectRatio: 1,
        borderRadius: 10
    },

    button: {
        margin: 10
    }

});

const mapDispatchToProps = {
    deleteSerie
}

export default connect(null, mapDispatchToProps)(SerieDetailPage)