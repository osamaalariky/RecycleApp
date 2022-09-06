import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
function ListingDelete({onPress}) {
    return (
    <TouchableWithoutFeedback onPress={onPress}>

    <View style={styles.swipe}>
        <MaterialCommunityIcons
        name='trash-can'
        size={35}
        color={colors.white}
        />
    </View>

    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    swipe: {
        backgroundColor:"#ff5252",
        width: 70,
        justifyContent: "center",
        alignItems:"center"
    }
})
export default ListingDelete;