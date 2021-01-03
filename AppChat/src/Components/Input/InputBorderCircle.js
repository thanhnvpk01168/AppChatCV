import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import {MaterialIcons} from '../../Assets/VectorIcons/Icons';

export function InputBorderCircle({text, setText, placeholder, style}) {
  return (
    <View style={styles.main}>
      <TextInput
        placeholder={placeholder}
        value={text}
        onChangeText={(value) => setText(value)}
        style={{
          backgroundColor: '#EEEEEE',
          borderRadius: 30,
          paddingLeft: 40,
        }}
      />
      <View style={styles.viewIcon}>
        <MaterialIcons name={'search'} size={22} color={'grey'} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    width: '100%',
  },
  viewIcon: {
    position: 'absolute',
    paddingLeft: 10,
  },
});
