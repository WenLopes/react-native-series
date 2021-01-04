import React from 'react'
import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native'
import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';
import { useSelector, useDispatch } from 'react-redux'
import { watchSeries } from '../store/actions';

export default function SeriesPage(props) {

    const dispatch = useDispatch();
    const serieListReducer = useSelector( (state) => { 
        const series = state.serieListReducer;
        if(series === null){
          return series;
        }
        const keys = Object.keys(series);
        return keys.map(id => {
          return {...series[id], id}
        }) 
    })

    React.useEffect(() =>{
      dispatch( watchSeries() );
    }, []);

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
          {
            serieListReducer === null
            ? <ActivityIndicator size="large" color="#6ca2f7" />
            : <FlatList 
                data={[...serieListReducer, { isLast: true }]}
                keyExtractor={item => item.id}
                numColumns='2'
                ListHeaderComponent={ () => ( <View style={styles.marginTop} /> )}
                ListFooterComponent={ () => ( <View style={styles.marginBottom} /> )}
                renderItem={ ({item}) => renderFlatList(item) }
              />
          }
        </>
    )
}

const styles = StyleSheet.create({
  marginTop: { marginTop: 10 },
  marginBottom: { marginBottom: 10 }
})