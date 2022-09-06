import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text,TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
import FixedScreen from './FixedScreen';
import PickerItems from './PickerItems';

function Picker({icon, placeholder, numberOfCols = 1 , PickerItemsComponent = PickerItems ,items, onSelectItem, width= "100%", style,selectItem,  ...otherProps}) {
  const [model, setModel] = useState(false);
    return (
      <>
        <TouchableWithoutFeedback onPress={() => setModel(true)}>
          <View style={[styles.container, {width}]}>
            {icon && (<MaterialCommunityIcons name={icon} size={20} color={colors.subtitle} style={styles.icons}/>)}  
            {selectItem ? (
            <Text style={styles.text}>{selectItem.label}</Text>) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
            )}
            <MaterialCommunityIcons name='chevron-down' size={20} color={colors.subtitle}/>
          </View>
  
        </TouchableWithoutFeedback>
        <Modal visible={model} animationType="slide">
          <FixedScreen>
          <Button title="Close" onPress={() => setModel(false)}/>
          <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={numberOfCols}
          renderItem={({item}) => (
        <PickerItemsComponent
        item={item}
        label={item.label}
        onPress={() => 
        {
          setModel(false)
          onSelectItem(item)
        }}
        />
        )}
          />
          </FixedScreen>
        </Modal>

      </>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.line,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10

  },
  textInput:{
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
    color: colors.dark 
  }, 
  icons: {
    marginRight: 10
  },
  text: {
    fontSize: 18,
    color: colors.dark,
    fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
    flex: 1
},
placeholder: {
  color: colors.dark,
  flex: 1,
},
})
export default Picker;