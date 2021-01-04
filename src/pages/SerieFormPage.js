import React from 'react'
import { ScrollView, View, StyleSheet, Text, KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native'
import { ThemeProvider, Input, Slider, Icon, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { Picker } from '@react-native-picker/picker';
import { setField, saveSerie, setWholeSerie, resetForm } from '../store/actions/index';

const SerieFormPage = ({ 
    serieForm, 
    setField, 
    setWholeSerie,
    resetForm,
    saveSerie, 
    navigation,
    route
}) => {

    const genderOptions = [
        {label: 'Ação', value: 'acao'},
        {label: 'Drama', value: 'drama'},
        {label: 'Suspense', value: 'suspense'},
        {label: 'Terror', value: 'terror'},
    ]

    const [isSaving, setIsSaving] = React.useState(false);

    const executeSaveSerie = async () => {
        setIsSaving(true);

        try{
            await saveSerie(serieForm);
        } catch(e){
            Alert.alert('Erro!', 'Um erro ocorreu: ' + e.message);
        } finally {
            setIsSaving(false);
        }

        navigation.goBack();
    }

    const renderButton = () => {

        if(isSaving){
            return (
                <ActivityIndicator size="large" color="#6ca2f7" />
            );
        }

        return (
            <Button
                style={{width: '100%'}}
                icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                    />
                }
                title=" Salvar"
                onPress={ () => executeSaveSerie() }
            />
        )
    }

    React.useEffect(() => {

        const {params} = route;
        if(params && params.serieToEdit){
            setWholeSerie(params.serieToEdit);
            return;          
        }
        resetForm();

    }, []);

    return (
        <KeyboardAvoidingView style={{ flex: 1}} behavior="height" keyboardVerticalOffset={100} enabled>
            <ThemeProvider>
                <ScrollView style={styles.container}>
                    <View style={{ alignItems: 'center' }}>
                    
                        <Input 
                            placeholder='Título'
                            style={styles.input}
                            value={serieForm.title}
                            onChangeText={ value => setField('title', value) } 
                        />

                        <Input 
                            placeholder='Link da imagem'
                            style={styles.input}
                            value={serieForm.img}
                            onChangeText={ value => setField('img', value) } 
                        />

                        <Picker
                            selectedValue={serieForm.gender}
                            style={styles.dropDown_Container}
                            onValueChange={ itemValue => setField('gender', itemValue) }
                        >
                            {
                                genderOptions.map( (item) => {
                                    return <Picker.Item key={item.value} label={item.label} value={item.value} />
                                })
                            }
                        </Picker>

                        <View style={styles.sliderContainer}>
                            <Slider
                                maximumValue={100}
                                minimumValue={0}
                                step={5}
                                trackStyle={{ height: 10, backgroundColor: 'transparent' }}
                                thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                                thumbProps={{
                                children: (
                                    <Icon
                                    name="heartbeat"
                                    type="font-awesome"
                                    size={20}
                                    reverse
                                    containerStyle={{ bottom: 20, right: 20 }}
                                    color="#f04f5c"
                                    />
                                ),
                                }}
                                value={serieForm.rate}
                                onValueChange={value => setField('rate', value)}
                            />
                            <View style={{ justifyContent: 'center',alignItems: 'center' }}>
                                <Text style={{fontSize:17, fontWeight: 'bold'}}>Nota: {serieForm.rate}</Text>
                            </View>
                        </View>

                        <Input 
                            numberOfLines={6}
                            multiline={true}
                            placeholder='Descrição'
                            style={styles.input}
                            value={serieForm.description}
                            onChangeText={ value => setField('description', value) } 
                        />

                        { renderButton() }

                    </View>
                </ScrollView>
            </ThemeProvider>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center'
    },
    input: {},

    sliderContainer: {
        width: '95%',
        justifyContent: 'center'
    },

    dropDown_Container: {
        width: '95%',
        height: 50,
        borderBottomColor: '#000'
    },
    dropDown_Drop: {},

    dropDown_ActiveLabel: {
        fontWeight: 'bold'
    }
});

function mapStateToProps(state){
    return {
        serieForm: state.serieFormReducer
    }
}

const mapDispatchToProps = {
    setField,
    saveSerie,
    setWholeSerie,
    resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);