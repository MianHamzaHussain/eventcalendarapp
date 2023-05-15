import {StyleSheet, Platform} from 'react-native';
import colors from '../../config/colors';
const TextInputStyles = StyleSheet.create({
    container: {
      borderRadius: 25,
      padding: 20,
      marginVertical: 10,
      flexDirection: 'row',
      backgroundColor: colors.lightGray,
    },
    icon: {
      marginRight: 10,
    },
    textInput: {
      color: colors.dark,
      fontFamily: Platform.OS === 'android' ? 'Robto' : 'Avenir',
    },
    placeHolderColor: colors.gray,
    gray:colors.gray,
  });

  export default TextInputStyles;