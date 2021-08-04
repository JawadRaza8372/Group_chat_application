import React from 'react'
import { View, TextInput } from 'react-native'
import { MaterialCommunityIcons} from "@expo/vector-icons";

const InputField = ({iconName,placeholder,onBlur,defval,onChangeText,...otherProps}) => {
    return (
        <View style={{width:'90%',height:50,borderWidth:2,borderColor:'black',borderRadius:25,marginTop:25,display:'flex',overflow:"hidden",flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <View style={{marginLeft:30,width:'10%'}}>
        <MaterialCommunityIcons name={`${iconName}`} size={24} color="black" />
        </View>
        <View style={{marginLeft:10,width:'90%',height:'100%',overflow:'hidden'}}>

            <TextInput value={defval}  placeholder={`${placeholder}`} onBlur={onBlur} onChangeText={onChangeText} placeholderTextColor="black" style={{paddingLeft:5,paddingRight:5,height:'100%',width:"90%",color:"black",fontSize:18}} {...otherProps}/>
        </View>
        </View>
    )
}

export default InputField