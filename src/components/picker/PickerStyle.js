import { StyleSheet } from "react-native";
import colors from '../../config/colors';
const PickerStyles = StyleSheet.create({
    container: {
      borderRadius: 25,
      padding: 20,
      marginVertical: 10,
      flexDirection: 'row',
      backgroundColor: colors.lightGray,
      justifyContent: 'center',
    },
    icon: {
      marginRight: 10,
    },
    textF: {
      color: colors.dark,
      flex: 1,
    },
    placeholder:{
      flex:1,
      color:colors.gray,
    },
    gray:colors.gray,
  });

  export default PickerStyles;