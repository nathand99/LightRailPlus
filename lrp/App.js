import 'react-native-gesture-handler';
import React from 'react';
import { AppLoading } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// IMPORT DIFFERENT SCREENS
import HomeScreen from './screens/homescreen.js';
import LogInScreen from './screens/login.js';
import SignUpScreen from './screens/signup.js';
import MainScreen from './screens/main.js';
import PaymentDetailsScreen from './screens/paymentdetails.js';
import CardTypeScreen from './screens/cardtype.js';



// IMPORT THE FONTS THAT THIS PROJECT USES
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

// CREATE THE NAVIGATION STACK
const Stack = createStackNavigator();

// EXPORT THE APP
export default function App() {

  // HANDLING FONTS
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  // ENSURE FONTS ARE LOADED
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // EXPORT A NAVIGATION CONTAINER
  return (

    <NavigationContainer>
      
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetailsScreen} />
        <Stack.Screen name="CardType" component={CardTypeScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );

}