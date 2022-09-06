import React, {useState} from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { Image } from "react-native-expo-image-cache";
import AppText from "../components/AppText";
import ListingItem from "../components/ListingItem";
import colors from "../config/colors";
import * as Yup from "yup";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import messageApi from "../api/messaging";
import UploadScreen from "./UploadScreen";
import * as Notifications from 'expo-notifications';

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

function Listing({ route, navigation }) {
  const listing = route.params;
 
 const handleSubmit = async ({message}, {restForm}, delay) => {
   keyboard.dismiss();
   const result = await messageApi.send(message, listing.id
   )
   if (!result.ok) {
      console.log("Error", result)
      return Alert.alert("Error", "Could not send the message to the server" )
   }
   restForm();
   
   Notifications.scheduleNotificationAsync({
    content: {
      title: 'Look at that notification',
      body: "I'm so proud of myself!",
    },
    trigger:  delay == '' ? null : {seconds: delay}
  });

   
 
  };
  return (
    <KeyboardAvoidingView 
    behavior="position"
   // style={{flex: 1}}
    keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 200}
    >
    <View>
      <Image
        style={styles.img}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{listing.title} </Text>
        <Text style={styles.sub}>${listing.price}</Text>
        <View>
          <View style={styles.user}>
            <ListingItem
              image={require("../assets/yahala.jpg")}
              title="Os Adel"
              subtitle="5 Listing"
              onPress={() => navigation.navigate("Message")}
            />
          </View>
        </View>
      </View>
      <AppForm
        initialValues={{ message: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="Message"
          numberOfLines={3}
          maxLength={255}
          multiline
          placeholder="Message"
          width="80%"
        />
        <SubmitButton
        title="Send Message"
        />
      </AppForm>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  details: {
    padding: 20,
  },
  sub: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondry,
    marginVertical: 10,
  },
  user: {
    marginVertical: 30,
  },
});
export default Listing;
