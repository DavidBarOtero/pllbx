import React from 'react';
import{Text,StyleSheet,View,TextInput}from'react-native';

export const LoginScreen = () => {
    return (
        <View>
       
        <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        
        />
        
        </View>
   
    )
};

const styles=StyleSheet.create({
    
    input:{
        
        margin:100,
        borderColor:'black',
        borderWidth:1,
      
        
    }
    
    
    
    
    
})
