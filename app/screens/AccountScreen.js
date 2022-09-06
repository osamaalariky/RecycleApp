import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native'
import AuthContext from '../auth/context';
import EditIcon from '../components/EditIcon';
import FixedScreen from '../components/FixedScreen';
import ListingItem from '../components/ListingItem';
import ListSeparators from '../components/ListSeparators';
import routes from '../components/Nav/routes';

import Tabs from '../components/Tabs';
import colors from '../config/colors';
import AuthStorage from "../auth/storage"
import useAuth from '../auth/useAuth';

const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondry,
      },
      targetScreen: routes.MESSAGING,
    },
  ];
function AccountScreen({navigation}) {
  const {user, logOut} = useAuth();
  
      return (
        <FixedScreen style={styles.container}>
            <View style={styles.account}>
            <ListingItem
            image = {require("../assets/yahala.jpg")}
            title = {user.name}
            subtitle= {user.email}
            />  
            </View>
            <View style={styles.account}>
                
            <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListSeparators}
          renderItem={({ item }) => (
            <ListingItem
              title={item.title}
              IconComponent={
                <EditIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
        </View>
                 <ListingItem
        title="Log Out"
        IconComponent={<EditIcon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
    
        </FixedScreen>
    );
}

const styles = StyleSheet.create({
   container:{
       backgroundColor: colors.line,
   
   },
    account:{
        marginVertical: 20
    },
    taps:{
        marginBottom: 25
    }
})
export default AccountScreen;