import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-maps';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function TravelMain({ navigation }) {
    return (
      <ScrollView contentContainerStyle={travelStyles.tcontainer} showsVerticalScrollIndicator={false}>
        
        <View style={travelStyles.theader}>
            <Text style={travelStyles.theaderTitle}>NEW TRIP</Text>
        </View>

        <View style={travelStyles.destinationContainer}>
            <Text style={travelStyles.destinationHeader}>From</Text>
            <View style={travelStyles.textBoxContainer}>
                <TextInput style={travelStyles.destinationTextBox}/>
                <Ionicons style={{marginTop: 3,}} name={"md-locate"} size={25} color={"#c34242"}/>
            </View>

            <Text style={travelStyles.destinationHeader}>TO</Text>
            <View style={travelStyles.textBoxContainer}>
                <TextInput style={travelStyles.destinationTextBox}/>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Timetable')}
                style={travelStyles.button}>
                <Text style={travelStyles.buttonText}>VIEW TIMETABLE</Text>
            </TouchableOpacity>

        </View>

        <View style={travelStyles.theader}>
            <Text style={travelStyles.theaderTitle}>FAVOURITES</Text>
        </View>
        <View style={travelStyles.tMenu}>
            <Text style={travelStyles.tmenuText}>You haven't favourited a trip yet!</Text>
        </View>

        <View style={travelStyles.theader}>
            <Text style={travelStyles.theaderTitle}>RECENTS</Text>
        </View>
        <View style={travelStyles.tMenu}>
            <Text style={travelStyles.tmenuText}>You haven't been on a trip yet!</Text>
        </View>

        <StatusBar style="light" />

      </ScrollView>
    );
}

function TravelTimetable() {
    return (
      <View style={travelStyles.tcontainer}>
        
        <View style={travelStyles.dheader}>
            <Text style={travelStyles.dheaderTitle}>A to B</Text>
        </View>

        <MapView style={travelStyles.mapStyle}
            initialRegion={{
                latitude: -33.884106,
                longitude: 151.2081233,
                latitudeDelta: 0.006,
                longitudeDelta: 0.006,
            }}

            showsUserLocation={true}
        />

      </View>
    );
}

  

// Screen code
export default class TravelScreen extends React.Component {

    static navigationOptions = {
        title: 'Travel',
    };

    render() {
        return (
    
            <NavigationContainer independent={true}>
                <Stack.Navigator

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
                    <Stack.Screen name="Travel" component={TravelMain} />
                    <Stack.Screen name="Timetable" component={TravelTimetable} />
                </Stack.Navigator>
            </NavigationContainer>
      
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


const travelStyles = StyleSheet.create({

    tcontainer: {

        display: 'flex',
        alignItems: 'center',

        backgroundColor: '#ececec',

    },

    destinationContainer: {

        display: 'flex',
        
        backgroundColor: '#ececec',
        padding: '5%',
        width: '100%',

    },

    destinationHeader: {

        fontFamily: 'Roboto_700Bold',
        fontSize: 24,
        textTransform: "uppercase",

        color: "#c34242",

        paddingBottom: 10,

    },

    textBoxContainer: {
        
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        
        borderWidth: 2,
        borderColor: '#c34242',
        borderRadius: 4,
        
        width: '100%',
        height: 50,
        marginBottom: 25,
        
    },

    destinationTextBox: {

        height: 45,
        backgroundColor: '#eaeaea',


        padding: 10,
        fontSize: 20,

        width: '90%',

    },


    theader: {

        display: 'flex',
        justifyContent: 'center',
        
        paddingLeft: 12,
        
        height: 65,
        width: '100%',
        
        backgroundColor: "#c34242",

    },

    theaderTitle: {

        fontFamily: 'Roboto_700Bold',
        fontSize: 30,
        textTransform: "uppercase",

        shadowOffset:{ width: 0,  height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,
        zIndex: 1,

        color: '#ececec',

    },

    dheader: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        height: 60,
        width: '100%',
        
        backgroundColor: "#e5e5e5",

        shadowOffset:{ width: 0,  height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,
        zIndex: 1,

    },

    dheaderTitle: {

        fontFamily: 'Roboto_700Bold',
        fontSize: 28,


        color: '#242424',

    },

    mapStyle: {
        width: '100%',
        height: 250,
    },    

    button: {

        width: 300,
        height: 55,
    
        margin: 10,
    
        borderRadius: 5000,
    
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    
        backgroundColor: '#c34242',

    },
    
    buttonText: {
        color: '#ececec',
        fontSize: 28,
        fontFamily: 'Roboto_700Bold',
    },

    tMenu: {

        display: 'flex',
        justifyContent: 'center',
        
        paddingLeft: 12,
        
        height: 65,
        width: '100%',
        
        backgroundColor: "#ececec",

    }
    
    
});