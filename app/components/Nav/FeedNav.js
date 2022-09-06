import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Listing from '../../screens/Listing';
import MainListing from '../../screens/MainListing';
import routes from './routes';


const Stack = createNativeStackNavigator();
const StackNav = () => (
    <Stack.Navigator  screenOptions={{headerShown: false, presentation: "modal"}} >
        <Stack.Screen name= {routes.LISTING} component={MainListing}/>
        <Stack.Screen name={routes.LISTING_DETAILS} component={Listing}/>
    </Stack.Navigator>
)

export default StackNav;