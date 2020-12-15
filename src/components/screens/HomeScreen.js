import React, { useContext, useEffect } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import AuthContext from "./../../api/Auth-Context";
import firebase from "./../../database/firebase";





export default function HomeScreen({ route, navigation }) {
  const { user } = useContext(AuthContext);

  
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((e) => {
  //     if (user != true) {
  //       navigation.navigate("LogReg");
  //     } else {
  //       navigation.navigate("Home");
  //     }
  //   }),
  //     [user];
  // });

  return (
    <View style={styles.container}>
      <Text>HomeScreen, aqui cargaremos lo que tenga de medicación en el día actual</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
  container:{
    top:30
    
    
  }
  
  
  
});
