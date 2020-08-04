import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Image Imports
import logo from '../assets/logo.png';

// Screen code
export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {
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
                onPress={() => this.props.navigation.navigate('SignUp')}
                style={styles.button}>
                <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>

                {/* Log In Button */}
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('LogIn')}
                style={styles.button}>
                <Text style={styles.buttonText}>LOG IN</Text>
                </TouchableOpacity>

                <StatusBar style="light" />

            </View>
        );
    }

}

// Stylesheet
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
