import React, { useState, useEffect } from "react";
import firebase from "./../../database/firebase";
import "@firebase/auth";

import {
  Button,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { register } from "../../api/Api";
import {signInWithFacebook}from "../../api/Api";
export const LogRegScreen = ({ navigation }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isReg, setIsReg] = useState(false);

  const handleLogReg = (name, value) => {
    {
      setState({ ...state, [name]: value });
    }
  };
  const firstLogin = () => setIsReg(false);


  

  useEffect(() => {
    return () => {
      setState({
        email: "",
        password: "",
        confirmPassword: "",
      });
    };
  }, [isReg]);
  const onRegisterPress = () => {
    if (
      state.email === "" ||
      state.password === "" ||
      state.confirmPassword === ""
    ) {
      Alert.alert("Error en el registro", "Debes rellenar todos los campos");
    } else if (state.password !== state.confirmPassword) {
      Alert.alert(
        "Error al confirmar tu contraseña",
        "Asegurate de haber confirmado correctamente la contraseña"
      );
    } else {
      register(state.email, state.password, firstLogin);
    }
  };

  const login = () => {
    console.log("soy el login" + state);
  };
  const handleMethod = () => (isReg === true ? onRegisterPress() : login());

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
            value={state.email}
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
            secureTextEntry={true}
            onChangeText={(value) => handleLogReg("password", value)}
            value={state.password}
          />
        </View>
        {isReg === true && (
          <View>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Confirmar Contraseña"
              placeholderTextColor="white"
              secureTextEntry={true}
              onChangeText={(value) => handleLogReg("confirmPassword", value)}
              value={state.confirmPassword}
            />
          </View>
        )}
        <Button
          buttonStyle={styles.button}
          title={isReg === false ? "Entrar" : "Registrarse"}
          onPress={handleMethod}
        ></Button>

        <Button
           onPress={signInWithFacebook}
          title={
            isReg === false ? "Entrar con Facebook" : "Registrarse con Facebook"
          }
        ></Button>

        <Text style={styles.footer} onPress={() => setIsReg(!isReg)}>
          {isReg === false
            ? "¿No tienes cuenta? Registrate"
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
    borderBottomColor: "#394549",
    borderBottomWidth: 1,
    color: "black",
  },
  container: {
    flex: 1,

    backgroundColor: "#087598",
  },
  inputContainer: {
    marginTop: 200,
    margin: 20,
    padding: 15,
    borderColor: "black",
    backgroundColor: "#ACD1DC",
    borderRadius: 15,
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
    color: "black",
    textAlign: "right",
    fontSize: 11,
  },
});
