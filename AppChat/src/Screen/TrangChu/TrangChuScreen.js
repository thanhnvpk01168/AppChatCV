import React, { useState, useEffect } from 'react';
import { StyleSheet,BackHandler, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import database from '@react-native-firebase/database';

import { AddDataDB } from '../../redux/action';

import { InputBorderCircle } from '../../Components/Input';
import { Header, Activities, Messages, ButtonAddFriend } from './Components';
import { RenderItemMessages } from './Components/RenderItem';
import { FlatList } from 'react-native-gesture-handler';

export function TrangChu({ navigation, route }) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState('');

 

  useEffect(() => {
    database()
      .ref('/')
      .on('value', (snapshot) => {
        let allUser = snapshot.val().users;
        let allChat = snapshot.val().Chat;
        let arrayChat = [];
        for (let index in allChat) {
          if (allChat[index].members.filter((e) => store.idUser === e.id).length >= 1) {
            arrayChat.push(allChat[index]);
          }
        }
        let myFriends = [];
        let arrayUsers = [];
        for (let index in allUser) {
          arrayUsers.push(allUser[index]);
        }
        if (snapshot.child(`users/${store.idUser}/friends`).exists()) {
          let result = arrayUsers.filter((e) => e.id == store.idUser);
          for (let index in result[0].friends) {
            myFriends.push(result[0].friends[index]);
          }
        }
        dispatch(AddDataDB(arrayUsers, myFriends, arrayChat));
      });
  }, []);
  return (
    <View style={styles.main}>
      <Header />

      {/* <Activities navigation={navigation} /> */}
      {/* <Messages /> */}

      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.viewInput}>
              <InputBorderCircle
                text={valueSearch}
                setText={setValueSearch}
                placeholder="Tìm kiếm"
              />
            </View>
            <Text style={styles.titleContainer}>Tin nhắn của bạn</Text>
          </>
        }
        data={store.groupChat}
        renderItem={({ item }) => {
          return <RenderItemMessages navigation={navigation} idUser={store.idUser} item={item} />;
        }}
        keyExtractor={(item, index) => 'Messages' + index}
        ListFooterComponent={
          <>

          </>
        }
      />

      <ButtonAddFriend navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewInput: {
    paddingHorizontal: 5,
  },
});
