
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './components/LogIn';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignUps from './components/SignUps';
import Analytics from './components/Analytics';
import Priority from './components/Priority';
import StoreInfo from './components/StoreInfo';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn}  options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="SignUps" component={SignUps} options={{headerShown: false}} />
        <Stack.Screen name="Analytics" component={Analytics} options={{headerShown: false}} />
        <Stack.Screen name="Priority" component={Priority} options={{headerShown: false}} />
        <Stack.Screen name="StoreInfo" component={StoreInfo} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

