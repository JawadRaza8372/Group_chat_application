import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import InputField from "../InputField";
function InputFieldForm({iconName,name,placeholder, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched,values } = useFormikContext();
  return (
    <>
    <InputField iconName={iconName} placeholder={placeholder} onBlur={()=>{setFieldTouched(name)}} defval={values[name]}   onChangeText={handleChange(name)} {...otherProps}/>
        <ErrorMessage visible={touched[name]} error={errors[name]}/>
     
    </>
  );
}

export default InputFieldForm;