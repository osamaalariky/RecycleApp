//import { StatusBar } from 'expo-status-bar';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Alert,
  SafeAreaView,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import React, { useEffect, useState } from "react";
import ViewImg from "./app/screens/ViewImg";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppButton from "./app/components/AppButton";
import ViewMenu from "./app/screens/ViewMenu";
import Listing from "./app/screens/Listing";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import MainListing from "./app/screens/MainListing";
import AppTextInput from "./app/components/AppTextInput";
import Tempsol from "./app/screens/Tempsol";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import FixedScreen from "./app/components/FixedScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./app/config/colors";
import ImageInputList from "./app/components/ImageInputList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Test from "./app/screens/test";
import LoginNav from "./app/components/Nav/LoginNav";
import TabNav from "./app/components/Nav/BottomTabNav";
import navTheme from "./app/components/Nav/navTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import AuthStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";
import {navigationRef} from "./app/components/Nav/rootNavigation"
export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const restoreUser = async () => {
    const user = await AuthStorage.getUser();
    if (user) setUser(user)
  };
  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={console.warn}/>
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navTheme}>
        {user ? <TabNav /> : <LoginNav />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
