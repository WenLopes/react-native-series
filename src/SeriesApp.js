import 'react-native-gesture-handler';
import React from 'react';
import Routes from './config/Routes';
import { Provider } from 'react-redux'
import { store } from './store'

export default function SeriesApp() {
    
    return (
      <Provider store={store}>
          <Routes/>
      </Provider>
  );
}