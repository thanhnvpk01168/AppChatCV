import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Animated, {Easing} from 'react-native-reanimated';

import {Entypo} from '../../Assets/VectorIcons/Icons';

export function AlertSimple({style, data}) {
  const animTop = new Animated.Value(-500);
  const [showAlert, setShowAlert] = useState(false);

  const _showAlert = () => {
    Animated.timing(animTop, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.exp),
    }).start();
  };

  useEffect(() => {
    _showAlert();
  }, []);
  return (
    <View style={[styles.main, style]}>
      <Animated.View style={[styles.animAlert, {top: animTop}]}>
        <View style={styles.container}>
          <View style={styles.viewIconLeft}>
            <Entypo name="bell" size={20} color={'rgba(1,126,255,1)'} />
          </View>
          <View style={styles.viewContentRight}>
            <View style={styles.viewTitle}>
              <Text style={styles.title}>{data.title}</Text>
            </View>
            <Text>{data.content}</Text>
            <FlatList
              numColumns={2}
              data={data.button}
              renderItem={({item, index}) => {
                return (
                  <View
                    onPress={() => item.onPress}
                    style={[
                      styles.viewItem,
                      {
                        backgroundColor:
                          index == 1 ? 'rgba(1,126,255,1)' : 'white',
                        borderColor:
                          index == 1
                            ? 'rgba(1,126,255,1)'
                            : 'rgba(128, 128, 128, 1)',
                      },
                    ]}>
                    <TouchableOpacity
                      style={styles.touchItem}
                      onPress={item.onPress}>
                      <Text style={{color: index == 1 ? 'white' : 'black'}}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={(item, index) => `AlertSimple${index}`}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animAlert: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    minHeight: 10,
    maxHeight: '80%',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  container: {
    flexDirection: 'row',
  },
  viewIconLeft: {
    flex: 1,
    backgroundColor: 'rgba(1,126,255,0.2)',
    height: 30,
    maxWidth: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContentRight: {
    flex: 1,
    paddingLeft: 10,
  },
  viewTitle: {
    height: 30,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewItem: {
    flex: 1,
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  touchItem: {
    flex: 1,
    minWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
