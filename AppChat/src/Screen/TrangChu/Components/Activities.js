import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {MaterialIcons} from '../../../Assets/VectorIcons/Icons';
import {RenderItemActivities} from './RenderItem';

export function Activities({navigation}) {
  const store = useSelector((state) => state);
  const [data, setData] = useState([1, 2, 3]);  

  // useEffect(() => {
  //   database()
  //     .ref(`/users/${store.idUser}`)
  //     .on('value', (snapshot) => {
  //       let result = [];
  //       snapshot.forEach((e) => {
  //         console.log('name123: ', e.toJSON().name);
  //         result.push({name: e.toJSON().name});
  //       });
  //       console.log('result: ' + result);
  //       setData(result);
  //     });
  // }, []);
  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <RenderItemActivities item={item} />;
        }}
        keyExtractor={(item, index) => 'activities' + index}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {},
});
