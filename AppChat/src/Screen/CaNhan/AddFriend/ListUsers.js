import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

import {RenderItemUser} from './Components';

export function ListUsers({navigation}) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      store.myFriend.filter(
        (e) => e.whoAdded !== store.idUser && e.status == 1,
      ),
    );
  }, []);

  return (
    <>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <RenderItemUser
              item={item}
              index={index}
              deltailUser={{
                id: store.idUser,
                name: store.name,
                avatar: store.avatar,
              }}
            />
          );
        }}
        keyExtractor={(item, index) => `addFriend${index}`}
      />
    </>
  );
}
const styles = StyleSheet.create({});
