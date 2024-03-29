import React from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import * as Progress from "react-native-progress"
import colors from '../config/colors';
import LottieView from "lottie-react-native"
function UploadScreen({progress = 0, visible = false, onDone}) {
  return (
      <Modal visible={visible}>
        <View style={styles.container}>
          {progress < 1 ?  
          <Progress.Bar progress={progress} color={colors.primary} width={200}/>
           : <LottieView 
           source={require("../assets/animations/done.json")}
           loop={false}
           autoPlay
           style={styles.animation}
           onAnimationFinish={onDone}
           />}
        
        </View>

      </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,

  },
  animation:{
    width: 150
  },
  text: {
    fontSize: 18,
    color: "#000",
    fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
}
});

export default UploadScreen;