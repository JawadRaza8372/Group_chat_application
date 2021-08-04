  
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

function MyButton({onPress,varient,children}) {
    return (
       <TouchableOpacity onPress={onPress} style={{marginVertical:5,backgroundColor:`${varient}`,borderRadius:25,justifyContent:"center",alignItems:"center",padding:15,width:"90%",alignSelf:"center"}}>
{children}
       </TouchableOpacity>
    )
}

export default MyButton;