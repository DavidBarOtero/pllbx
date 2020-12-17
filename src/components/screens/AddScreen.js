import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Button, View, TextInput } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "./../styles/responsive";
import { Entypo } from "@expo/vector-icons";

export const AddScreen = ({ navigation }) => {
  const [name, setName] = useState({
    namePllb: "",
  });
//   useEffect(() => {
//     console.log(name);
//   }, [name])

  const handleNewPllb = (value) => {
    setName({  namePllb: value });

  };
  const navigate=()=>name.namePllb!=""?navigation.navigate("CreatePllb",{name:name.namePllb}):alert("Debes darle un nombre antes de poder continuar");

  return (
    <View style={styles.fullContainer}>
      <View style={styles.menu}>
        <View
          style={{
            backgroundColor: "#A97A1C",
            width: widthPercentageToDP("65%"),
            alignSelf: "center",
            borderRadius: 50,
            bottom: heightPercentageToDP("2%"),
          }}
        >
          <Text
            style={{
              textAlign: "center",
              padding: 10,
              fontSize: widthPercentageToDP("5%"),
              color: "white",
            }}
          >
            Crear nuevo pastillero
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              textAlign: "center",
              paddingTop: heightPercentageToDP("2%"),
              fontSize: widthPercentageToDP("4.1%"),
            }}
          >
            Puedes crear tantos pastilleros como necesites, comienza por darle
            un nombre y crearlo.
          </Text>
        </View>
        <View
          style={{
            paddingTop: heightPercentageToDP("1%"),
            alignItems: "center",
            paddingTop: heightPercentageToDP("2%"),
          }}
        >
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Dale un nombre"
            placeholderTextColor="black"
            onChangeText={(value) => handleNewPllb(value)}
            // value={state.password}
          />
        </View>

        <View     >
          <Entypo
            style={{ textAlign: "center" }}
            name="arrow-bold-right"
            size={widthPercentageToDP("13%")}
            color="#008000"
            onPress={()=>navigate()}
       
          />
        </View>
      </View>
    </View>
  );
};
// hp('70%'), // 70% of height device screen
//     width: wp('80%')

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#feb72b",
    padding: 1,
  },
  input: {
    paddingTop: 0,
    marginBottom: 15,
    // borderBottomColor: "#394549",
    // borderBottomWidth: 1,
    color: "black",
    backgroundColor: "white",
    width: widthPercentageToDP("85%"),
    height: heightPercentageToDP("5%"),
    borderRadius: 40,
    textAlign: "center",
  },

  menu: {
    // marginTop:heightPercentageToDP('30%'),
    width: widthPercentageToDP("100%"),
    height: heightPercentageToDP("32%"),
    backgroundColor: "#FECF71",
    borderWidth: 0.5,
    borderColor: "#A97A1C",
  },
});
