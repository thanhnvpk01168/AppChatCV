import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import database from '@react-native-firebase/database';
import {useSelector, useDispatch} from 'react-redux';

import {AddData} from '../redux/action';

import {CaNhan} from '../Screen/CaNhan/Home';
import {XaHoi} from '../Screen/XaHoi';
import {TrangChu} from '../Screen/TrangChu';
import {AntDesign, SimpleLineIcons} from '../Assets/VectorIcons/Icons';
import { BackHandler } from 'react-native';

const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'rgba(1,126,255,1)',
        inactiveTintColor: 'grey',
        labelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        // listeners={{
        //   focus: () =>
        //     BackHandler.addEventListener('hardwareBackPress1', ()=>{alert(1111111);return true},),
        //   blur: () =>
        //     BackHandler.removeEventListener(
        //       'hardwareBackPress1',
        //       ()=>{return true},
        //     ),
        // }}
        name="TrangChu"
        component={TrangChu}
        options={{
          tabBarLabel: 'Tin nhắn',
          tabBarIcon: ({color, size}) => (
            <AntDesign name={'message1'} size={size} color={color} />
          ),
          tabBarBadge: null,
        }}
      />
      <Tab.Screen
        // listeners={{
        //   focus: () =>
        //     BackHandler.addEventListener('hardwareBackPress2', ()=>{alert(222222) ;return true},),
        //   blur: () =>
        //     BackHandler.removeEventListener(
        //       'hardwareBackPress2',
        //       ()=>{return true},
        //     ),
        // }}
        name="XaHoi"
        component={XaHoi}
        options={{
          tabBarLabel: 'Xã hội',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name={'globe'} size={size} color={color} />
          ),
          tabBarBadge: null,
        }}
      />
      <Tab.Screen
        name="CaNhan"
        component={CaNhan}
        options={{
          tabBarLabel: 'Cài đặt',
          tabBarIcon: ({color, size}) => (
            <AntDesign name={'setting'} size={size} color={color} />
          ),
          tabBarBadge: null,
        }}
      />
    </Tab.Navigator>
  );
}
