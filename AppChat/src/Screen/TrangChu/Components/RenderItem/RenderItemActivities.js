import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const RenderItemActivities = React.memo(({item}) => {
  return (
    <View>
      <Text style={{color: 'blue'}}>{item}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  main: {},
});
