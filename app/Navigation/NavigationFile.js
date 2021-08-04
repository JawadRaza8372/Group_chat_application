import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import AuthScreen from '../Screens/AuthScreen';
import ChatScreen from '../Screens/ChatScreen';
import SignUpScreen from '../Screens/SignUpScreen';
const Stack = createStackNavigator();

const NavigationFile = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="auth" component={AuthScreen} options={{headerShown: false}} />
        <Stack.Screen name="signup" component={SignUpScreen} options={{headerShown: false}} />
        <Stack.Screen name="chat" component={ChatScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default NavigationFile
