import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import database from '@react-native-firebase/database';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import axios from 'axios';

import {AddUser} from '../../../../redux/action';

export const Login = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const addFriend = () => {
    database()
      .ref(`/users/${store.idUser}/friends/U1599626210229798`)
      .set({
        name: "Kudo Thành",
        age: 32,
        avatar: "https://graph.facebook.com/1599626210229798/picture?",
      })
      .then(() => console.log('Data set.'))
      .catch(() => console.log('error'));
  };

  const _saveInformationUser = (token) => {
    axios({
      method: 'GET',
      url: `https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=${token}`,
      headers: {
        'Cache-Control': 'no-cache',
      },
    })
      .then((ress) => {
        // user.user_friends = json.friends
        // user.email = json.email
        // user.loading = false
        // user.loggedIn = true
        // user.avatar = setAvatar(json.id)
        let idUserFace = ress.data.id;
        let nameUserFace = ress.data.name;
        // lưu vào store
        dispatch(
          AddUser(
            `U${idUserFace}`,
            nameUserFace,
            `https://graph.facebook.com/${idUserFace}/picture?type=large`,
          ),
        );
        // lưu vào db
        database()
          .ref(`/users/U${idUserFace}`)
          .set({
            name: nameUserFace,
            age: 32,
            friends: [],
            avatar: `https://graph.facebook.com/${idUserFace}/picture?`,
          })
          .then(() => console.log('Data set.'))
          .catch(() => console.log('error'));
        //end save
      })
      .catch((error) => {
        LoginManager.logOut();
      });
  };
  const _loginFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('isCancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            _saveInformationUser(data.accessToken.toString());
          });
        }
      },
      function (error) {
        console.log(error);
        alert('Đăng nhập thất bại');
        LoginManager.logOut();
      },
    );
  };

  return (
    <View style={{padding: 20}}>
      <TouchableOpacity onPress={() => addFriend()}>
        <Text>add friends</Text>
        <Text>add friends</Text>
        <Text>add friends</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          flexDirection: 'row',
          backgroundColor: 'blue',
          paddingHorizontal: 10,
          paddingVertical: 6,
          borderRadius: 5,
        }}
        onPress={() => _loginFacebook()}>
        <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 10}}>
          {store.idUser.length == 0 ? 'Tiếp tục với facebook 123' : store.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewInput: {
    paddingHorizontal: 5,
  },
});
