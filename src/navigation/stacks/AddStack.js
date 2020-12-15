import React from "react";
import { AddScreen } from "../../components/screens/AddScreen";
import { CreatePllbScreen } from "../../components/screens/CreatePllbScreen";
import { TabNavigator } from "../TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const addStack = createStackNavigator();


export default function AddPllbStack() {
  return (
    <addStack.Navigator initialRouteName="Add"   screenOptions={{ headerShown: false }}>
     
      <addStack.Screen name="Add" component={AddScreen} />
      <addStack.Screen name="CreatePllb" component={CreatePllbScreen} />
      <addStack.Screen name="Home" component={TabNavigator} />
      <addStack.Screen name="Editar" component={TabNavigator} />
      <addStack.Screen name="Perfil" component={TabNavigator} />
    </addStack.Navigator>
  );
}