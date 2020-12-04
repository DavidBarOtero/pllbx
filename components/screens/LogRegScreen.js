import React, { useState } from "react";
import {
  Button,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from "react-native";

export const LogRegScreen = () => {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const handleLogReg = (name, value) => {
    {
      setstate({ ...state, [name]: value });
    }
  };

  const [isReg, setIsReg] = useState(false);

  const saveNewUser = () => {
    console.log("soy el registro"+state);
  };
  
  const login=()=>{console.log("soy el login"+state)};
  
  const handleMethod=()=>isReg===true ? saveNewUser():login();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.tittleInput}>
          {isReg === false ? "Accede a tu cuenta" : "Crear nueva cuenta"}
        </Text>
        <View>
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
        <Button title={isReg === false ? "Entrar" : "Registrarse"}
        onPress={handleMethod}
        
        
        
        ></Button>
        <Text style={styles.footer} onPress={() => setIsReg(!isReg)}>
          {isReg === false
            ? "¿No tienes cuenta?Registrate"
            : "¿Ya tienes cuenta? Accede a tu cuenta"}
        </Text>
      </View>
    </ScrollView>
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
    marginTop: 200,
    margin: 50,
  },

  tittleInput: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  footer: {
    marginTop: 10,
    color: "white",
  },
});
