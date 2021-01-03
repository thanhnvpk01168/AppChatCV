import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {FontAwesome} from '../../../Assets/VectorIcons/Icons';

export function ButtonAddFriend({navigation}) {
  const _navigateSearchFriendScreen = () => {
    navigation.navigate('SearchFriendScreen');
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.touchNavigate}
        onPress={() => _navigateSearchFriendScreen()}>
        <FontAwesome name={'plus'} size={20} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    height: 55,
    width: 55,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  touchNavigate: {
    backgroundColor: 'rgba(1,126,255,1)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 55,
    borderRadius: 30,
  },
});
