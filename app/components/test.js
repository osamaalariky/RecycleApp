import React, {useState} from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight, Switch } from 'react-native'
import colors from '../config/colors';
import {Swipeable} from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from "@expo/vector-icons"
function ListingItem({switchh, IconComponent ,image, title, subtitle, onPress, renderRightActions, iSsnew ,sub}) {
   const[isNew, setIsNew] = useState(true);
    return (
        // <> 
        // <Switch
        //     value={isNew}
        //     onValueChange={(newvalue) => setIsNew(newvalue)}
        //     />
                
            <Swipeable renderRightActions={renderRightActions}>
          
        <TouchableHighlight 
        underlayColor={colors.line}
        onPress={onPress}>
              
              
           

           
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.img} source={image}/>}
            <View style={styles.textt}>
            <Text style={styles.name} numberOfLines={1} >{title}</Text>
            {subtitle && <Text style={styles.sub} numberOfLines={2}>{subtitle}</Text>}
            </View>
            {isNew === true ?  <View style={styles.close}>
             <MaterialCommunityIcons name='chevron-right' color={colors.dark} size={30}/>
             </View> : null }
        </View>
        </TouchableHighlight>
        </Swipeable>
              //</>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    img:{
        width: 70,
        height: 70,
        borderRadius: 35,

    },
    name:{
        fontSize: 20,
        fontWeight: "500",
        fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
    },
    sub:{
        fontSize: 18,
        color: "#6e6969",
        fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
    },
    textt:{
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    close:{
        

        justifyContent:"flex-end", 
        left: 150,
        alignSelf: "center",
        //bottom: 30
        
    },
})
export default ListingItem;