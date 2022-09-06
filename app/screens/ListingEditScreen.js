import { Formik } from 'formik';
import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppFormImage from '../components/AppFormImage';
import AppFormPicker from '../components/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FixedScreen from '../components/FixedScreen';
import SubmitButton from '../components/SubmitButton';
import colors from '../config/colors';
import * as Location from "expo-location"
import useLocation from '../hooks/useLocation';
import listingApi from "../api/listings";
import UploadScreen from './UploadScreen';
import { create } from 'apisauce'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "please select Atleast one image")
});
const categor = [
    {label: "Furniture", value: 1, backgroundColor: "#fc5c65" ,icon: "floor-lamp"},
    {label: "Cars", value: 2, backgroundColor: "#fd9644", icon: "car"},
    {label: "clothings", value: 3, backgroundColor:"#2bcbba", icon: "shoe-heel"},
    {label: "Cameras", value: 4, backgroundColor:"#fed330", icon: "camera"},
    {label: "Games", value: 5, backgroundColor:"#26de81", icon: "cards"},
    {label: "Sports", value: 6, backgroundColor:"#45aaf2", icon: "basketball"},
    {label: "Movies & Music", value: 7, backgroundColor:"#4b7bec", icon: "headphones"},
    {label: "Books", value: 8, backgroundColor:"#a55eea", icon: "book-open-variant"},
    {label: "Others", value: 9, backgroundColor:"#778ca3", icon: "application"},

]
function ListingEditScreen(props) {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingApi.addListing(
          { ...listing, location },
          (progress) => setProgress(progress)
        );
    
        if (!result.ok) {
          setUploadVisible(false);
         // return alert("Could not save the listing");
        }
    
        resetForm();
      };
    return (

        <FixedScreen style={styles.container}>
          <UploadScreen progress={progress} visible={uploadVisible} onDone={() => setUploadVisible(false)}/>
           <Formik
           initialValues= {{ title: '' ,price: '', description: '', category: null, images: []}}
           onSubmit={handleSubmit}
           validationSchema={validationSchema} >
               {() => (  
                   <>
                   <AppFormImage name="images"/>
                   <AppFormField 
                   name="title" 
                   placeholder="Title"
                   maxLength={255}
                   />
                    <AppFormField 
                   name="price" 
                   maxLength={8}
                   placeholder="Price"
                   keyboardType="numeric"
                   style={styles.pricing}
                   width={120}
                   />
                    <AppFormPicker
                   name="category" 
                   items={categor}
                   numberOfCols={3}
                   placeholder="Category"
                   PickerItemsComponent={CategoryPickerItem}
                   width="50%"
                   />
                   <AppFormField 
                   name="description" 
                   numberOfLines={3}
                   maxLength={255}
                   multiline
                   placeholder="Description"
                   />
                   <SubmitButton title="Post"/>
                   </>   
                    ) }
                   
                   
                   </Formik>

          
       </FixedScreen>
    );
}

export default ListingEditScreen;
const styles = StyleSheet.create({
     container:{
            padding: 9
        },
        pricing:{
            width: "30%"
        },
        categorys:{
            width: "45%"
        }
       
})