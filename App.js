import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import Firebase from'./config/firebase';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./components/screens/ProfileScreen";
import HomeScreen from "./components/screens/HomeScreen";
import { Header } from "./components/header/Header";
import { PillboxHomeScreen } from "./components/screens/PillboxHomeScreen";
import { LoginScreen } from "./components/screens/LoginScreen";
import { StyleSheet, Text, View } from "react-native";

const Stack = createStackNavigator();

export default function App(props) {
  const defaultNavigation = ({ navigation }) => ({
    header: <Header title="Hellow" />,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
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
         options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
