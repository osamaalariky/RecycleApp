import { useFormikContext } from 'formik';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ErrorMessage from './ErrorMessage';
import ImageInputList from './ImageInputList';

function AppFormImage({name}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    const imgUries = values[name];
    const handleAdd = uri => {
        setFieldValue(name, [...imgUries, uri])
      }
     
      const handleDelete = uri => {
        setFieldValue(name, imgUries.filter(imgUri => imgUri !== uri));
      }
  return (
      <>

      <ImageInputList 
      imageUris={imgUries}
      onAddImg={handleAdd}
      onRemoveImg={handleDelete}
      />
     <ErrorMessage error={errors[name]} visible={touched[name]} />
      
      </>
  );
}



export default AppFormImage;