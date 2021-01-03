import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

import {MaterialIcons, FontAwesome} from '../../Assets/VectorIcons/Icons';
import {HeaderNoRight} from '../../Components/Header';
import {RenderItemUser, EmptyFriend} from './Components';
import {ListUsers} from './ListUsers';

export function SearchFriendScreen({navigation, route}) {
  const store = useSelector((state) => state);

  return (
    <View style={styles.main}>
      <HeaderNoRight
        onPress={() => {
          navigation.goBack();
        }}
        title={'Tìm kiếm bạn bè'}
      />
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.viewAddGroup}>
          <MaterialIcons
            name="groups"
            size={25}
            color={'rgba(128,128,128,1)'}
          />
          <Text style={styles.titleGroup}>Tạo nhóm mới</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate('AddFriendScreen')}>
        <View style={styles.viewAddGroup}>
          <FontAwesome
            name="user-plus"
            size={20}
            color={'rgba(128,128,128,1)'}
          />
          <Text style={styles.titleAddFriend}>Thêm bạn bè</Text>
        </View>
      </TouchableOpacity>
      {store.myFriend.length == 0 ? (
        <EmptyFriend />
      ) : (
        <>
          <Text style={styles.titleMyfriend}>Danh sách bạn bè của bạn</Text>
          <ListUsers />
          <TextInput
            style={styles.inputSearch}
            placeholder="Nhập tên bạn cần tìm..."
          />
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleMyfriend: {
    textAlign: 'center',
  },
  inputSearch: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: 'rgba(128,128,128,0.5)',
    textAlign: 'center',
  },
  viewAddGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  titleGroup: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'rgba(128,128,128,1)',
  },
  titleAddFriend: {
    fontWeight: 'bold',
    marginLeft: 13,
    color: 'rgba(128,128,128,1)',
  },
});
