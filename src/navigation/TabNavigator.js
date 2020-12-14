import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./../components/screens/HomeScreen";
import ProfileScreen from "./../components/screens/ProfileScreen";
import CustomTab from "./CustomTab";
import { TouchableHighlight } from "react-native-gesture-handler";

export const TabNavigator = (props) => {
  const Tab = createBottomTabNavigator();
  const [openMenu, setOpenMenu] = useState(false);
  function a() {
    return setOpenMenu(!openMenu);
  }
  useEffect(() => {
    console.log(openMenu);
  }, [openMenu]);

  return (
  

      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <CustomTab {...props} />}
        tabBarOptions={{
          activeTintColor: "#fff",
          activeBackgroundColor: "#feb72b",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            ),
          }}
        />
            <Tab.Screen
          name="Añadir"
          component={HomeScreen}
          options={{
            title: "Añadir",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-add-circle" size={size} color={color}/>
            ),
          }}
        />
               <Tab.Screen
          name="Editar"
          component={HomeScreen}
          options={{
            title: "Editar",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-book" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            title: "Perfil",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-build" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
 
  );
};
