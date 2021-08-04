import React from 'react'
import { View, Text } from 'react-native'
import Forms from "./Forms/Forms"
import InputFieldForm from './Forms/InputFieldForm'
import FormSubmitButton from './Forms/FormSubmitButton'
import * as Yup from "yup";

const SignUpForm = ({SignUpForm}) => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(6).label("Password"),
        confirm: Yup.string().required().min(6).label("Confirm"),
      });
      let onSubmitFun=(values,onSubmitProps)=>{
      if(values.confirm !== values.password){
          alert("Please Enter Same Password")
      }
      else{
               SignUpForm(values,onSubmitProps)   
      }
      }
    return (
        <Forms
     initialValues={{email: "", password: "",confirm:""}}
        onSubmit={onSubmitFun}
        validationSchema={validationSchema}
     >
      <InputFieldForm iconName="email" name="email" placeholder="Email" autoCompleteType="off" autoCorrect={false} autoCapitalize="none" />
      <InputFieldForm iconName="lock" name="password" placeholder="Password" secureTextEntry={true} autoCompleteType="off" autoCorrect={false} autoCapitalize="none"/>
      <InputFieldForm iconName="lock" name="confirm" placeholder="Confirm" secureTextEntry={true} autoCompleteType="off" autoCorrect={false} autoCapitalize="none"/>
      <FormSubmitButton title="SignUp"/>
     </Forms>
    )
}

export default SignUpForm
