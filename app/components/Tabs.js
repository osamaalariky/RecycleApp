import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
function Tabs({Icon, color = "primary", text}) {
    return (
        <View style={styles.container}>
            <View style={[styles.iconStyle, {backgroundColor: colors[color]}]}>
           <MaterialCommunityIcons size={23} name={Icon} color= {colors.white}/> 

            </View>
           <Text style={styles.text}>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        paddingLeft: 15,
        padding: 12,
       
        backgroundColor: colors
    },
    iconStyle:{
        width: 46,
        height: 46,
        borderRadius: 23,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        fontSize: 22,
        padding: 5,
        fontWeight: '700',
        marginLeft: 10,
        justifyContent:"center"
        
    }
})

export default Tabs;