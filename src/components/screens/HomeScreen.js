import React, { useContext, useEffect } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import AuthContext from "./../../api/Auth-Context";
import firebase from "./../../database/firebase";


export default function HomeScreen({ navigation }) {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
  
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
