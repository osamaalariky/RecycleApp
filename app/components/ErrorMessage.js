import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'
function ErrorMessage({error, visible}) {
    if (!visible || !error) return null;
    return <Text style={styles.text}>{error}</Text>

}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: "red",
        fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
    }
})
export default ErrorMessage;