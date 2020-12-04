import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const Header = (props) => {
  console.log(props);
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <AntDesign
          name="calendar"
          size={35}
          color="black"
          onPress={() => navigation.navigate("PillboxHomeScreen")}
        />
        <AntDesign
          name="setting"
          size={35}
          color="black"
          onPress={() => navigation.navigate("Profile")}
        />
        <AntDesign
          name="home"
          size={35}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
