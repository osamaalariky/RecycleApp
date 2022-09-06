import React, { useState, useContext } from "react";
import { Image, StyleSheet, Text, Platform } from "react-native";
import AppButton from "../components/AppButton";
import * as Yup from "yup";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import FixedScreen from "../components/FixedScreen";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import authApi from "../api/auth";
import jwtDecode from "jwt-decode";
import AppForm from "../components/AppForm"
import AuthContext from "../auth/context";
import AuthStorage from "../auth/storage";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function LoginScreen(props) {
  const auth = useAuth();
  const [loginFalied, setloginFalied] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login( email, password );
    if (!result.ok) return setloginFalied(true);
    else setloginFalied(false);
    auth.logIn(result.data)
  };

  return (
    
    <FixedScreen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
          <ErrorMessage
        error="Invalid email and/or password."
        visible={loginFalied}
      />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Login" />
          
      </AppForm>
    </FixedScreen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    padding: 9,
  },
  text: {
    fontSize: 18,
    color: "red",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
});
export default LoginScreen;
