import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import EditIcon from './EditIcon';
function CategoryPickerItem({item, onPress, style}) {
    return(

    <View style={styles.container}> 
    <TouchableOpacity onPress={onPress}>
        
        <EditIcon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
    </TouchableOpacity>
        <Text style={styles.text}>
        {item.label}
        </Text>
    </View>
    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        color: "#000",
        fontWeight: "600" ,
        fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
        marginTop: 5,
        textAlign: "center"
    },
    container:{
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%"
    }

})

export default CategoryPickerItem;