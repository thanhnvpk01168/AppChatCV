import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import database from '@react-native-firebase/database';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';

export default App = () => {
  const [data, setData] = useState([]);

  const addNew = () => {
    database()
      .ref('/users/1111')
      .set({
        name: 'Ada Lovelace123123',
        age: 31,
        avatar: '111',
      })
      .then(() => console.log('Data set.'))
      .catch(() => console.log('error'));
  };

  const update = () => {
    database()
      .ref('/users/123')
      .set({
        name: 'bbbbb',
        age: 31,
      })
      .then(() => console.log('Data set.'))
      .catch(() => console.log('error'));
  };

  useEffect(() => {
    database()
      .ref('/users')
      .on('value', (snapshot) => {
        let result = [];
        snapshot.forEach((e) => {
          console.log('name123: ', e.toJSON().name);
          result.push({name: e.toJSON().name});
        });
        console.log('result: ' + result);
        setData(result);
      });
  }, []);
  console.log('123123');
  return (
    <View style={{padding: 20}}>
      <TouchableOpacity onPress={() => addNew()}>
        <Text>add</Text>
        <Text>add</Text>
        <Text>add</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          flexDirection: 'row',
          backgroundColor: 'blue',
          paddingHorizontal: 10,
          paddingVertical: 6,
          borderRadius: 5,
        }}
        onPress={() => {
          LoginManager.logInWithPermissions(['public_profile']).then(
            function (result) {
              if (result.isCancelled) {
                console.log("isCancelled")
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  console.log("succeed")
                });
              }
            },
            function (error) {
              alert('Đăng nhập thất bại');
              LoginManager.logOut();
            },
          );
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 10}}>
          Tiếp tục với facebook
        </Text>
      </TouchableOpacity>
    </View>
  );
};