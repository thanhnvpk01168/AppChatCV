import React, {useEffect, useState} from 'react';
import {StatusBar, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TrangChu from './src/TrangChu/TrangChu'

// import {Provider as StoreProvider} from 'react-redux';
// import store from './src/redux/store';
// import AsyncStorage from '@react-native-community/async-storage';
// import {useDispatch, useSelector} from 'react-redux';
// import {edituser, addCart} from './src/redux/action';

import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';

import {WIDTH,HEIGHT} from './src/Ultils/Constants'

const Stack = createStackNavigator();
function SplashImageScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('TrangChu');
  }, 1500);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={{width: WIDTH - 200, height: HEIGHT}}
        source={require('./src/Assets/Images/Logo/LogoIntro.jpg')}></FastImage>
    </View>
  );
}

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: color}}>
      <StatusBar translucent backgroundColor={color} />
      {/* <StoreProvider store={store}> */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'SplashImage'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="SplashImage"
            component={SplashImageScreen}
            // options={chuyenDoi}
          />
          <Stack.Screen name="TrangChu" component={TrangChu} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </StoreProvider> */}
    </SafeAreaView>
  );
}

export default App;
