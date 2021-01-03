import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {WIDTH, HEIGHT} from '../../Ultils/Constants';

export function IntroScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('LoginScreen');
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
        source={require('../../Assets/Images/Logo/LogoIntro.jpg')}></FastImage>
    </View>
  );
}
