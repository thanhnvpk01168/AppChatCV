import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';
// import AsyncStorage from '@react-native-community/async-storage';
// import {useDispatch, useSelector} from 'react-redux';
// import {edituser, addCart} from './src/redux/action';

import AppNavigation from './src/Navigation/AppNavigation';
import {StatusBar} from 'react-native';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(1,126,255,1)'}}>
      <StatusBar translucent backgroundColor={'rgba(1,126,255,1)'} />
      <StoreProvider store={store}>
        <AppNavigation />
      </StoreProvider>
    </SafeAreaView>
  );
}

export default App;
