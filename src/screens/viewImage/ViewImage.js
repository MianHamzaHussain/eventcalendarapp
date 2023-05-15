import {View, Image} from 'react-native';
import React from 'react';
const img = require('../../../assets/chair.jpg');
import styles from './ViewImageStyle';
import Icon from 'react-native-vector-icons/AntDesign';
export default function ViewImageScreen() {
  return (
    <View style={styles?.container}>
      <View style={styles?.closeButton}>
        <Icon name="close" size={35} color="white" />
      </View>
      <View style={styles?.deleteButton}>
        <Icon name="delete" size={35} color="white" />
      </View>
      <Image source={img} style={styles?.img} resizeMode="contain" />
    </View>
  );
}
