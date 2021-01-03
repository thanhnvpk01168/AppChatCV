import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';

import {FontAwesome, FontAwesome5} from '../../../Assets/VectorIcons/Icons';

export const RenderItemUser = React.memo(
  ({item, deltailUser, dataUserAwait, refresh}) => {
    const [isTouch, setTouch] = useState(true);
    const _addFriend = (user, userAdded) => {
      setTouch(false);
      database()
        .ref(`users/${user.id}/friends/${userAdded.id}`)
        .set({
          id: userAdded.id,
          avatar: userAdded.avatar,
          name: userAdded.name,
          status: 1,
          whoAdded: user.id,
        })
        .then(() => {
          database()
            .ref(`users/${userAdded.id}/friends/${user.id}`)
            .set({
              id: user.id,
              avatar: user.avatar,
              name: user.name,
              status: 1,
              whoAdded: user.id,
            })
            .then(() => {
              refresh.set(!refresh.get);
            })
            .catch(() => setTouch(true));
        })
        .catch(() => setTouch(true));
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
        <View style={styles.viewAddFriend}>
          {dataUserAwait.includes(item.id) ? (
            <>
              <FontAwesome name="hourglass-2" size={15} color={'black'} />
              <Text style={styles.textAddFriend}>Chờ xác nhận</Text>
            </>
          ) : (
            <TouchableOpacity
              disabled={!isTouch}
              onPress={() => _addFriend(deltailUser, item)}>
              <FontAwesome5
                name="user-plus"
                size={15}
                color={isTouch ? 'black' : 'rgba(128,128,128,1)'}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  },
);
const styles = StyleSheet.create({
  main: {
    padding: 5,
    flexDirection: 'row',
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
    maxWidth: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAddFriend: {
    fontSize: 8,
    textAlign: 'center',
  },
});
