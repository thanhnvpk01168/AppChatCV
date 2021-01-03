import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {MaterialIcons} from '../../../Assets/VectorIcons/Icons';

export function Header({navigation, route}) {
  return (
    <View style={styles.main}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Tin nhắn</Text>
      </View>
      <View style={styles.buttonAdd}>
        <MaterialIcons name={'add-box'} size={35} color={'rgba(1,126,255,1)'} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    height: 50,
    flexDirection: 'row',
  },
  viewTitle: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonAdd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 50,
  },
});
