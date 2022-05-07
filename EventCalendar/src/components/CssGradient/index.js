import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import generateGradient from './generator';

export { generateGradient };

const CssGradient = ({ gradient, children, style }) => {
  // Avoid breaking this when people are not using expo :)
  // find a better solution to expose either expo-linear-gradient or
  // react-native-linear-gradient.

  const generated = generateGradient(gradient, {
    width: 600,
    height: 600,
  });
  if (generated.length > 1) {
    return (
      <View style={[style, { position: 'relative' }]}>
        {generated.map((obj, i) => (
          <LinearGradient style={[StyleSheet.absoluteFill]} {...obj} key={i} />
        ))}
        {children || null}
      </View>
    );
  }

  return (
    <LinearGradient {...generated[0]} style={style} >
      {children || null}
    </LinearGradient>
  );
};

export default CssGradient;
