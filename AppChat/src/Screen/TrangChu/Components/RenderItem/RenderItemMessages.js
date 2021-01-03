import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import Animated, {Easing} from 'react-native-reanimated';

import {converMomentToVn} from '../../../../Func/Moment/';
import {WIDTH} from '../../../../Ultils/Constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const RenderItemMessages = React.memo(({navigation, item, idUser}) => {
  // const animAvatar = new Animated.Value(-WIDTH);
  // const _showAvatarAnim = () => {
  //   Animated.timing(animAvatar, {
  //     toValue: 0,
  //     duration: 500,
  //     easing: Easing.elastic(0.5),
  //   }).start();
  // };
  // useEffect(() => {
  //   _showAvatarAnim();
  // }, []);
  const _navigate = () => {
    navigation.navigate('DetailMessagesScreen', {
      id: item.idGroup,
      userName: item.members.filter((e) => e.id != idUser)[0].name,
      avatar: item.members.filter((e) => e.id != idUser)[0].avatar,
    });
  };
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => _navigate()}>
      <Animated.View style={[styles.main, {left: 0}]}>
        <View style={styles.viewAvatar}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            style={styles.avatar}
            source={{
              uri: `${
                item.members.filter((e) => e.id != idUser)[0].avatar
              }width=80&height=80`,
            }}></FastImage>
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.viewName}>
            <Text style={styles.name}>
              {item.members.filter((e) => e.id != idUser)[0].name}
            </Text>
            <Text style={styles.timeActivities}>
              {converMomentToVn(
                new moment(item.sentDate, 'hh:mm DD/MM/YYYY a').fromNow(),
              )}
            </Text>
          </View>
          <Text numberOfLines={2}>
            {item.lastMessage.trim().length == 0
              ? `Hãy nhắn cho ${
                  item.members.filter((e) => e.id != idUser)[0].name
                }`
              : item.lastMessage}{' '}
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    paddingTop: 10,
    zIndex: 1,
  },
  viewAvatar: {
    flex: 1,
    width: 66,
    maxWidth: 66,
    height: 66,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'rgba(1,126,255,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 5,
    justifyContent: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#CCCCCC',
  },
  viewName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
  },
  timeActivities: {
    color: 'rgba(1,126,255,1)',
    fontSize: 10,
  },
});
