import React from 'react';
import { Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import FirstScreen from './Screens/FirstScreen'
import SecondScreen from './Screens/SecondScreen'

const Navigation = StackNavigator ({
  First: {screen: FirstScreen},
  Second: {screen: SecondScreen}  
});

export default Navigation;