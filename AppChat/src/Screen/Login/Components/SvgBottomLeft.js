import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Animated from 'react-native-reanimated';

import {Svg, Ellipse} from '../../../Assets/VectorIcons/Svg';

export function SvgBottomLeft() {
  return (
    <Animated.View style={[styles.main, {transform: [{rotate: '135deg'}]}]}>
      <Svg  height="150" width="150">
        <Ellipse
          cx="50%"
          cy="50%"
          rx="50%"
          ry="50%"
          fill="rgba(1,126,255,1)"
        />
      </Svg>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    bottom: -50,
    left:-50,
  },
});
