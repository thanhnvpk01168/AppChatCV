import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {RenderItemMessages} from './RenderItem';

export function Messages({navigation}) {
  const store = useSelector((state) => state);

  return (
    <View style={styles.main}>
      <Text style={styles.titleContainer}>Tin nhắn của bạn</Text>
      <FlatList
        data={store.groupChat}
        renderItem={({item}) => {
          return <RenderItemMessages idUser={store.idUser} item={item} />;
        }}
        keyExtractor={(item, index) => 'Messages' + index}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    paddingHorizontal:5
  },
  titleContainer: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
