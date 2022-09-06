import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AccountScreen from '../../screens/AccountScreen';
import MessagesScreen from '../../screens/MessagesScreen';
import routes from './routes';


const Stack = createNativeStackNavigator();
const AccountNav = () => (
    <Stack.Navigator   >
        <Stack.Screen name= {routes.ACCOUNT} component={AccountScreen} options={{headerShown: false}}/>
        <Stack.Screen name={routes.MESSAGING} component={MessagesScreen} />
    </Stack.Navigator>
)

export default AccountNav;