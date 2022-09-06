//import { StatusBar } from 'expo-status-bar';
import { Button, Image ,StyleSheet, Text, View,Platform ,StatusBar , Alert, SafeAreaView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import React, {useEffect, useState} from 'react';
import FixedScreen from '../components/FixedScreen';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Link = () => {
  const navigation =useNavigation();
  return (
    <Button title='click' onPress={() => navigation.navigate("TweetsDetails")}/>
)}

const Tweets = ({navigation}) => (
  <FixedScreen>
    <Text>
      Tweets
    </Text>
    <Button title='click' onPress={() => navigation.navigate("TweetsDetails", {id :1, name: "fwk"})}/>
  </FixedScreen>
);

const TweetsDetails = ({route}) => (
  // if we are in child compnent and we don't have access to the route prop we use useRoute
  <FixedScreen>
    <Text>
      Tweet Details {route.params.id}
    </Text>
  </FixedScreen>
)
const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen name='TweetsDetails' component={TweetsDetails} options={({route}) => ({ title: route.params.name})}/>
  </Stack.Navigator>
)

const Account = () => (
  <FixedScreen>
    <Text>Account Page</Text>
  </FixedScreen>
)
const Tab = createBottomTabNavigator();
const TabNav = () => (
  <Tab.Navigator tabBarOptions ={{
     activeBackgroundColor : "tomato",
     activeTintColor: "white",
     inactiveBackgroundColor: "#eee",
     inactiveTintColor: "black",
  }}>
    <Tab.Screen name="Feed" component={StackNavigator} options= {{
      tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='home' size={size} color={color}/>
    }}/>
    <Tab.Screen name="Account" component={Account}/>
  </Tab.Navigator>
)


export default function Test(){
  
  return (
      <NavigationContainer>
        
        <TabNav/>
      </NavigationContainer>
    )
}


