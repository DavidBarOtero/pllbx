import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

export default (props) => {
  const {
    state,
    descriptors,
    navigation,
    activeBackgroundColor,
    activeTintColor,
    inactiveBackgroundColor,
    inactiveTintColor,
  } = props;

  const { routes } = state;

  return (
   
    
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          height: 64,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {routes.map((route, index) => {
          if(route.name!="CreatePllb"){}
          
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const tintColor = isFocused ? activeTintColor : inactiveTintColor;
          const backgroundColor = isFocused
            ? activeBackgroundColor
            : inactiveBackgroundColor;

          const onPress = (props) => {
            
            if(route.name==="Crear"){
              
              navigation.navigate('Crear', { screen: 'Add' });
              
            }
            console.log(route.name);
            navigation.navigate(route.name);
          };
          return (
            
           
        
            <TouchableOpacity
              key={index}
              
              style={{
                display: "flex",
                backgroundColor: backgroundColor,
                flexDirection: "column",
                margin: 4,
                height: 50,
                padding: 24,
                borderTopColor: "black",

                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={onPress}
            >
    
              {options.tabBarIcon !== undefined &&
                options.tabBarIcon({ color: tintColor, size: 28 })}
              {
                <Text
                  style={{
                    marginLeft: 8,

                    color: tintColor,
                  }}
                >
                  {label}
                </Text>
              }
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
