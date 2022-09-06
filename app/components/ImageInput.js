import React, {useEffect} from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker";

function ImageInput({imgUri, onChangeImg}) {
    useEffect(() => {
      requestPermission();

    }, [])
    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) alert("You need to enable permission to access images")
    
      }
    
    
    const handelPress = () => {
        if (!imgUri) selectImg();
        else 
            Alert.alert("Delete", "Are you sure you want to delete this image",
            [{text: "Yes", onPress: () => onChangeImg(null)},
        {text: "No"}])
    }
    const selectImg = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5
          });
          if(!result.cancelled)
          onChangeImg(result.uri)
         
        } catch (error) {
          console.log("error with image")
        }
      }
  return <TouchableWithoutFeedback onPress={handelPress}>

  <View style={styles.container}>
        {!imgUri && (<MaterialCommunityIcons name='camera' color={colors.dark} size={40} />)}
        {imgUri && (<Image style={styles.img} source={{uri: imgUri}}/>)}
     
    </View>
  </TouchableWithoutFeedback>
  
}

const styles = StyleSheet.create({
  container: {
      alignItems: "center",
      height: 100,
      width: 100,
      justifyContent: "center",
      backgroundColor: colors.line,
      borderRadius: 15,
      overflow: "hidden"

  },
  img: {
      width:  "100%",
      height: "100%",
     
  }
});

export default ImageInput;