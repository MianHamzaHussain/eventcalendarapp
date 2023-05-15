import {createDrawerNavigator} from '@react-navigation/drawer';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PublicEvent from '../../screens/publicEvent/PublicEvent';
import PrivateEvent from '../../screens/privateEvent/PrivateEvent';
import Login from '../../screens/login/Login';
import Register from '../../screens/register/Register';

import CustomDrawerContent from '../drawerContent/DrawerContent';
import {useSelector} from 'react-redux';
import ManageEvent from '../../screens/mangeEvent/ManageEvent';
const Drawer = createDrawerNavigator();

function AppDrawer() {
  const {user} = useSelector(state => state.auth);
  const isLoggedIn = Object.keys(user).length > 0;
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
      drawerContent={props => (
        <CustomDrawerContent {...props} isLoggedIn={isLoggedIn} user={user} />
      )}>
      <Drawer.Screen
        name="Home"
        component={PublicEvent}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <McIcon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      {isLoggedIn ? (
        <>
          <Drawer.Screen
            name="PrivateEvent"
            component={PrivateEvent}
            options={{
              drawerIcon: ({focused, color, size}) => (
                <McIcon
                  name={focused ? 'calendar-plus' : 'calendar-plus'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </>
      ) : (
        <>
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{
              drawerIcon: ({focused, color, size}) => (
                <McIcon
                  name={focused ? 'account' : 'account-outline'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Register"
            component={Register}
            options={{
              drawerIcon: ({focused, color, size}) => (
                <McIcon
                  name={focused ? 'account-plus' : 'account-plus-outline'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </>
      )}
      {isLoggedIn && user.isAdmin && (
        <Drawer.Screen
          name="ManageEvent"
          component={ManageEvent}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <McIcon
                name={focused ? 'pencil' : 'account-plus-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      )}
    </Drawer.Navigator>
  );
}
export default AppDrawer;
