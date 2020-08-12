import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
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

function TravelTimetable({navigation}) {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
      setVisible(!visible);
    };  

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
            <Text style={travelStyles.dheaderTitle}>Central Chalmers Street to UNSW High St</Text>
        </View>

        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{width: 300, height: 350, borderRadius: 15, padding: 0,}}>
            <View style={travelStyles.trackworkHeaderContainer}>
                <Text style={travelStyles.trackworkHeader}>Trackwork Info</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 20, marginBottom: 15}}>
                    <Text style={travelStyles.trackworkInfo}>
                        As a result of the latest directives from the Australian Government around public gatherings, the L1 light rail services operating from 11pm (midnight on Friday) to 6am between Central Grand Concourse and The Star in both directions, have been suspended since 11pm Saturday 28 March 2020 until further notice. 
                        {"\n"}{"\n"}
                        From Friday 22 May, daily light rail services have fully resumed, with all services stopping at The Star between 6am and 11pm (midnight on Friday). This follows the gradual re-opening of The Star Sydney restaurants only.
                    </Text>
                </View>
            </ScrollView>
        </Overlay>


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

        <TouchableOpacity style={travelStyles.infobutton} onPress={toggleOverlay}>
            <Ionicons name={"md-alert"} size={50} color={"#fff"}/>
        </TouchableOpacity>

        </MapView>
        
        <View style={travelStyles.tripsScrollContainer}>
            <ScrollView style={{width: '100%'}} contentContainerStyle={travelStyles.tripsContainer} showsVerticalScrollIndicator={false}>
                <View style={travelStyles.lightTrip}>
                    <View>
                        <Text style={travelStyles.timestamp}>08:05 - 08:25</Text>
                        <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                    </View>
                    <TouchableOpacity style={travelStyles.tripButton} onPress={() => navigation.navigate('Trip')}>
                        <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                    </TouchableOpacity>
                </View>
                <View style={travelStyles.darkTrip}>
                    <View>
                        <Text style={travelStyles.timestamp}>08:15 - 08:35</Text>
                        <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                    </View>
                    <TouchableOpacity style={travelStyles.tripButton} onPress={() => navigation.navigate('Trip')}>
                        <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                    </TouchableOpacity>
                </View>
                <View style={travelStyles.lightTrip}>
                    <View>
                        <Text style={travelStyles.timestamp}>08:25 - 08:45</Text>
                        <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                    </View>
                    <TouchableOpacity style={travelStyles.tripButton} onPress={() => navigation.navigate('Trip')}>
                        <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                    </TouchableOpacity>
                </View>
                <View style={travelStyles.darkTrip}>
                    <View>
                        <Text style={travelStyles.timestamp}>08:35 - 08:55</Text>
                        <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                    </View>
                    <TouchableOpacity style={travelStyles.tripButton} onPress={() => navigation.navigate('Trip')}>
                        <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                    </TouchableOpacity>
                </View>
                <View style={travelStyles.lightTrip}>
                    <View>
                        <Text style={travelStyles.timestamp}>08:45 - 08:55</Text>
                        <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                    </View>
                    <TouchableOpacity style={travelStyles.tripButton} onPress={() => navigation.navigate('Trip')}>
                        <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                    </TouchableOpacity>
                </View>
                <View style={travelStyles.darkTrip}>
                    <View>
                        <Text style={travelStyles.timestamp}>08:55 - 09:05</Text>
                        <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                    </View>
                    <TouchableOpacity style={travelStyles.tripButton} onPress={() => navigation.navigate('Trip')}>
                        <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                    </TouchableOpacity>
                </View>
                <View style={travelStyles.lightTrip}>
                    <View>
                        <Text style={travelStyles.timestamp}>09:05 - 09:25</Text>
                        <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                    </View>
                    <TouchableOpacity style={travelStyles.tripButton} onPress={() => navigation.navigate('Trip')}>
                        <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                    </TouchableOpacity>
                </View>
                <View style={travelStyles.darkTrip}>
                    <View>
                        <Text style={travelStyles.timestamp}>09:15 - 09:35</Text>
                        <Text style={travelStyles.duration}>20 mins · $3.37</Text>
                    </View>
                    <TouchableOpacity style={travelStyles.tripButton} onPress={() => navigation.navigate('Trip')}>
                        <Ionicons style={{marginTop: 3,}} name={"ios-arrow-forward"} size={35} color={"#fff"}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

      </View>
    );
}

