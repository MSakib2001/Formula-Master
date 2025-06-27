import * as React from 'react';
import { Button, View, Text,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './components/Navigation';
import {StatusBar} from 'react-native';



const Stack = createStackNavigator();

function App() {
  if (!__DEV__) {
    global.console.log = () => {}
    global.console.warn = () => {}
    global.console.error = () => {}
}
return(  
  <>
  <StatusBar  hidden={false} />
  <Navigation />
  </>
);   
}
export default App;
