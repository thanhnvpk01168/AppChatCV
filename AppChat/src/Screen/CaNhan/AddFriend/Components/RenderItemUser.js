import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';

import {getDate} from '../../../../Func/GetDate';

export const RenderItemUser = React.memo(
  ({item, deltailUser, dataUserAwait, refresh}) => {
    const [isTouch, setTouch] = useState(true);
    const _addFriend = (user, userAdded) => {
      let date = getDate();
      //add array user
      let arrayUser = [];
      arrayUser.push(
        {
          id: user.id,
          avatar: user.avatar,
          name: user.name,
          position: 'member',
          nickname: '',
        },
        {
          id: userAdded.id,
          avatar: userAdded.avatar,
          name: userAdded.name,
          position: 'member',
          nickname: '',
        },
      );
      //end

      setTouch(false);
      database()
        .ref(`users/${user.id}/friends/${userAdded.id}`)
        .update({
          status: 2,
        })
        .then(() =>
          database()
            .ref(`users/${userAdded.id}/friends/${user.id}`)
            .update({
              status: 2,
            })
            .then(() => {
              database()
                .ref(`Chat/${date.time1970}`)
                .set({
                  dateCreated: `${date.hours}:${date.minutes}:${date.seconds} ${date.day}/${date.month}/${date.year}`,
                  idGroup: date.time1970,
                  lastMessage: '',
                  members: arrayUser,
                  groupName: '',
                  sender: '',
                  sentDate: `${date.hours}:${date.minutes}:${date.seconds} ${date.day}/${date.month}/${date.year}`,
                  type: 1,
                })
                .then(() => {
                  refresh.set(!refresh.get);
                })
                .catch(() => {});
            })
            .catch(() => {}),
        )
        .catch(() => {});
    };

    return (
      <View style={styles.main}>
        <View style={styles.viewAvatar}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            style={styles.avatar}
            source={{uri: `${item.avatar}width=100&height=100`}}></FastImage>
        </View>
        <View style={styles.viewName}>
          <Text numberOfLines={1} style={styles.name}>
            {item.name}
          </Text>
        </View>
        <View
          style={[
            styles.viewAddFriend,
            {borderColor: isTouch ? 'rgb(1,126,255)' : 'rgb(128,128,128)'},
          ]}>
          <TouchableOpacity
            disabled={!isTouch}
            onPress={() => _addFriend(deltailUser, item)}>
            <Text
              style={[
                styles.textAddFriend,
                {color: isTouch ? 'rgb(1,126,255)' : 'rgb(128,128,128)'},
              ]}>
              Xác nhận
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);
const styles = StyleSheet.create({
  main: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAvatar: {
    flex: 1,
    maxWidth: 50,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#CCCCCC',
  },
  viewName: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  viewAddFriend: {
    flex: 1,
    maxWidth: 32,
    minWidth: 32,
    maxHeight: 32,
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,

    borderRadius: 15,
  },
  textAddFriend: {
    fontSize: 9,
    textAlign: 'center',
  },
});
