import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

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

    const stops = [
        {
            title : "Central Chalmers Street",
            latlng : {latitude: -33.8842090436081, longitude: 151.20764895037},
            colour : "#426dc3",        
        },
        {
            title : "Surry Hills",
            latlng : {latitude: -33.8880728776425, longitude: 151.211901053014},
            colour: "#c34242"
        },
        {
            title : "Moore Park",
            latlng : {latitude: -33.8937517650218, longitude: 151.221807102762},
            colour: "#c34242"
        },

        {
            title : "Royal Randwick",
            latlng : {latitude: -33.9051772334994, longitude: 151.228854533418},
            colour: "#c34242"
        },

        {
            title : "Wansey Road",
            latlng : {latitude: -33.91052598086, longitude: 151.235224601034},
            colour: "#c34242"
        },

        {
            title : "UNSW High Street",
            latlng : {latitude: -33.916335208379, longitude: 151.235544924782},
            colour: "#498c3a"
        },
    ]

    return (
      <View style={travelStyles.tcontainer}>
        
        <View style={travelStyles.dheader}>
            <Ionicons style={travelStyles.fStar} name={'ios-star-outline'} size={25}></Ionicons>
            <Text style={travelStyles.dheaderTitle}>Central Chalmers Street to UNSW High St</Text>
        </View>

        <MapView style={travelStyles.mapStyle}
            initialRegion={{
                latitude: -33.8842090436080,
                longitude: 151.20764895036,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
            }}

            showsUserLocation={true}
        >

        {stops.map(marker => (
            <Marker
            coordinate={marker.latlng}
            title={marker.title}
            >
                <Ionicons
                    name={"ios-pin"} 
                    size={40} 
                    color={marker.colour}/>
            </Marker>
        ))}
        
        </MapView>

        <ScrollView style={{width: '100%'}} contentContainerStyle={travelStyles.tripsContainer} showsVerticalScrollIndicator={false}>
            <View style={travelStyles.lightTrip}>
                <View>
                    <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                    <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                </View>
                <TouchableOpacity style={travelStyles.tripButton}>
                    <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                </TouchableOpacity>
            </View>
            <View style={travelStyles.darkTrip}>
                <View>
                    <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                    <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                </View>
                <TouchableOpacity style={travelStyles.tripButton}>
                    <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                </TouchableOpacity>
            </View>
            <View style={travelStyles.lightTrip}>
                <View>
                    <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                    <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                </View>
                <TouchableOpacity style={travelStyles.tripButton}>
                    <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                </TouchableOpacity>
            </View>
            <View style={travelStyles.darkTrip}>
                <View>
                    <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                    <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                </View>
                <TouchableOpacity style={travelStyles.tripButton}>
                    <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                </TouchableOpacity>
            </View>
            <View style={travelStyles.lightTrip}>
                <View>
                    <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                    <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                </View>
                <TouchableOpacity style={travelStyles.tripButton}>
                    <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                </TouchableOpacity>
            </View>
            <View style={travelStyles.darkTrip}>
                <View>
                    <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                    <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                </View>
                <TouchableOpacity style={travelStyles.tripButton}>
                    <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                </TouchableOpacity>
            </View>
            <View style={travelStyles.lightTrip}>
                <View>
                    <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                    <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                </View>
                <TouchableOpacity style={travelStyles.tripButton}>
                    <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                </TouchableOpacity>
            </View>
            <View style={travelStyles.darkTrip}>
                <View>
                    <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                    <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                </View>
                <TouchableOpacity style={travelStyles.tripButton}>
                    <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                </TouchableOpacity>
            </View>
            <View style={travelStyles.lightTrip}>
                <View>
                    <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                    <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                </View>
                <TouchableOpacity style={travelStyles.tripButton}>
                    <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                </TouchableOpacity>
            </View>
            <View style={travelStyles.darkTrip}>
                <View>
                    <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                    <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                </View>
                <TouchableOpacity style={travelStyles.tripButton}>
                    <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                </TouchableOpacity>
            </View>
            <View style={travelStyles.lightTrip}>
                <View>
                    <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                    <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                </View>
                <TouchableOpacity style={travelStyles.tripButton}>
                    <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                </TouchableOpacity>
            </View>
            <View style={travelStyles.darkTrip}>
                <View>
                    <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                    <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                </View>
                <TouchableOpacity style={travelStyles.tripButton}>
                    <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                </TouchableOpacity>
            </View>
        </ScrollView>

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
        width: '100%',

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
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        
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
        fontSize: 20,

        marginLeft: 'auto',
        marginRight: 'auto',

        color: '#242424',

    },

    fStar: {

        marginLeft: 15,
        marginRight: -25,
        
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

    },

    tripsContainer: {

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        paddingBottom: 310,
        width: "100%",

    },

    lightTrip: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        
        height: 60,
        width: '100%',

        backgroundColor: '#ececec',

    },

    darkTrip: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        
        height: 60,
        width: '100%',

        backgroundColor: '#d2d2d2',

    },

    timestamp: {

        fontFamily: 'Roboto_400Regular',
        fontSize: 24,

    },

    duration: {

        fontFamily: 'Roboto_400Regular',
        color: '#555',
        fontSize: 16,

    },
    
    tripButton: {

        width: 60,
        height: 60,
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    
        backgroundColor: '#c34242',

    }

});