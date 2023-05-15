import React from 'react';
import Text from '../text/Text';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './PickerItemStyle';
const PickerItem = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text text={label} style={styles.text} />
    </TouchableOpacity>
  );
};

export default PickerItem;
