import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import DisplayScreen from '../screens/DisplayScreen';
import LoginScreen from '../screens/LoginScreen';
const MovieApp= createStackNavigator({
    Login : LoginScreen,
    Display : DisplayScreen,
});




export default createAppContainer(MovieApp);
