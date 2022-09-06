import React, {useRef} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris = [], onAddImg, onRemoveImg }) {
    const scrollView = useRef()
  return (
      <View>


    <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>


    <View style={styles.container}>
        
        {imageUris.map(uri =>
            <View key={uri} style= {styles.img}>
            
                <ImageInput
                 imgUri={uri} 
                 onChangeImg={() => onRemoveImg(uri)}/>
            </View>
                 
                 )}
        <ImageInput  onChangeImg={(uri) => onAddImg(uri)}/>
        
    </View>
    </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: "row"
  },
  img: {
      marginRight: 10
  }
});

export default ImageInputList;