import {StyleSheet, Platform} from 'react-native';
const AppTextStyle = StyleSheet.create({
  text: {
    ...Platform.select({
      android: {fontFamily: 'Roboto', fontSize: 18},
      ios: {fontFamily: 'Avenir', fontSize: 16},
    }),
  },
});

export default AppTextStyle;
