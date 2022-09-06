import React from 'react';

import { Text, TouchableOpacity, StyleSheet } from 'react-native'
function PickerItems({item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
        padding: 20
    }
})
export default PickerItems;