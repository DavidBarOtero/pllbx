import React from "react";
import { AuthProvider } from "./src/api/Auth-Context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./src/components/screens/ProfileScreen";
import HomeScreen from "./src/components/screens/HomeScreen";
import { Header } from "./src/components/header/Header";
import { PillboxHomeScreen } from "./src/components/screens/PillboxHomeScreen";
import { StyleSheet, Text, View } from "react-native";
import { LogRegScreen } from "./src/components/screens/LogRegScreen";
import { navigationRef } from './src/RootNavigation';
const Stack = createStackNavigator();

export default function App(props) {
  
  const defaultNavigation = ({ navigation }) => ({
    header: <Header title="Hellow" />,
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <Stack.Navigator
          initialRouteName="LogReg"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#087598",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerTitle: (props) => <Header {...props} /> }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerTitle: (props) => <Header {...props} /> }}
          />
          <Stack.Screen
            name="PillboxHomeScreen"
            component={PillboxHomeScreen}
            options={{ headerTitle: (props) => <Header {...props} /> }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="LogReg"
            component={LogRegScreen}
          />
        </Stack.Navigator>
    </AuthProvider>
      </NavigationContainer>
  );
}
