import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ModalScreen from './screens/ModalScreen';

const MainStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
},{
navigationOptions: {
  headerStyle: {
    backgroundColor: '#f4511e'
},
headerTintColor: '#fff',
headerTitleStyle:{
    fontWeight: 'bold'
}
}});

const RootStack = createStackNavigator({
  Main: MainStack,
  MyModal: ModalScreen
},
{
  mode: 'modal',
  headerMode: 'none'
})

export default RootStack;