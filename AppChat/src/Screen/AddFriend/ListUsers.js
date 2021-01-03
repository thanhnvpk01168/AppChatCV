import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

import {RenderItemUser} from './Components';

export function ListUsers({navigation}) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    let arrayIDUser = [];
    let arrayIDUserAwaitConfirm = [];
    for (let index in store.myFriend) {
      if (
        store.myFriend[index].status == 0 ||
        store.myFriend[index].status == 2
      ) {
        arrayIDUser.push(store.myFriend[index].id);
      } else {
        arrayIDUserAwaitConfirm.push(store.myFriend[index].id);
      }
    }
    arrayIDUser.push(store.idUser);
    let result;
    if (arrayIDUser.length == 0) {
      result = store.arrayUser;
    } else {
      result = store.arrayUser.filter((e) => !arrayIDUser.includes(e.id));
    }
    setData({data1: result, data2: arrayIDUserAwaitConfirm});
  }, [refresh]);

  return (
    <>
      <FlatList
        data={data.data1}
        renderItem={({item, index}) => {
          return (
            <RenderItemUser
              item={item}
              index={index}
              dataUserAwait={data.data2}
              deltailUser={{
                id: store.idUser,
                name: store.name,
                avatar: store.avatar,
              }}
              refresh={{set: setRefresh, get: refresh}}
            />
          );
        }}
        keyExtractor={(item, index) => `addFriend${index}`}
      />
    </>
  );
}
const styles = StyleSheet.create({});
