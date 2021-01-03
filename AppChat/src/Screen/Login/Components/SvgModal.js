import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Animated from 'react-native-reanimated';

import {Svg, G, Path, Circle} from '../../../Assets/VectorIcons/Svg';

export function SvgModal({style}) {
  return (
    <Svg style={style} height="150" width="135">
      <Path
        d="M114 1H1.5001C-2.4999 6 15 36 64.5001 51C110 64.7878 118 124.833 124 135.5V11C124 5.47715 119.523 1 114 1Z"
        fill="rgba(0,203,254,1)"
      />
    </Svg>
  );
}
