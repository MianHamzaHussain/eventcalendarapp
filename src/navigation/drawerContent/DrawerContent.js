import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Image, Text, View} from 'react-native';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './DrawerContentStyles';
import { logout } from '../../store/actions/authAction';
import { useDispatch } from 'react-redux';
const CustomDrawerContent = ({isLoggedIn, user, ...rest}) => {
  const dispatch=useDispatch();
  const handleLogout = () => {
    dispatch(logout())
  };
  return (
    <View style={styles.container}>
      {isLoggedIn && (
        <View style={styles.userSection}>
          <Image
            source={{uri: 'https://picsum.photos/200/200'}}
            style={styles.userImage}
          />
          <Text style={styles.userName}>{user?.name||''}</Text>
        </View>
      )}

      <DrawerContentScrollView {...rest}>
        <DrawerItemList
          {...rest}
          activeBackgroundColor="#e6f2ff"
          labelStyle={styles.drawerItemLabel}
        />
      </DrawerContentScrollView>
      {isLoggedIn && (
        <DrawerItem
          label="Logout"
          icon={() => <McIcon name="logout" size={20} color="#555" />}
          onPress={handleLogout}
          labelStyle={styles.drawerItemLabel}
        />
      )}
    </View>
  );
};
export default CustomDrawerContent;
