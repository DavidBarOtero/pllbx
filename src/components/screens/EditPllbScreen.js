import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { ButtonGroup } from "react-native-elements";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "../styles/responsive";

export const CreatePllbScreen = (props) => {
  const week = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"];
  const time = ["Desayuno", "Comida", "Cena"];

  const [indexWeek, setIndexWeek] = useState({
    selectedIndexWeek: 0,
  });

  const [indexTime, setIndexTime] = useState({
    selectedIndexTime: 0,
  });

  const updateIndexWeek = (selectedIndex) =>
    setIndexWeek({ selectedIndexWeek: selectedIndex });

  const updateIndexTime = (selectedIndex) =>
    setIndexTime({ selectedIndexTime: selectedIndex });

  const { selectedIndexWeek } = indexWeek;

  const { selectedIndexTime } = indexTime;

  const { name } = props.route.params; //nombre pastillero

  useEffect(() => {
    setIndexTime({ selectedIndexTime: 0 });
  }, [selectedIndexWeek]);

  const TimeSection = () => {
    return (
      <View
        style={{
          backgroundColor: "#FECF71",
          borderWidth: 1,
          borderColor: "#A97A1C",
          paddingTop:5
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingTop: heightPercentageToDP("2%"),
          }}
        >
          <Text>logo y titulo</Text>
        </View>
   

        <View style={{ height: heightPercentageToDP("70%"),paddingTop: heightPercentageToDP("30%") }}>
        <View style={{display:"flex",flexDirection:"column"}}>
        
          <Text style={{textAlign:"center"}}>medicación añadida para el  {week[selectedIndexWeek]} </Text>
          <View style={{backgroundColor:"white",height: heightPercentageToDP("20%")}}>
          <Text>hola</Text>
          
          </View>
        </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.fullContainer}>
      <View style={{ paddingTop: heightPercentageToDP("4%") }}>
        <ButtonGroup
          onPress={updateIndexWeek}
          selectedIndex={selectedIndexWeek}
          selectedButtonStyle={styles.activeButtonWeek}
          buttonStyle={styles.buttonWeek}
          buttons={week}
          containerStyle={{
            height: heightPercentageToDP("4%"),
            borderRadius: 50,
          }}
        />

        <View
          style={{
            display: "flex",
            width: widthPercentageToDP("72%"),
            alignSelf: "center",
          }}
        >
          <ButtonGroup
            onPress={updateIndexTime}
            selectedIndex={selectedIndexTime}
            selectedButtonStyle={styles.activeButtonTime}
            buttonStyle={styles.buttonTime}
            buttons={time}
            containerStyle={{
              height: heightPercentageToDP("3.5%"),
              borderRadius: 50,
            }}
          />
        </View>
        <TimeSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: { backgroundColor: "#feb72b", flex: 1 },

  activeButtonWeek: { backgroundColor: "#087598" },
  buttonWeek: {
    borderWidth: 0,
    backgroundColor: "#FEDFA0",
  },
  activeButtonTime: { backgroundColor: "#087598" },
  buttonWeek: {
    borderWidth: 0,
    backgroundColor: "#FEDFA0",
  },
  buttonTime: {
    borderWidth: 0,
    backgroundColor: "#FEDFA0",
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
});
