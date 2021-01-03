import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

import { SvgModal, SvgLogoModal, ButtonLogin } from './Components';

import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function ModalLoginSucceed({ navigation, style }) {
  const store = useSelector((state) => state);
  return (
    <Animated.View style={[styles.main, style]}>
      <View style={styles.viewModal}>
        <SvgModal
          style={{
            position: 'absolute',
            top: -1.5,
            right: -11,
          }}
        />
        {/* Title */}

        <View style={styles.viewContent}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            style={styles.avatar}
            source={{ uri: `${store.avatar}width=200&height=200` }}></FastImage>
          <Text style={styles.titleModal}>{store.name}</Text>
        </View>
        {/* Title */}
        <Animated.View
          style={[
            { position: 'absolute', bottom: -1, left: -11 },
            { transform: [{ rotate: '180deg' }] },
          ]}>
          <SvgModal style={{}} />
        </Animated.View>
        <View style={styles.viewContinue}>
          <TouchableOpacity style={styles.touchContinue} onPress={() => navigation.navigate('HomeNavigation')}>
            <Text style={styles.continue}>Tiếp tục {'>>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewModal: {
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 10,
  },
  viewContent: {
    flex: 1,
    marginVertical: 150,
    justifyContent: 'center',
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleModal: {
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
    color: 'rgba(1,126,255,1)',
    textAlign: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor:'rgba(128,128,128,0.5)'
  },
  viewContinue: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  touchContinue: {
    backgroundColor: 'rgba(1,126,255,1)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  continue: {
    color: 'white',
  },
});
