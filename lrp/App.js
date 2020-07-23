import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logo from './assets/logo.png';

const Stack = createStackNavigator();

function HomeScreen() {
  return (

    <View style={styles.container}>
        
        {/* Logo Container */}
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImageContainer} />
          <Text style={styles.logoText}>
            Light {"\n"}
            Rail +
          </Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Log In Button */}
        <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />

    </View>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="Note to Self: Get rid of this bar" component={HomeScreen} />
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
  },

  buttonText: {
    color: '#c34242',
    fontSize: 28,
  },

  logoImageContainer: {
    width: 150,
    height: 150,
  },

  logoText: {
    fontSize: 48,
    color: '#ececec',
  }

});
