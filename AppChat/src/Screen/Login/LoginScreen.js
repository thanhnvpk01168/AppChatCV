import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing } from 'react-native-reanimated';

import { Svg, Ellipse } from '../../Assets/VectorIcons/Svg';
import { AlertSimple } from '../../Components/Alert';
import { SvgTopRight, SvgBottomLeft } from './Components';
import { ModalWelcome } from './ModalWelcome';
import { ModalLoginSucceed } from './ModalLoginSucceed';
import { Loading } from '../../Components/Loading';

const showModalLogin = new Animated.Value(-500);
const showModalLoginSucceed = new Animated.Value(-500);

export function LoginScreen({ navigation, route }) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLoadingPage, setLoadingPage] = useState(false);
  const [showAlertSimple, setShowAlertSimple] = useState({
    status: false,
    title: 'Thông báo',
    content: 'Không có gì hết :)))',
    color: 'blue',
    button: [
      {
        title: 'Cancel',
        onPress: () => {
          setShowAlertSimple({ ...showAlertSimple, status: false });
        },
      },
      {
        title: 'Ok',
        onPress: () => {
          setShowAlertSimple({ ...showAlertSimple, status: false });
        },
      },
    ],
  });
  // const [showModalLogin, setshowModalLogin] = useState(new Animated.Value(0));

  const _showModalLogin = () => {
    Animated.timing(showModalLogin, {
      toValue: 0,
      duration: 1000,
      easing: Easing.elastic(1),
    }).start();
  };
  const _showModalLoginSucceed = () => {
    Animated.timing(showModalLoginSucceed, {
      toValue: 0,
      duration: 1000,
      easing: Easing.elastic(1),
    }).start();
  };
  const _hideLoginShowModalLoginSucceed = () => {
    Animated.timing(showModalLogin, {
      toValue: 500,
      duration: 500,
      easing: Easing.elastic(1),
    }).start(() => _showModalLoginSucceed());
  };
  useEffect(() => {
    if (store.idUser.trim().length == 0) {
      _showModalLogin();
    } else {
      _showModalLoginSucceed();
    }
  }, []);

  return (
    <View style={styles.main}>
      <SvgTopRight />
      <SvgBottomLeft />

      <ModalWelcome
        setLoadingPage={setLoadingPage}
        showModalSucceed={_hideLoginShowModalLoginSucceed}
        alertCustom={{ set: setShowAlertSimple, get: showAlertSimple }}
        style={{ left: showModalLogin }}
      />
      <ModalLoginSucceed
        navigation={navigation}
        style={{ left: showModalLoginSucceed }}
      />
      {showAlertSimple.status ? (
        <AlertSimple data={showAlertSimple} setShow={setShowAlertSimple} />
      ) : null}
      {isLoadingPage ? <Loading /> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,203,254,1)',
  },
  inputSearch: {
    width: '100%',
    height: 50,
    paddingHorizontal: 5,
    alignItems: 'center',
    textAlign: 'center',
  },
});
