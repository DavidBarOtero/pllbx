import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { SearchBar } from "react-native-elements";
import { CustomCheckbox } from "../CustomCheckbox";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "../styles/responsive";


export const CreatePllbScreen = (props) => {
  const checkboxFindPmts = ["Nombre", "Código Nacional","Código QR"];

  const [findPllb, setFindPllb] = useState("");

  const handleFindPllb = (value) => {
    setFindPllb(value);
  };
  //////CHECKBOX////////////////////////////////
  const [initialState, setInitialState] = useState({
    isCheckName: false,
    isCheckNationalC: false,
    isCheckQrc: false,
  });

  const handleCheckName = () =>
    setInitialState((initialState) => ({
      isCheckName: !initialState.isCheckName,
      isCheckNationalC: false,
      isCheckQrc: false,
    }));
  const handleCheckNationalC = () =>
    setInitialState((initialState) => ({
      isCheckName: false,
      isCheckNationalC: !initialState.isCheckNationalC,
      isCheckQrc: false,
    }));
  const handleCheckQrC = () =>
    setInitialState((initialState) => ({
      isCheckName: false,
      isCheckNationalC: false,
      isCheckQrc: !initialState.isCheckQrc,
    }));

  // console.log(initialState);

  useEffect(() => {
    console.log(findPllb);
  }, [findPllb]);

  return (
    <View style={styles.fullContainer}>
      <View style={{ paddingTop: heightPercentageToDP("4%") }}>
        <View>
          <Text style={{ textAlign: "center" }}>Titulo</Text>
          <View
            style={{
              paddingTop: heightPercentageToDP("1%"),
              alignItems: "center",
            }}
          >
            <SearchBar
              placeholder="Busca y añade toda tu medicación"
              inputContainerStyle={{
                backgroundColor: "white",
                height: heightPercentageToDP("5%"),
              }}
              containerStyle={{
                padding: 0,
                backgroundColor: "white",
                width: widthPercentageToDP("85%"),
              }}
              value={findPllb}
              onChangeText={handleFindPllb}
            />

          
              {CustomCheckbox(checkboxFindPmts,styles.checkbox,styles.checkTitle,styles.viewCheckbox )}
         
            <View style={{ paddingTop: heightPercentageToDP("2.5%") }}>
              <Button title="Buscar"></Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: { backgroundColor: "#feb72b", flex: 1 },
  viewCheckbox:{
    
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    paddingTop: heightPercentageToDP("1.5%"),
  },

  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    height: heightPercentageToDP("4%"),
    width: widthPercentageToDP("30"),
    justifyContent: "center",
    paddingTop: heightPercentageToDP("1.5%"),
  },
  input: {
    padding: 0,
    marginBottom: 15,
    borderBottomColor: "#394549",
    borderBottomWidth: 1,
    color: "black",
  },
  checkbox: {
    margin: 0,

    height: 5,
    backgroundColor: "#feb72b",
    borderWidth: 0,
  },
  checkTitle: {
    fontSize: 11,
  },
});
{
  /* <CheckBox
                title="Nombre"
                checked={initialState.isCheckName}
                onPress={() => handleCheckName()}
                containerStyle={styles.checkbox}
                textStyle={styles.checkTitle}
              />

              <CheckBox
                center={true}
                containerStyle={styles.checkbox}
                title="Código Nacional"
                checked={initialState.isCheckNationalC}
                onPress={() => handleCheckNationalC()}
                textStyle={styles.checkTitle}
              />

              <CheckBox
                containerStyle={styles.checkbox}
                title="Código QR"
                checked={initialState.isCheckQrc}
                onPress={() => handleCheckQrC()}
                textStyle={styles.checkTitle}
              />  */
}
