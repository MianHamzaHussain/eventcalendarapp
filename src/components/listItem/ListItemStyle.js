import { StyleSheet } from "react-native";
import colors from '../../config/colors';

const ListItemStyle = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width:'100%',
      padding:15,
      backgroundColor:colors.white,
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 35,
    },
    detailCon:{
      marginLeft:10,
      flex:1,
    },
    title:{
      fontWeight:'500'
    },
    subTitle:{
      color:colors.gray,
    },
    highlightColor:colors.lightGray,
    iconColor:colors.gray,
  });

  export default ListItemStyle;