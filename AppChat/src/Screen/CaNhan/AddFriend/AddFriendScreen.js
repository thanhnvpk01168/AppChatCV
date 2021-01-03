import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

import {HeaderNoRight} from '../../../Components/Header';
import {EmptyFriend} from './Components';
import {ListUsers} from './ListUsers';

export function AddFriendScreen({navigation, route}) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [arrayUsers, setArrayUsers] = useState(store.arrayUser.filter(e => pets.includes('cat')))
  return (
    <View style={styles.main}>
      <HeaderNoRight
        onPress={() => {
          navigation.goBack();
        }}
        title={'Yêu cầu kết bạn'}
      />
      {store.myFriend.filter(
        (e) => e.whoAdded !== store.idUser && e.status == 1,
      ).length == 0 ? (
        <EmptyFriend />
      ) : (
        <ListUsers data={store.myFriend} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputSearch: {
    width: '100%',
    height: 50,
    paddingHorizontal: 5,
    alignItems: 'center',
    textAlign: 'center',
  },
});
