import React from 'react';
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors';
function ListSeparators(props) {
    return <View style={styles.lining}/>
}
const styles = StyleSheet.create({
    lining:{
        width:"100%",
        height: 2,
        backgroundColor: colors.line
    }
})

export default ListSeparators;