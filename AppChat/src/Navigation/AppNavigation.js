import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigation from './HomeNavigation';
import {IntroScreen} from '../Components/Intro';

import {SearchFriendScreen} from '../Screen/SearchFriend';
import {LoginScreen} from '../Screen/Login';
import {AddFriendScreen} from '../Screen/AddFriend';
import {AddFriendScreen as AddFriendScreen_CaNhan} from '../Screen/CaNhan/AddFriend';
import {DetailMessagesScreen} from '../Screen/DetailMessages';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'IntroScreen'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
        <Stack.Screen
          name="SearchFriendScreen"
          component={SearchFriendScreen}
        />
        <Stack.Screen name="AddFriendScreen" component={AddFriendScreen} />
        <Stack.Screen
          name="AddFriendScreen_CaNhan"
          component={AddFriendScreen_CaNhan}
        />
        <Stack.Screen
          name="DetailMessagesScreen"
          component={DetailMessagesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
