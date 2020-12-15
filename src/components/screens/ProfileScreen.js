import React from "react";
import { Text, StyleSheet, View,  } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>
        ProfileScreen, aqui irán añadir alergias, interacciones,foto perfil?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 40,
  },
});
