import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {FontAwesome5} from '../../../Assets/VectorIcons/Icons';

export const EmptyFriend = ({item}) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <FontAwesome5
          name="user-friends"
          size={20}
          color={'rgba(128,128,128,1)'}
        />
        <Text style={styles.text}>Bạn không có bạn bè nào</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(128,128,128,1)',
    marginLeft: 10,
  },
});
