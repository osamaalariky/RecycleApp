import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import colors from '../config/colors';

function Card({title, price, imageUrl, onPress, thumbnailUrl}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image style={styles.img} uri={imageUrl} preview={{uri:thumbnailUrl}} tint="light"/>
            <View style={styles.details}>
            <Text style={styles.tit} numberOfLines={2}>{title}</Text>
            <Text style={styles.sub} numberOfLines={1}>{price}</Text>

            </View>
        </View>

        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
        width: "100%"
    },
    details:{
        padding:20,
    },
    img:{
        width:"100%",
        height: 200,
        
    },
    tit:{
        marginBottom: 7,
        fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
    }, 
    sub:{
        color: colors.secondry,
        fontWeight: "bold",
        fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
    }
})

export default Card;