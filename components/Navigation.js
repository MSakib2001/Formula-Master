import  React, { Component } from 'react';
import { Button, View, Text,Alert } from 'react-native';
import { NavigationContainer, NavigationActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Controller from './Controller';
import Chapters from './Chapters';




const Stack = createStackNavigator();


function Navigation(){ 

  

 return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false  
  }} initialRouteName="Home">  
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Controller" component={Controller} />
        <Stack.Screen name="Chapters" component={Chapters} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );

  
}

export default Navigation