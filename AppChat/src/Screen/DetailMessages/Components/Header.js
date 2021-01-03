import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import database from '@react-native-firebase/database';
import {FlatList} from 'react-native-gesture-handler';

import {HeaderNoRight} from '../../Components/Header';
import {InputBorderCircle} from '../../Components/Input';

export function DetailMessagesScreen({navigation, route}) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [valueSearch, setValueSearch] = useState('');

  useEffect(() => {
    database()
      .ref(`/Chat/${route.params.id}`)
      .on('value', (snapshot) => {
        console.log(snapshot);
      });
  }, []);
  return (
    <View style={styles.main}>
      <HeaderNoRight navigation={navigation} title={'Tìm kiếm bạn bè'} />
      {/* <FlatList
        data={store.groupChat}
        renderItem={({item}) => {
          return <RenderItemMessages idUser={store.idUser} item={item} />;
        }}
        keyExtractor={(item, index) => 'DetailMessages' + index}
      /> */}
      <View style={styles.viewInput}>
        <InputBorderCircle
          text={valueSearch}
          setText={setValueSearch}
          placeholder="Aa"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewInput: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});
