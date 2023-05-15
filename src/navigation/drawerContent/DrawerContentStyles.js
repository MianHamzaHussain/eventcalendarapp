import { StyleSheet} from 'react-native'


const drawerContentStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    userSection: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 16,
      backgroundColor: '#e6f2ff',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    userImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    drawerItemLabel: {
      fontSize: 16,
      marginLeft: -4,
    },
  });

  export default drawerContentStyles;