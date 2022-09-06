import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';
function OfflineNotice(props) {
    const netInfo = useNetInfo();
 
    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
        No Internet connection
        </Text>
    </View>
  );
  return null;
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.primary,
      width: "100%",
      height: 50,
      position: "absolute",
      zIndex: 1,
      top: Constants.statusBarHeight,
      alignItems: "center",
      justifyContent: "center"
  },
  text: {
    fontSize: 18,
    color: colors.white,
    fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
    
}
});

export default OfflineNotice;