import { View} from 'react-native';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import colors from '../../config/colors';

const Icon = ({
  size = 40,
  bgColor = colors.black,
  color = colors.white,
  name,
}) => {
  return (
    <View
      style={{
        height: size,
        width: size,
        borderRadius: size / 2,
        backgroundColor: bgColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <McIcon name={name} color={color} size={size * 0.5} />
    </View>
  );
};

export default Icon;
