import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Animated from 'react-native-reanimated';

import {SvgModal, SvgLogoModal, ButtonLogin} from './Components';

export function ModalWelcome({
  style,
  alertCustom,
  showModalSucceed,
  setLoadingPage,
}) {
  return (
    <Animated.View style={[styles.main, style]}>
      <View style={styles.viewModal}>
        <SvgLogoModal
          style={{
            position: 'absolute',
            top: 20,
            left: 11,
          }}
        />
        <SvgModal
          style={{
            position: 'absolute',
            top: -1.5,
            right: -11,
          }}
        />
        {/* Title */}

        <View style={styles.viewContent}>
          <Text style={styles.titleModal}>WELCOME</Text>
          <Text style={[styles.titleModal, {textAlign: 'center'}]}>TO</Text>
          <Text style={[styles.titleModal, {textAlign: 'right'}]}>
            APP CHAT
          </Text>
        </View>
        {/* Title */}
        <Animated.View
          style={[
            {position: 'absolute', bottom: -1, left: -11},
            {transform: [{rotate: '180deg'}]},
          ]}>
          <SvgModal style={{}} />
        </Animated.View>
        <ButtonLogin
          setLoadingPage={setLoadingPage}
          showModalSucceed={showModalSucceed}
          alertCustom={alertCustom}
          style={styles.buttonLogin}
        />
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
  },
  titleModal: {
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
    color: 'rgba(1,126,255,1)',
  },
  buttonLogin: {
    flexDirection: 'row',
  },
});
