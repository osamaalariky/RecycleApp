import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AccountScreen from "../../screens/AccountScreen";
import Listing from "../../screens/Listing";
import ListingEditScreen from "../../screens/ListingEditScreen";
import MainListing from "../../screens/MainListing";
import AccountNav from "./AccountNav";
import FeedNav from "./FeedNav";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavButton from "./NavButton";
import routes from "./routes";
import expoPushTokens from "../../api/expoPushTokens";
import * as Notifications from 'expo-notifications';
import * as Permissions from "expo-permissions";
import navigation from "./rootNavigation";
import useNotifications from "../../hooks/useNotifications";

const Tab = createBottomTabNavigator();
const TabNav = () => {
  useNotifications()
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={routes.FEED}
        component={FeedNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NavButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT_NAV}
        component={AccountNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
