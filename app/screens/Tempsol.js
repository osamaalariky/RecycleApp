import React,{useState} from 'react';
import { View, Switch, StyleSheet } from 'react-native'
import AppTextInput from '../components/AppTextInput';
import FixedScreen from '../components/FixedScreen';
import Picker from '../components/Picker';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
const pickertt = [
    {label: "electronics", value: 1},
    {label: "Furniture", value: 2},
    {label: "clothings", value: 3},
]
function Tempsol(props) {
    const[isNew, setIsNew] = useState(false);
    const [pick, setpick] = useState(pickertt[0]);
    return (
        <FixedScreen>
            <Picker selectItem={pick} onSelectItem={setpick} items={pickertt} icon="apps" placeholder="Category"/>
            <AppTextInput placeholder="Username" icon={"email"}/>
            <Switch
             value={isNew}
             onValueChange={(newvalue) => setIsNew(newvalue)}
             
             />
             {isNew === true ?  <View style={styles.close}>
              <MaterialCommunityIcons name='chevron-right' color={colors.dark} size={30}/>
              </View> : null }

        </FixedScreen>
    );
}
const styles = StyleSheet.create({
    close:{
        
       
        justifyContent:"flex-end", 
        left: 150,
        alignSelf: "center",
        //bottom: 30
        
    }
})

export default Tempsol;