import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store/store';
import AppDrawer from './src/navigation/drawer/Drawer';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppDrawer/>
      </NavigationContainer>
    </Provider>
  );
}
