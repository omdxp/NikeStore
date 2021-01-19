import React from 'react';
import Home from './app/components/home';
import Cart from './app/components/cart';
import Item from './app/components/item';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
