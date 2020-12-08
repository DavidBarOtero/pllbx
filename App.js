import React from "react";
import { AuthProvider } from "./src/api/Auth-Context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {TabNavigator} from './src/navigation/TabNavigator';
import ProfileScreen from "./src/components/screens/ProfileScreen";

import { Header } from "./src/components/header/Header";

import { StyleSheet, TabBarIOSItem, Text, View } from "react-native";
import { LogRegScreen } from "./src/components/screens/LogRegScreen";
import { navigationRef } from './src/navigation/RootNavigation';
const Stack = createStackNavigator();

export default function App(props) {


  return (
    <NavigationContainer ref={navigationRef}>
       
      <AuthProvider>
        <TabNavigator/>
    
         

    </AuthProvider>
      </NavigationContainer>
  );
}
