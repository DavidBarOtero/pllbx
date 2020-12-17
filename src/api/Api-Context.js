import React from "react";
import { useContext } from "react-native";
const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
    const api="https://cima.aemps.es/cima/rest/";
    
    
    
    
    
  return <ApiContext.Provider value={}>{children}</ApiContext.Provider>;
};
