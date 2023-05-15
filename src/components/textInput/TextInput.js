import {TextInput, View} from 'react-native';
import React from 'react';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TextInputStyle';
const AppTextInput = ({icon,width="100%",style, ...rest}) => {
  return (
    <View style={[styles.container,{width}]}>
      <McIcon name={icon} size={20} color={styles.gray} style={styles.icon} />
      <TextInput
        {...rest}
        style={styles.textInput}
        placeholderTextColor={styles.placeHolderColor}
      />
    </View>
  );
};

export default AppTextInput;

