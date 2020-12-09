import React from "react";
import { AuthProvider } from "./src/api/Auth-Context";
import { NavigationContainer } from "@react-navigation/native";

import { TabNavigator } from "./src/navigation/TabNavigator";
import { navigationRef } from "./src/navigation/RootNavigation";


export default function App(props) {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <TabNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
