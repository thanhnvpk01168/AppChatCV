import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Animated from 'react-native-reanimated';

import {Svg, Path, Ellipse, Circle} from '../../../Assets/VectorIcons/Svg';

export function SvgLogoModal({style}) {
  return (
    <Svg style={style} height="63" width="101">
      <Path
        d="M16.7489 46.0995C7.81616 54.6336 1.86099 55.9769 0 55.5818C15.6323 59.3747 28.3801 57.1622 32.8 55.5818C31.1716 48.8652 25.6817 37.5655 16.7489 46.0995Z"
        fill="rgba(1,126,255,1)"
      />
      <Ellipse
        cx="58.1863"
        cy="31.5"
        rx="42.0109"
        ry="31.5"
        fill="rgba(1,126,255,1)"
      />
      <Ellipse cx="40.8876" cy="31.5" rx="5.39178" ry="5.32394" fill="white" />
      <Ellipse cx="57.5123" cy="31.5" rx="5.39178" ry="5.32394" fill="white" />
      <Ellipse
        cx="74.8109"
        cy="31.7218"
        rx="6.06575"
        ry="5.98944"
        fill="white"
      />
    </Svg>
  );
}
