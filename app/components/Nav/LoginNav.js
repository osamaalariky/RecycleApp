import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';
import routes from './routes';


const Stack = createNativeStackNavigator();
const StackNav = () => (
    <Stack.Navigator>
        <Stack.Screen name={routes.WELCOME_SCREEN} component={WelcomeScreen} options={{
            headerShown: false
        }}/>
        <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
        <Stack.Screen name={routes.REGISTER} component={RegisterScreen}/>
    </Stack.Navigator>
)


export default StackNav;