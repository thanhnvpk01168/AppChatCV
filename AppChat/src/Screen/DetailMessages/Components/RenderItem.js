import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {converMomentToVnByWeek} from '../../../Func/Moment';

import {getDate} from '../../../Func/GetDate';

export const RenderItem = React.memo(({item, idUser, userInItem}) => {
  return (
    <View style={styles.main}>
      {item.userID === idUser ? (
        <View style={styles.viewMe}>
          <View style={styles.viewContentMe}>
            <Text style={[styles.contentMe, {marginLeft: 30}]}>
              {item.message}
            </Text>
            <Text style={styles.time}>
              {converMomentToVnByWeek(item.dateTime)}
            </Text>
          </View>
          <View style={styles.viewAvatarMe}>
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              style={styles.avatar}
              source={{
                uri: `${userInItem[0].avatar}width=100&height=100`,
              }}></FastImage>
          </View>
        </View>
      ) : (
        <View style={styles.viewMe}>
          <View style={styles.viewAvatarMe}>
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              style={styles.avatar}
              source={{
                uri: `${userInItem[0].avatar}width=100&height=100`,
              }}></FastImage>
          </View>
          <View
            style={[
              styles.viewContentMe,
              {alignItems: 'flex-start', marginLeft: 5},
            ]}>
            <Text
              style={[
                styles.contentMe,
                {
                  backgroundColor: 'rgba(128,128,128,0.2)',
                  color: 'black',
                  marginRight: 20,
                },
              ]}>
              {item.message}
            </Text>
            <Text style={styles.time}>
              {converMomentToVnByWeek(item.dateTime)}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
});
const styles = StyleSheet.create({
  main: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewMe: {
    flexDirection: 'row',
  },
  viewAvatarMe: {
    flex: 1,
    maxWidth: 20,
    minWidth: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  viewContentMe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#CCCCCC',
  },
  contentMe: {
    backgroundColor: 'rgba(1,126,255,1)',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  viewTime: {
    flex: 1,
    maxWidth: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 11,
    textAlign: 'center',
    color: 'rgba(128,128,128,1)',
  },
});
