import React from 'react';
import {View, StyleSheet, Platform, StatusBar, Image } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';

function ViewImg(props) {
    return (
        <View style={styles.container}>
          <View style={styles.close}>
              <MaterialCommunityIcons name='close' color="white" size={35}/>
              </View>  
          <View style={styles.delete}>
          <MaterialCommunityIcons name='trash-can-outline' color="white" size={35}/>
          </View>
            <Image style={styles.image} resizeMode="contain" source={require('../assets/chair.jpg')}/>
        
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
       // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
       // backgroundColor:"#000",
       flex:1,
       backgroundColor: colors.black
    },
    image:{
      //  resizeMode:"contain",
        width: "100%",
        height: "100%"
    },
    close:{
        
        position:"absolute",
        top:10,
        left: 30
    },
    delete:{
        position:"absolute",
        top:10,
        right: 30
    },
})
export default ViewImg;