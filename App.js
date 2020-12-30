import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider} from 'react-redux'
import Index from './Index'
import store from './src/redux/store';
import { render } from 'react-dom';
export default class App extends React.Component {
  render(){
  return (
        <Provider store={store}>
           <Index />
        </Provider>

  );
}
}
