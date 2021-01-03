import React, {useState, useEffect} from 'react';
import {StyleSheet, BackHandler, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import database from '@react-native-firebase/database';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import {HeaderNoRight} from '../../Components/Header';
import {InputBorderCircle} from '../../Components/Input';
import {Ionicons} from '../../Assets/VectorIcons/Icons';
import {RenderItem} from './Components';

import {getDate} from '../../Func/GetDate';
import FastImage from 'react-native-fast-image';

let db;
export function DetailMessagesScreen({navigation, route}) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isTouch, setTouch] = useState(true);
  const [valueMessage, setValueMessage] = useState('');
  const [dataMessage, setDataMessage] = useState([]);
  const [arrayMember, setArrayMember] = useState([]);

  const _send = (userID, message) => {
    if (message.trim().length >= 1) {
      setTouch(false);
      let date = getDate();
      let getTime = date.time1970;
      let dateTime = `${date.hours}:${date.minutes} ${date.day}/${date.month}/${date.year}`;     
      database()
        .ref(`/Chat/${route.params.id}/messages/${getTime}`)
        .set({
          id: getTime,
          userID: userID,
          message: message,
          dateTime: dateTime,
        })
        .then(() => {
          database()
            .ref(`/Chat/${route.params.id}`)
            .update({
              lastMessage: message,
              sender: userID,
              sentDate: dateTime,
            })
            .then(() => {
              setTouch(true);
              setValueMessage('');
            })
            .catch(() => {});
        })
        .catch(() => setTouch(true));
    }
  };

  useEffect(() => {
    db = database()
      .ref(`/Chat/${route.params.id}`)
      .on('value', (snapshot) => {
        let messages = snapshot.val().messages;
        setArrayMember(snapshot.val().members);
        if (typeof messages == 'undefined') {
          console.log('if');
        } else {
          let arrayMessages = [];
          for (let index in messages) {
            arrayMessages.push(messages[index]);
          }
          setDataMessage(arrayMessages);
        }
      });

    const backHandler = BackHandler.addEventListener('detailMessages', () => {
      database().ref(`/Chat/${route.params.id}`).off('value', db);
      navigation.goBack();
      return true;
    });

    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.main}>
      <HeaderNoRight
        onPress={() => {
          database().ref(`/Chat/${route.params.id}`).off('value', db);
          navigation.goBack();
        }}
        title={route.params.userName}
      />
      <FlatList
        style={{flex: 1}}
        inverted={true}
        data={dataMessage}
        ListFooterComponent={
          <View style={styles.viewAvatarMainFlat}>
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              style={styles.avatarMainFlatList}
              source={{
                uri: `${route.params.avatar}width=200&height=200`,
              }}></FastImage>
            <Text style={styles.welcome}>
              Gửi lời chào đến {route.params.userName} nào.
            </Text>
          </View>
        }
        renderItem={({item}) => {
          console.log(item);
          return (
            <RenderItem
              userInItem={arrayMember.filter((e) => e.id === item.userID)}
              idUser={store.idUser}
              item={item}
            />
          );
        }}
        keyExtractor={(item, index) => 'DetailMessages' + index}
      />
      <View style={styles.viewBottom}>
        <View style={styles.viewInput}>
          <InputBorderCircle
            text={valueMessage}
            setText={setValueMessage}
            placeholder="Aa"
          />
        </View>
        <View style={styles.buttonSend}>
          <TouchableOpacity
            disabled={!isTouch}
            onPress={() => _send(store.idUser, valueMessage)}>
            <Ionicons name="send" size={30} color={'rgba(1,126,255,1)'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewAvatarMainFlat: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  welcome: {
    fontSize: 14,
    color: 'rgba(128,128,128,1)',
    marginTop:10
  },
  avatarMainFlatList: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#CCCCCC',
  },
  viewBottom: {
    flex: 1,
    maxHeight: 57,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingTop: 5,
    borderTopWidth: 1,
    borderColor: 'rgba(128,128,128,0.2)',
  },
  viewInput: {
    flex: 1,
  },
  buttonSend: {
    flex: 1,
    maxWidth: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
