import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from "react-native"
import colors from '../config/colors';
function AppButton({title, onPress, color = "primary"}) {
    return (
        <TouchableOpacity style ={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.LoginText}>{title}</Text>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
  button: {
      backgroundColor: colors.primary,
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      marginVertical: 7
      
     
  }, LoginText:{
      color: colors.white,
      fontSize: 18,
      textTransform: "uppercase",
      fontWeight:"bold"
  }
})

export default AppButton;