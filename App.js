import React from "react";
import { AuthProvider } from "./src/api/Auth-Context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./src/navigation/TabNavigator";
import { navigationRef } from "./src/navigation/RootNavigation";
import { CreatePllbScreen } from "./src/components/screens/CreatePllbScreen";

const Stack=createStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer ref={navigationRef}

    
    
    >
      <AuthProvider>
    <Stack.Navigator
    
    screenOptions={{ headerShown: false }}
    >
    
    <Stack.Screen
    name="Home"
    component={TabNavigator}
    headerMode= 'none'
   / >
    

    </Stack.Navigator>
     

      </AuthProvider>
    </NavigationContainer>
  );
}
