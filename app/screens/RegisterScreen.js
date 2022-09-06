
import React, { useState } from 'react';
import { Image, StyleSheet,Text, Platform } from 'react-native'
import AppButton from '../components/AppButton';
import * as Yup from "yup";
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';
import FixedScreen from '../components/FixedScreen';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import usersApi from '../api/users';
import useAuth from '../auth/useAuth';
import authApi from "../api/auth";
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';
const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});
function RegisterScreen(props) {
    const registerApi = useApi(usersApi.register);
    const logInApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();
    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);
        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else{
                setError("An unexpected error occured");
                console.log(result)
            }
            return;
        }

        const {data: authToken} = await logInApi.request(
            userInfo.email,
            userInfo.password
        );
        auth.logIn(authToken)
    }
    return (
        <>
        
          <ActivityIndicator visible={registerApi.loading || logInApi.loading}/>
       
        <FixedScreen style={styles.container}>
           <Formik
            initialValues= {{ name: '' ,email: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema} >
                {() => (
                <>
                <ErrorMessage 
               error={error}
                visible={error}
                />
        <AppFormField
           autoCapitalize="words"
           autoCorrect={true}
           icon="account"
           placeholder="Name"
           name="name"
           />
        <AppFormField
           autoCapitalize="none"
           autoCorrect={false}
           icon="email"
           keyboardType="email-address"
           name= "email"
           placeholder="Email"
           textContentType="emailAddress"
           />
           <AppFormField
           autoCapitalize="none"
           autoCorrect={false}
           icon="lock"
           name= "password"
           placeholder="Password"
           secureTextEntry
           textContentType="password"
           />
           
          <SubmitButton title="Register"/>

                </>    
                ) }
           </Formik>
         
        
       </FixedScreen>
       </>
    );
}

const styles = StyleSheet.create({
    logo:{
        width: 80,
        height: 80,
        alignSelf: "center",
        marginBottom: 20,
        marginTop: 20
        },
        container:{
            padding: 9
        },
        text: {
            fontSize: 18,
            color: "red",
            fontFamily: Platform.OS === 'ios' ? "Avenir" : "Roboto",
        }
})


export default RegisterScreen;