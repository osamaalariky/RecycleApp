import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants';
function FixedScreen({children, style}) {
    return ( 
    <SafeAreaView style={[styles.screenView, style]}> 
    <View style={[styles.rest, style]}>
    {children}
    </View> 
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenView:{
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    
    },
    rest:{
        flex: 1
    }
})
export default FixedScreen;