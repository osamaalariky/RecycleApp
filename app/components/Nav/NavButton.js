import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons"
function NavButton({onPress}) {
  return (
      <TouchableOpacity onPress={onPress}>

    <View style={styles.container}>
        <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40}/>
    </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
      alignItems: "center",
      justifyContent: "center",
      height: 80,
      width: 80,
      borderRadius: 40,
      backgroundColor: colors.primary,
      bottom: 20,
      borderColor: colors.white,
      borderWidth: 10
  }
});

export default NavButton;