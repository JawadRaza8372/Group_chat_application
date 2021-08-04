import React,{useEffect,useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {auth, db} from "../config/firebase"
import { GiftedChat } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MaterialCommunityIcons} from "@expo/vector-icons";

const ChatScreen = ({navigation}) => {
    const [chatData, setchatData] = useState(null)
    const [userData, setuserData] = useState(null)

    useEffect(() => {
        db.collection('chat').onSnapshot((snapshot) => {
            const messagesFirestore = snapshot.docs.map(( doc ) => {
                    const message = doc.data()
                    return { ...message, createdAt: message.createdAt.toDate() }
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                setchatData(messagesFirestore)
        }) 
    },[])
    let senfunction=async(msg)=>{
        let save=msg.map((m)=>db.collection('chat').add(m))
       await Promise.all(save)
    }
 
    let getuser=async()=>{
        const user =await AsyncStorage.getItem('currentuser')
        if(user != null) {
            setuserData((prevalue)=>{return {...prevalue,name:JSON.parse(user)}})
        }
        else{
            console.log("empty")
        }
             
    }
   
    let getuserid=async()=>{
        const userid =await AsyncStorage.getItem('currentuserid')

        if(userid != null) {
            setuserData((prevalue)=>{return {...prevalue,_id:JSON.parse(userid)}})

        }
        else{
            console.log("empty")
        }
             
    }
    let saveuserData=async(userid,username,password)=>{
     
        try {
            const jsonValue0 = JSON.stringify(userid)
          const jsonValue1 = JSON.stringify(username)
          const jsonValue2 = JSON.stringify(password)
           AsyncStorage.setItem('currentuserid', jsonValue0);
           AsyncStorage.setItem('currentuser', jsonValue1);
           await AsyncStorage.setItem('currentpassword', jsonValue2);
           console.log("saved")
        } catch (e) {
          // saving error
        }
      }
    useEffect(() => {
        getuserid()
      }, [])
    useEffect(() => {
        getuser()
      }, [])
 
let logoutfunction=()=>{
    saveuserData("","","")
    auth.signOut()
    navigation.navigate("auth")
}
    return (<>
        {userData && <><GiftedChat messages={chatData} user={userData} onSend={senfunction} /><TouchableOpacity onPress={logoutfunction} style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"red",position:"absolute",top:50,right:10,width:60,height:60,borderRadius:30}}>
        <MaterialCommunityIcons name="logout" size={30} color="white" />
        </TouchableOpacity></>}
        {!userData && <View style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <Text>Loading</Text>
        </View>}

   </> )
}

export default ChatScreen
