import React from 'react'
import { View, Text } from 'react-native'
import Forms from "./Forms/Forms"
import InputFieldForm from './Forms/InputFieldForm'
import FormSubmitButton from './Forms/FormSubmitButton'
import * as Yup from "yup";

const LoginForm = ({loginFormFun}) => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
      });
      let onSubmitFun=(values,onSubmitProps)=>{
         loginFormFun(values,onSubmitProps)
      }
    return (
        <Forms
     initialValues={{email: "", password: "" }}
        onSubmit={onSubmitFun}
        validationSchema={validationSchema}
     >
      <InputFieldForm iconName="account" name="email" placeholder="Email" autoCompleteType="off" autoCorrect={false} autoCapitalize="none" />
      <InputFieldForm iconName="lock" name="password" placeholder="Password" secureTextEntry={true} autoCompleteType="off" autoCorrect={false} autoCapitalize="none"/>
      <FormSubmitButton title="Login"/>
     </Forms>
    )
}

export default LoginForm
