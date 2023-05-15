import {Text} from 'react-native';
import React from 'react';
import styles from './TextStyle';
export default function AppText({text,style,...otherProps}) {
  return <Text style={[styles.text,style]} {...otherProps}>{text}</Text>;
}
