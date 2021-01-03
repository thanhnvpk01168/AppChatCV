import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import {FontAwesome} from '../../../Assets/VectorIcons/Icons';

export const RenderItemUser = React.memo(({item}) => {
  console.log(item.avatar.x1);
  return (
    <View style={styles.main}>
      <View style={styles.viewAvatar}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          style={styles.avatar}
          source={{uri: `${item.avatar}width=100&height=100`}}></FastImage>
      </View>
      <View style={styles.viewName}>
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  main: {
    padding: 5,
    flexDirection: 'row',
  },
  viewAvatar: {
    flex: 1,
    maxWidth: 50,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#CCCCCC',
  },
  viewName: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  name: {
    fontWeight: 'bold',
  },
});
