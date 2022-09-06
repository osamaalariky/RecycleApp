import React, {useState} from 'react';
import { View, StyleSheet, Switch } from 'react-native'
import { FlatList } from 'react-native'
import FixedScreen from '../components/FixedScreen';
import ListingDelete from '../components/ListingDelete';
import ListingItem from '../components/ListingItem';
import ListSeparators from '../components/ListSeparators';
import {MaterialCommunityIcons} from "@expo/vector-icons"
const intialMessages =[
    {
        id: 1,
        title: "1st Item",
        description: "1st description",
        image : require("../assets/yahala.jpg")
    },
    {
        id: 2,
        title: "2nd Item",
        description: "2nd description",
        image : require("../assets/yahala.jpg")
    },
]
function MessagesScreen(props) {
    const [messages, setMessages] = useState(intialMessages);
    const [refreshing, setRefresh] = useState(false);
    const {iSsnew, setIsSNew} = useState(true);
    const handleDelete = (message) =>{
    setMessages(messages.filter((m) => m.id !== message.id));
    };
    return (
        <FixedScreen>
           
            <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => <ListingItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            value={iSsnew}
            onValueChange={setIsSNew}
            switchh={item.switchh}
            onPress={() => console.log("The data selected is: ", item)}
            renderRightActions={() => <ListingDelete onPress={() => handleDelete(item)}/>}
            /> }
            
            ItemSeparatorComponent={ListSeparators}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: "2nd Item",
                        description: "2nd description",
                        image : require("../assets/yahala.jpg")
                    },
                
                ])
            }}
    
            />

        </FixedScreen>
    );
}

const styles = StyleSheet.create({
    close:{
        
        position:"absolute",
        top:10,
        left: 30
    },
})

export default MessagesScreen;