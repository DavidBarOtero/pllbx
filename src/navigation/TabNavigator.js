import React, { useState, } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./../../src/components/screens/HomeScreen";
import { PillboxHomeScreen } from "./../components/screens/PillboxHomeScreen";
import CustomTab from "./CustomTab";
const Tab = createBottomTabNavigator();

export const TabNavigator = (props) => {
  
  // const[openMenu,setOpenMenu]=useState(false);
  // const menus=()=>setOpenMenu(true);

  return (
  
    <Tab.Navigator
      initialRouteName="HomeScreen"
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
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menú "
        component={PillboxHomeScreen}
     
        options={{
          title: "Menú",
         
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ios-apps"
              size={size}
              color={color}
            
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PillboxHomeScreen}
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
