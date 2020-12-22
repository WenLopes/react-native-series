import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import series from '../../series.json';
import SerieCard from '../components/SerieCard'

export default function SeriesPage() {
    return (
        <>
          <FlatList 
            data={series}
            keyExtractor={item => item.id}
            numColumns='2'
            ListHeaderComponent={ () => ( <View style={styles.marginTop} /> )}
            ListFooterComponent={ () => ( <View style={styles.marginBottom} /> )}
            renderItem={ ({item}) => (
              <SerieCard serie={item} />
            )}
          />
        </>
    )
}

const styles = StyleSheet.create({
  marginTop: { marginTop: 10 },
  marginBottom: { marginBottom: 10 }
})