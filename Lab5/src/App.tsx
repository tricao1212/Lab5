import {View, Text} from 'react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import store from './store/Store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import AddService from './screens/AddService';
import ServiceDetail from './screens/ServiceDetail';
import BlockService from './compents/BlockService';
import {MenuProvider} from 'react-native-popup-menu';
import UpdateService from './screens/UpdateService';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <MenuProvider>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{headerShown: true}}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="AddService" component={AddService} />
              <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
              <Stack.Screen name="UpdateService" component={UpdateService} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </MenuProvider>
    </Provider>
  );
};

export default App;
