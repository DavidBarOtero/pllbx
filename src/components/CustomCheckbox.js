import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";

export const CustomCheckbox = (
  parameters,
  containerStyle,
  textStyle,
  viewStyle
) => {
  const [checked, setChecked] = useState({});

  const options = parameters;

  const handleState = (item,) =>{
      
      setChecked((checked) => ({ ...checked, [item]: !checked[item] }));
      
      
  }

  useEffect(() => {
    const initialState = options.map((item) =>
      setChecked((checked) => ({ ...checked, [item]: false }))
    );
  }, []);

  useEffect(() => {
    console.log(Object.keys(checked));
  }, [checked]);
  
  
  return (
    <View style={viewStyle}>
      {parameters.map((item, index) => (
        <CheckBox
          key={index}
          title={item}
          containerStyle={containerStyle}
          textStyle={textStyle}
          onPress={() => handleState(item)}
          checked={checked[item]}
        />
      ))}
    </View>
  );
};
