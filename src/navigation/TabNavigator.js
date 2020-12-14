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
  
  const addButton=()=>{
    
    <View style={{position:"absolute",alignItems:"center"}}>
    <View>
    <TouchableHighlight underlayColor="#7f58ff">
    
    <View></View>
    
    
    </TouchableHighlight>
    
    
    </View>
    
    </View>
    
    
  }
  
  return (
    <>
      {openMenu === true && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            top: 570,
            margin: 0,
          }}
        >
          <Button title="crear"></Button>

          <Button title="editar"></Button>
        </View>
      )}
      <View>
        <View style={{ alignItems: "center", alignSelf: "center", top: 600 }}>
          <Button onPress={console.log("aaa")} title="Menú"></Button>
        </View>
      </View>

      <Tab.Navigator
        initialRouteName="ProfileScreen"
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
              <Ionicons name="ios-build" size={size} color={color} />
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
    </>
  );
};
