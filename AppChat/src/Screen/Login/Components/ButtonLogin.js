import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import database from '@react-native-firebase/database';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import axios from 'axios';

import { AddUser } from '../../../redux/action';
import { func_LoginFace } from '../../../Func/Login';

import { AntDesign, Entypo } from '../../../Assets/VectorIcons/Icons';

export function ButtonLogin({ style, alertCustom, showModalSucceed, setLoadingPage }) {
  const dispatch = useDispatch();
  const _loginFacebook = () => {
    setLoadingPage(true);
    func_LoginFace()
      .then((result) => {
        if (result) {
          let idUserFace = result.dataPromise.data.id;
          let nameUserFace = result.dataPromise.data.name;

          // kiểm tra trên db
          database()
            .ref(`users`)
            .once('value', (snapshot) => {
              if (snapshot.child(`U${idUserFace}`).exists()) {
                setLoadingPage(false);
                showModalSucceed();
                // lưu vào store
                dispatch(
                  AddUser(`U${idUserFace}`, nameUserFace, `https:/graph.facebook.com/${idUserFace}/picture?`),
                );
              } else {
                //lưu vào db
                database()
                  .ref(`/users/U${idUserFace}`)
                  .set({
                    id: `U${idUserFace}`,
                    name: nameUserFace,
                    age: 32,
                    friends: [],
                    avatar: `https:/graph.facebook.com/${idUserFace}/picture?`,
                  })
                  .then(() => {
                    setLoadingPage(false);
                    showModalSucceed();
                    // lưu vào store
                    dispatch(
                      AddUser(`U${idUserFace}`, nameUserFace, `https://graph.facebook.com/${idUserFace}/picture?`),
                    );
                  })
                  .catch(() => {
                    setLoadingPage(false);
                    alertCustom.set({
                      ...alertCustom.get,
                      content: 'Kiểm tra lại internet và thử lại sau.',
                      status: true,
                    });
                  });
              }
            });
        } else {
          setLoadingPage(false);
          alertCustom.set({
            ...alertCustom.get,
            content: 'Kiểm tra lại internet và thử lại sau.',
            status: true,
          });
        }
      })
      .catch(() => {
        setLoadingPage(false);
        alertCustom.set({
          ...alertCustom.get,
          content: 'Kiểm tra lại internet và thử lại sau.',
          status: true,
        });
      });
  };
  const _loginPhoneAndGoogle = () => {
    alertCustom.set({
      ...alertCustom.get,
      content: 'Chức năng này đang bảo trì',
      status: true,
    });
  };
  return (
    <View style={style}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Đăng nhập với</Text>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.shadows} activeOpacity={0.6} onPress={() => _loginFacebook()}>
          <Entypo name="facebook-with-circle" size={41} color={'#1874CD'} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.shadows} onPress={() => _loginPhoneAndGoogle()}>
          <View style={[styles.viewButtonPhone, { backgroundColor: 'rgb(223, 63, 44)' }]}>
            <AntDesign name="googleplus" size={27} color={'white'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.shadows} onPress={() => _loginPhoneAndGoogle()}>
          <View style={styles.viewButtonPhone}>
            <Entypo name="phone" size={27} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    bottom: -50,
    left: -50,
  },
  viewTitle: {
    flex: 1,
    maxWidth: 120,
    justifyContent: 'flex-end',
    padding: 5,
  },
  title: {
    fontStyle: 'italic',
  },
  viewButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewButtonPhone: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  shadows: {
    borderRadius: 25,
    padding: 1,
    elevation: 5,
  },
});
