import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

import {MaterialIcons, FontAwesome} from '../../Assets/VectorIcons/Icons';
import {HeaderNoRight} from '../../Components/Header';
import {RenderItemUser, EmptyFriend} from './Components';

export function ListUsers({navigation, route}) {
  const store = useSelector((state) => state);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   const result = store.myFriend.filter((e) => e.status != 0 && e.status != 1);

  //   setData(result);
  // }, [store.myFriend]);
  return (
    <FlatList
      data={store.myFriend.filter((e) => e.status != 0 && e.status != 1)}
      renderItem={({item, index}) => {
        return <RenderItemUser item={item} index={index} />;
      }}
      keyExtractor={(item, index) => `searchFriend${index}`}
    />
  );
}
const styles = StyleSheet.create({});
