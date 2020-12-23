import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import series from '../../series.json';
import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';

export default function SeriesPage(props) {

    const renderFlatList = (item) => {
      if( item.isLast ){
        return (
          <AddSerieCard 
            onNavigate={() => props.navigation.navigate('SerieFormPage')}
          />
        )
      }

      return (
        <SerieCard 
          serie={item}
          onNavigate={ serie => props.navigation.navigate('SerieDetailPage', {serie} ) } 
        />
      );
    }

    return (
        <>
          <FlatList 
            data={[...series, { isLast: true }]}
            keyExtractor={item => item.id}
            numColumns='2'
            ListHeaderComponent={ () => ( <View style={styles.marginTop} /> )}
            ListFooterComponent={ () => ( <View style={styles.marginBottom} /> )}
            renderItem={ ({item}) => renderFlatList(item) }
          />
        </>
    )
}

const styles = StyleSheet.create({
  marginTop: { marginTop: 10 },
  marginBottom: { marginBottom: 10 }
})