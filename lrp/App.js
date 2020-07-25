import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppLoading } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logo from './assets/logo.png';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

const Stack = createStackNavigator();

function HomeScreen() {
  return (

    <View style={styles.container}>
        
        {/* Logo Container */}
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImageContainer} />
          <Text style={styles.logoText}>
            LIGHT {"\n"}
            RAIL+
          </Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        {/* Log In Button */}
        <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={styles.button}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>

        <StatusBar style="light" />

    </View>

  );
}

export default function App() {

  // Handling Fonts
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      
      <Stack.Navigator


      screenOptions={{
        headerShown: false,
      }}

      >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#c34242',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    height: '65%',
  },

  button: {

    width: 250,
    height: 55,

    margin: 10,

    borderRadius: 5000,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#ececec',
    shadowOffset:{  width: 0,  height: 4,  },
    shadowColor: 'black',
    shadowOpacity: 0.25,
  },

  buttonText: {
    color: '#c34242',
    fontSize: 28,
    fontFamily: 'Roboto_700Bold',
  },

  logoImageContainer: {
    width: 150,
    height: 150,
  },

  logoText: {
    fontSize: 48,
    color: '#ececec',
    fontFamily: 'Roboto_700Bold',

    shadowOffset:{  width: 0,  height: 4,  },
    shadowColor: 'black',
    shadowOpacity: 0.25,
  }

});
