import React from 'react';
import {Text, StyleSheet, Platform} from "react-native";

function AppText({childeren, style}) {
    return (
    <Text style={[styles.text, style]}>
        {childeren}
        </Text>
    ); 
    }

    const styles = StyleSheet.create({
        text: {
            fontSize: 18,
            color: "#000",
            fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
        }
    })



export default AppText;