import React from "react";
import { ListItem, Icon } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export const Menu = () => {
  const menuActions = [
    {
      title: "Crear nuevo pastillero",
      id: 1,
    },
    {
      title: "Editar pastillero",
      id: 2,
    },
    {
      title: "Eliminar pastillero",
      id: 3,
    },
  ];

  return (
    <View style={styles.container}>
      {menuActions.map((item, i) => (
        <ListItem key={item.id} bottomDivider >
          <ListItem.Content style={styles.itemList}>
            {item.id === 1 && (
              <Ionicons name="ios-home" size={28} color="black" />
            )}
            {item.id === 2 && (
              <Ionicons name="ios-home" size={28} color="black" />
            )}
            {item.id === 3 && (
              <Ionicons name="ios-home" size={28} color="black" />
            )}
            <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-end",
    height:619
    
  },

  itemList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },

  title: {
    fontSize: 14,
    paddingLeft: 18,
  },
});
