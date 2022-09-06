import React from 'react';
import { first } from 'react-native'
import {useFormikContext} from "formik"
import Picker from './Picker';
import ErrorMessage from './ErrorMessage';
function AppFormPicker({ items, name, numberOfCols, PickerItemsComponent ,placeholder, style, width }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
  
    return (
      <>
        <Picker
          items={items}
          numberOfCols={numberOfCols}
          onSelectItem={(item) => setFieldValue(name, item)}
          PickerItemsComponent={PickerItemsComponent}
          placeholder={placeholder}
          selectItem={values[name]}
          width={width}
          
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </>
    );
  }

export default AppFormPicker;