import React,{useState,useEffect,useCallback} from 'react'
import { View, Text,Image, KeyboardAvoidingView } from 'react-native'
import { MaterialCommunityIcons} from "@expo/vector-icons";
import { useDimensions } from '@react-native-community/hooks';

const SplashScreen = ({navigation}) => {
   

    const [newName, setnewName] = useState("");
    let sheight=useDimensions().screen.height;
    let swidth=useDimensions().screen.width;

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('auth');
          }, 4000);
       
    }, [])
    return (
       
        
      
         <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",width:swidth,height:sheight}}>
         <KeyboardAvoidingView style={{isplay:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",padding:10,width:"100%"}}>
         <MaterialCommunityIcons style={{alignSelf:"center"}} name='wechat' color="black" size={72} />
<Text style={{color:`black`,marginLeft:"auto",marginRight:"auto",textTransform:"capitalize", fontWeight: "bold",fontSize:40}}>Group Chat App.</Text>
 
         </KeyboardAvoidingView>
       
         </View>   
    )
}

export default SplashScreen