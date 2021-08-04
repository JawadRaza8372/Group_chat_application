import React,{useEffect,useState} from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDimensions } from '@react-native-community/hooks';
import LoginForm from '../Components/LoginForm';
import { auth } from '../config/firebase';
import { MaterialCommunityIcons} from "@expo/vector-icons";

const AuthScreen = ({navigation}) => {
    const [checkUser, setcheckUser] = useState(null)
    const [username, setusername] = useState("")
    const [fuserEmail, setfuserEmail] = useState(null)
    const [fuserPassword, setfuserPassword] = useState(null)

    const [errMessg, seterrMessg] = useState(null)

    useEffect(() => {
       setTimeout(()=>seterrMessg(null),5000)
    }, [errMessg])
console.log(username)
    let getuser=async()=>{
        const user =await AsyncStorage.getItem('currentuser')
        if(user != null) {
            setfuserEmail(JSON.parse(user))        }
        else{
            console.log("empty")
        }
             
    }
    let getuserpass=async()=>{
        const userpassword =await AsyncStorage.getItem('currentpassword')

        if(userpassword != null) {
            setfuserPassword(JSON.parse(userpassword))
        }
        else{
            console.log("empty")
        }
             
    }
    let sheight=useDimensions().screen.height;
    let swidth=useDimensions().screen.width;

    useEffect(() => {
      getuser()
      getuserpass()
    }, [])
    useEffect(() => {
        if(fuserPassword && fuserEmail){
            let data={email:fuserEmail,password:fuserPassword}
            loginFunction(data)
        }
      }, [fuserEmail,fuserPassword])

   
 
          let continueButton=()=>{
            navigation.navigate("chat")
          }
          let saveuserData=async(username,password)=>{
     
            try {
              const jsonValue = JSON.stringify(username)
              const jsonValue2 = JSON.stringify(password)
               AsyncStorage.setItem('currentuser', jsonValue);
               await AsyncStorage.setItem('currentpassword', jsonValue2);
               console.log("saved")
            } catch (e) {
              // saving error
            }
          }
    let loginFunction=(val,onSubmitProps)=>{
        auth.signInWithEmailAndPassword(
            val.email,
             val.password
           ).then(() => {
            saveuserData(val.email,val.password)
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
            navigation.navigate("chat")
           }).catch((err) => {
             seterrMessg(err.message);
           });
      
    }

    return (<KeyboardAvoidingView style={{flex:1}}>
    <ScrollView contentContainerStyle={{flex:1}}>
        <View style={{width:swidth,height:sheight,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,width:"90%",height:"50%",borderWidth:2,borderRadius:20,borderColor:"black"}}>
        <Text style={{color:"black",fontSize:18,fontWeight:"bold"}}>Welcome To Group Chat App.</Text>
        <LoginForm loginFormFun={loginFunction}/>
        <TouchableOpacity style={{marginTop:25,padding:10}} onPress={()=>navigation.navigate("signup")}>
<Text style={{fontSize:16}}>Don't have an account ??? Create One</Text>
        </TouchableOpacity>
        </View>
        {errMessg&& <View style={{backgroundColor:"red",padding:20,width:"90%",borderRadius:20,position:"absolute",bottom:70}}>
        <Text style={{color:"white",fontWeight:"bold",fontSize:18}}><MaterialCommunityIcons name="radioactive" size={20} color="white" /> Error</Text>

        <Text style={{color:"white",fontWeight:"bold"}}>{errMessg}</Text></View>}
        </View> 
        </ScrollView>
    </KeyboardAvoidingView>)
}

export default AuthScreen
