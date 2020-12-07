import React, { useState, useEffect,useContext } from "react";
import { Button,Text,StyleSheet,View,TextInput, ScrollView,Alert,} from "react-native";
import AuthContext from './../../api/Auth-Context';
 import { register } from "../../api/Auth-Context";

import { FontAwesome } from "@expo/vector-icons";

export const LogRegScreen = ({ navigation }) => {
  
  
  
   const{register,userLogin,signInWithFacebook}=useContext(AuthContext);
  
  
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isRegMenu, setIsRegMenu] = useState(false);

  const handleLogReg = (name, value) => {
    {
      setState({ ...state, [name]: value });
    }
  };

  const onRegisterPress = () => {
    if (
      state.email === "" ||
      state.password === "" ||
      state.confirmPassword === ""
    ) {
      Alert.alert("Error en el registro", "Debes rellenar todos los campos.");
    } else if (state.password.length < 6) {
      Alert.alert(
        "Error al introducir tu contraseña",
        "La contraseña debe contener 6 caracteres como mínimo."
      );
    } else if (state.password !== state.confirmPassword) {
      Alert.alert(
        "Error al confirmar tu contraseña",
        "Asegurate de haber confirmado correctamente la contraseña."
      );
    } else {
      {register(state.email, state.password, { navigation })};
    }
  };
  const onLoginPress = () => {
    if (
      state.email === "" ||
      state.password === "" 
     
    ) {
      Alert.alert("Error en el registro", "Debes rellenar todos los campos.");
    } else{
      userLogin(state.email,state.password,{navigation});
      
    }
    }

     
    
  
 
  const handleMethod = () => (isRegMenu === true ? onRegisterPress() : onLoginPress());

  useEffect(() => {
    return () => {
      setState({
        email: "",
        password: "",
        confirmPassword: "",
      });
    };
  }, [isRegMenu]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.tittleInput}>
          {isRegMenu === false ? "Accede a tu cuenta" : "Crear nueva cuenta"}
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
        {isRegMenu === true && (
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
        
          title={isRegMenu === false ? "Entrar" : "Registrarse"}
          onPress={handleMethod}
        ></Button>
        <View style={styles.icon}>
           <FontAwesome
            style={styles.facebook}
            onPress={signInWithFacebook}
            name="facebook-official"
            size={50}
            color="blue"
          />
       
          <Text style={styles.footer} onPress={() => setIsRegMenu(!isRegMenu)}>
            {isRegMenu === false
              ? "¿No tienes cuenta? Registrate"
              : "¿Ya tienes cuenta? Accede a tu cuenta"}
          </Text>
        </View>
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
  icon: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },

  facebook: {
    margin: 10,
  },

  twitter: {
    margin: 10,
  },
});
