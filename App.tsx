import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Sosiii/src/screen/homeScreen/homeScreen'
import infoComic from '../Sosiii/src/screen/homeScreen/infoComicScreen'

const HomeStack = createStackNavigator();
export function App() {

  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
        <HomeStack.Screen
          name="Comic"
          component={infoComic}
          options={{title: 'Conmic'}}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;