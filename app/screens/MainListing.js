import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";
import AppText from "../components/AppText";
import Card from "../components/Card";
import FixedScreen from "../components/FixedScreen";
import listingApi from "../api/listings";
import ListingItem from "../components/ListingItem";
import routes from "../components/Nav/routes";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function MainListing({ navigation }) {
  useEffect(() => {
    loadListings();
  }, []);
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingApi.getListings);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <FixedScreen style={styles.container}>
        {error && (
          <>
            <Text style={styles.text}>
              Couldn't open listings please reload the page
            </Text>
            <AppButton title="Reload" onPress={loadListings} />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              price={"$" + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </FixedScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.line,
  },
  img: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  details: {
    padding: 10,
  },
  sub: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondry,
    marginVertical: 5,
  },
  user: {
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: "#000",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
});

export default MainListing;
