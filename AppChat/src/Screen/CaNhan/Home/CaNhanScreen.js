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
import Animated, {Easing} from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {Svg, Ellipse} from '../../../Assets/VectorIcons/Svg';
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  Entypo,
} from '../../../Assets/VectorIcons/Icons';

const animAvatar = new Animated.Value(-100);
export const CaNhan = ({navigation}) => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const _showAvatarAnim = () => {
    Animated.timing(animAvatar, {
      toValue: 0,
      duration: 1000,
      easing: Easing.elastic(1),
    }).start();
  };

  useEffect(() => {
    _showAvatarAnim();
  }, []);
  return (
    <View style={styles.main}>
      <View style={styles.viewAvatar}>
        <Svg style={styles.svgAvatar} height="150" width="101%">
          <Ellipse
            cx="50%"
            cy="50%"
            rx="50%"
            ry="50%"
            fill="rgba(1,126,255,1)"
          />
        </Svg>
        <Animated.View style={{top: animAvatar}}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            style={styles.avatar}
            source={{uri: `${store.avatar}width=240&height=240`}}></FastImage>
        </Animated.View>

        <Text style={styles.name}>{store.name}</Text>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.viewContent}>
            <View
              style={[styles.viewIconContent, {borderColor: 'rgb(128,0,128)'}]}>
              <MaterialCommunityIcons
                name="account-convert"
                size={25}
                color={'rgb(128,0,128)'}
              />
            </View>
            <Text style={styles.titleContent}>Chuyển tài khoản</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('AddFriendScreen_CaNhan')}>
            <View style={styles.viewContent}>
              <View
                style={[
                  styles.viewIconContent,
                  {borderColor: 'rgb(1,126,255)'},
                ]}>
                <FontAwesome5
                  name="user-plus"
                  size={16}
                  color={'rgb(1,126,255)'}
                />

                {store.myFriend.filter(
                  (e) => e.whoAdded !== store.idUser && e.status == 1,
                ).length == 0 ? null : (
                  <View style={styles.viewNumberAddFriend}>
                    <Text style={styles.numberAddFriend}>
                      {
                        store.myFriend.filter(
                          (e) => e.whoAdded !== store.idUser && e.status == 1,
                        ).length
                      }
                    </Text>
                  </View>
                )}
              </View>
              <Text style={styles.titleContent}>Chờ kết bạn</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <View style={styles.viewContent}>
              <View
                style={[styles.viewIconContent, {borderColor: 'rgb(0,205,0)'}]}>
                <MaterialIcons
                  name="settings"
                  size={22}
                  color={'rgb(0,205,0)'}
                />
              </View>
              <Text style={styles.titleContent}>Cài đặt tài khoản</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.viewContent}>
            <View
              style={[styles.viewIconContent, {borderColor: 'rgb(0,205,205)'}]}>
              <Entypo name="help" size={20} color={'rgb(0,205,205)'} />
            </View>
            <Text style={styles.titleContent}>Trợ giúp</Text>
          </View>
          <View style={styles.viewContent}>
            <View
              style={[
                styles.viewIconContent,
                {borderColor: 'rgba(128,128,128,1)'},
              ]}>
              <Ionicons
                name="md-newspaper-outline"
                size={20}
                color={'rgba(128,128,128,1)'}
              />
            </View>
            <Text style={styles.titleContent}>Pháp lý & chính sách</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgAvatar: {
    position: 'absolute',
    top: -80,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(128,128,128,1)',
    borderRadius: 100,
    borderWidth: 6,
    borderColor: 'rgba(1,126,255,1)',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  viewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  viewIconContent: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
  },
  titleContent: {marginLeft: 10},
  viewNumberAddFriend: {
    width: 16,
    height: 16,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5,
    right: -6,
    backgroundColor: 'red',
  },
  numberAddFriend: {
    fontSize: 10,
    color: 'white',
  },
});
