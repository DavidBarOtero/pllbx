import React from "react";
import { Text, StyleSheet, View,Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
export default function ProfileScreen({Name}) {
    
    const navigation = useNavigation();
  return (
    <View>
    <Text>ProfileScreen</Text>
    </View>
  );
}
