import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './src/Splash';
import Login from './src/Login';

const MainNavigator = createStackNavigator({
  splash: { screen: Splash },
  login: { screen: Login },
  
});

const App = createAppContainer(MainNavigator);

export default App;
