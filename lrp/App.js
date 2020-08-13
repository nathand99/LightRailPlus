import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
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
        screenOptions={{

          headerBackTitleVisible: false,
          headerLeft: () => (<View/>),
  
          headerStyle: {

              backgroundColor: '#c34242',
              height: 115,
              
              shadowOffset:{ width: 0,  height: 4 },
              shadowColor: 'black',
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 1,

              
          },

          headerTintColor: '#ececec',

          headerTitleStyle: {

              fontFamily: 'Roboto_700Bold',
              fontSize: 32,
              textTransform: "uppercase",

              shadowOffset:{ width: 0,  height: 4 },
              shadowColor: 'black',
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 1,
          },
          
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Log In" component={LogInScreen} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Payment Details" component={PaymentDetailsScreen} />
        <Stack.Screen name="Card Type" component={CardTypeScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );

}