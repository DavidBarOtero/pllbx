import React, { useEffect, useState } from "react";
import { AuthProvider } from "./src/api/Auth-Context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TabNavigator } from "./src/navigation/TabNavigator";
import { navigationRef } from "./src/navigation/RootNavigation";
import HomeScreen from "./src/components/screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

export default function App(props) {
  const [openLMenu, setOpenLMenu] = useState(false);

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
    
  
        
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
          </Drawer.Navigator>
        
        

          <TabNavigator />
      
      </AuthProvider>
    </NavigationContainer>
  );
}
