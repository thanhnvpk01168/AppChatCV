import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import {MaterialIcons} from '../../Assets/VectorIcons/Icons';

export function Loading({text}) {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <ActivityIndicator
          style={{position: 'absolute'}}
          size="large"
          color="rgba(1,126,255,1)"
        />
        <ActivityIndicator
          style={{position: 'absolute'}}
          size="small"
          color="rgba(0,203,254,1)"
        />
        <Text style={styles.titleHide}>Login</Text>
        <Text style={styles.title}>Login</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10
  },
  titleHide: {
    fontSize: 25,
    color: 'rgba(1,126,255,0)',
  },
  title: {
    color: 'rgba(1,126,255,1)',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
