import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View,LogBox } from 'react-native';
import NavigationFile from './app/Navigation/NavigationFile';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { auth } from './app/config/firebase';
export default function App() {
  LogBox.ignoreLogs(['Setting a timer']);
  let saveuserData=async(userid)=>{
     
    try {
      const jsonValue = JSON.stringify(userid)
      await AsyncStorage.setItem('currentuserid', jsonValue);
    } catch (e) {
      // saving error
    }
  }
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
        if (user) {
         saveuserData(user.uid)
        } else {
          saveuserData("")

      }});

      
},[]); 
  return (
   <NavigationFile/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
