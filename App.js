import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/Home"
import IssLocationScreen from "./screens/IssLocation"
import MeteorScreen from "./screens/Meteors";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"


const Stack = createStackNavigator() 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "home" screenOptions = {{headerShown:true}}>
        <Stack.Screen name = "home" component = {HomeScreen}/>
        <Stack.Screen name = "issLocation" component = {IssLocationScreen}/>
        <Stack.Screen name = "meteor" component = {MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