function TravelJourney() {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
      setVisible(!visible);
    };  

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

        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{width: 300, height: 350, borderRadius: 15, padding: 0,}}>
            <View style={travelStyles.trackworkHeaderContainer}>
                <Text style={travelStyles.trackworkHeader}>Trackwork Info</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 20, marginBottom: 15}}>
                    <Text style={travelStyles.trackworkInfo}>
                        As a result of the latest directives from the Australian Government around public gatherings, the L1 light rail services operating from 11pm (midnight on Friday) to 6am between Central Grand Concourse and The Star in both directions, have been suspended since 11pm Saturday 28 March 2020 until further notice. 
                        {"\n"}{"\n"}
                        From Friday 22 May, daily light rail services have fully resumed, with all services stopping at The Star between 6am and 11pm (midnight on Friday). This follows the gradual re-opening of The Star Sydney restaurants only.
                    </Text>
                </View>
            </ScrollView>
        </Overlay>

        
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
            <TouchableOpacity style={travelStyles.infobutton} onPress={toggleOverlay}>
                <Ionicons name={"md-alert"} size={50} color={"#fff"}/>
            </TouchableOpacity>
        </MapView>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            style={{
                
                height: 75,
                paddingLeft: '35%',
                paddingRight: '15%',
                
                backgroundColor: '#ececec',
                
            }}
            
            contentContainerStyle={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <View style={travelStyles.progressbackbar}/>
            <View style={travelStyles.progresscirclecontainer}>
                <View style={travelStyles.travelledCircle}/>
                <View style={travelStyles.travelledCircle}/>
                <View style={travelStyles.untravelledCircle}/>
                <View style={travelStyles.untravelledCircle}/>
                <View style={travelStyles.untravelledCircle}/>
                <View style={travelStyles.untravelledCircle}/>
            </View>
        </ScrollView>
        
        <View style={travelStyles.currstopcontainer}>
            <Text style={travelStyles.currStopTitle}>Current Stop</Text>
            <Text style={travelStyles.currStopName}>Wansey Road</Text>
        </View>
        
        <View style={travelStyles.stopsScrollContainer}>
        <ScrollView style={{width: '100%'}} contentContainerStyle={travelStyles.tripsContainer} showsVerticalScrollIndicator={false}>
            <View style={travelStyles.lightStop}>
                <Text style={travelStyles.stoptime}>Central Chalmers Street</Text>
                <Text style={travelStyles.stoptime}>8:05</Text>
            </View>
            <View style={travelStyles.darkStop}>
                <Text style={travelStyles.stoptime}>Surry Hills</Text>
                <Text style={travelStyles.stoptime}>8:08</Text>
            </View>
            <View style={travelStyles.lightStop}>
                <Text style={travelStyles.stoptime}>Moore Park</Text>
                <Text style={travelStyles.stoptime}>8:05</Text>
            </View>
            <View style={travelStyles.darkStop}>
                <Text style={travelStyles.stoptime}>Royal Randwick</Text>
                <Text style={travelStyles.stoptime}>8:08</Text>
            </View>
            <View style={travelStyles.lightStop}>
                <Text style={travelStyles.stoptime}>Wansey Road</Text>
                <Text style={travelStyles.stoptime}>8:05</Text>
            </View>
            <View style={travelStyles.darkStop}>
                <Text style={travelStyles.stoptime}>UNSW High Street</Text>
                <Text style={travelStyles.stoptime}>8:08</Text>
            </View>
        </ScrollView>
        </View>

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
                    <Stack.Screen name="Trip" component={TravelJourney} />

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
        padding: 10,
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

    infobutton: {

        width: 50,
        height: 50,

        borderRadius: 50,
        
        // position: "relative",
        // top: 10,
        // left: 10,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    
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

    tripsScrollContainer: {
        height: 280,
        width: '100%',
        marginBottom: 150,
    },

    stopsScrollContainer: {
        height: 200,
        width: '100%',
        marginBottom: 150,
    },

    tripsContainer: {

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

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

    stoptime: {

        fontFamily: 'Roboto_500Medium',
        fontSize: 24,

    },
    
    tripButton: {

        width: 60,
        height: 60,
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    
        backgroundColor: '#c34242',

    },

    travelledCircle: {

        height: 40,
        width: 40,

        marginRight: 20,
        
        backgroundColor: '#34A032',
        
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 4,

        shadowOffset: { width: 0,  height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 1,
   
    },

    untravelledCircle: {

        height: 40,
        width: 40,

        marginRight: 20,
        
        backgroundColor: '#c4c4c4',
        
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 4,

        shadowOffset: { width: 0,  height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 1,
   
    },
    
    progresscirclecontainer : {

        display:'flex',
        flexDirection:'row',

        paddingRight: 125,
    },

    progressbackbar: {
        position: 'absolute',

        height: 8,
        width: 340,
        
        backgroundColor: 'white',
        borderRadius: 500,

        shadowOffset: { width: 0,  height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 1,
    },

    currstopcontainer: {
        width: '100%',
        height: 60,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#c34242',

        shadowOffset:{ width: 0,  height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,
        zIndex: 1,
    },

    currStopTitle: {
        
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        color: '#ececec',

    },

    currStopName: {

        fontFamily: 'Roboto_700Bold',
        fontSize: 24,
        color: '#ececec',

    },

    lightStop: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 15,
        
        height: 60,
        width: '100%',

        backgroundColor: '#ececec',

    },

    darkStop: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 15,
        
        height: 60,
        width: '100%',

        backgroundColor: '#d2d2d2',

    },
    
    trackworkHeaderContainer: {

        width: '100%',
        height: 50,

        backgroundColor: '#c34242',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

        shadowOffset:{ width: 0,  height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,

    },
    
    trackworkHeader: {

        fontFamily: 'Roboto_700Bold',
        fontSize: 28,
        color: '#ececec',

        shadowOffset:{ width: 0,  height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,

    },

    trackworkInfo: {

        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        color: '#242424',

    }


});