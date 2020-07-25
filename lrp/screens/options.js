import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Screen code
export default class OptionsScreen extends React.Component {

    static navigationOptions = {
        title: 'Options',
    };

    render() {
        return (
            <View style={styles.container}>
                
                {/* Logo Container */}
                <Text style={{color: 'black',}}>
                    Options Screen               
                </Text>

                <StatusBar style="dark" />

            </View>
        );
    }

}

// Stylesheet
const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#ececec',
    alignItems: 'center',
    justifyContent: 'center',
},

});
