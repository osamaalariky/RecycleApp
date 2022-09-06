import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Image, Platform } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import {  } from 'react-native';
import AppButton from '../components/AppButton';
import routes from '../components/Nav/routes';
function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
     <ImageBackground source={require("../assets/background.jpg")} resizeMode="cover" blurRadius={5} style={styles.image} >
     <View style={styles.logo}>
      <Image source={require("../assets/logo-red.png")} style={styles.logoa}/>
      <Text style={styles.subtitle}>Sell What you don't need</Text>
     </View>
     <View style={styles.buttonStyling}>
       <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)}/>
       <AppButton title="Register" color = "secondry" onPress={() => navigation.navigate(routes.REGISTER)}/>
     </View>
     </ImageBackground>
    </View>
    

  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    
   
  },
 
  login: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70,
    marginBottom: 20
  },
  register: {
    backgroundColor:colors.secondry,
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center", 
    marginBottom: 20,
    borderRadius: 70
  },
  reText: {
    color: "#fff", 
    fontWeight: "bold",
    fontSize: 20,
  },
  LoText: {
    color: "#fff",
    fontSize :20
  },
  logo:{
    alignItems:"center",
    position:"absolute",
    top:70
  },
  logoa:{
    width: 100,
    height:100
  },
  buttonStyling:{
    padding: 20,
    width: "100%"
  },
  subtitle:{
    fontSize:25,
    fontWeight: "600",
    paddingVertical: 20
  }
})

export default WelcomeScreen;