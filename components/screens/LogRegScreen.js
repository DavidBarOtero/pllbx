import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, ScrollView } from "react-native";

export const LogRegScreen = () => {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  console.log(state);
  const handleLogReg = (name, value) => {
    {
      setstate({ ...state, [name]: value });
    }
  };

  const [isReg, setIsReg] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.inputContainer}>
        <View>
          <Text style={styles.tittleInput}>
            {isReg === false ? "Accede a tu cuenta" : "Crea una nueva cuenta"}
          </Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(value) => handleLogReg("email", value)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Contraseña"
            placeholderTextColor="white"
            onChangeText={(value) => handleLogReg("password", value)}
          />
        </View>
        <Text onPress={() => setIsReg(!isReg)}>
          {isReg === false
            ? "¿No tienes cuenta?Registrarse"
            : "¿Ya tienes cuenta? Accede a tu cuenta"}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 0,
    marginBottom: 15,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    color: "black",
  },
  container: {
    flex: 1,

    backgroundColor: "#f4511e",
  },
  inputContainer: {
    marginTop: 250,
    margin: 50,
  },
  
  tittleInput:{
    alignContent:"center",
    marginBottom:20
    
  }
});
