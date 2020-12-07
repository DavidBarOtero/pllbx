import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AuthContext from "./../../api/Auth-Context";
import { Entypo } from '@expo/vector-icons';

export const Header = (props) => {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext);
  return (
    <View>
      <View style={styles.container}>
        <AntDesign
          name="home"
          size={35}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
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
      <Entypo name="log-out" size={35} color="black" onPress={()=>signOut({navigation})}/>
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
