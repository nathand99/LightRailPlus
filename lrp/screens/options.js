import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Switch, Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function OptionsMain({ navigation }) {
    return (
        <ScrollView contentContainerStyle={optionsStyles.container} showsVerticalScrollIndicator={false}>
        
            {/* USER SETTINGS */}
            <View style={optionsStyles.header}>
                <Text style={optionsStyles.headerTitle}>USER SETTINGS</Text>
            </View>
            <View style={optionsStyles.lightRow}>
                <Text style={optionsStyles.text}>Change E-mail</Text>
            </View>
            <View style={optionsStyles.darkRow}>
                <Text style={optionsStyles.text}>Change Password</Text>
            </View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Change Payment Details')}
                style={optionsStyles.lightRow}>
                <Text style={optionsStyles.text}>Change Payment Details</Text>
            </TouchableOpacity >
            <TouchableOpacity 
                onPress={() => navigation.navigate('Change Card Type')}
                style={optionsStyles.darkRow}>
                <Text style={optionsStyles.text}>Change Card Type</Text>
            </TouchableOpacity>
            {/* ASSESSIBILITY */}
            <View style={optionsStyles.header}>
                <Text style={optionsStyles.headerTitle}>ASSESSIBILITY</Text>
            </View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Display & Text Size')}
                style={optionsStyles.lightRow}>
                <Text style={optionsStyles.text}>Display & Text Size</Text>
            </TouchableOpacity>
            <View style={optionsStyles.darkRow}>
                <Text style={optionsStyles.text}>Enable Simple Mode</Text>
            </View>
            {/* PAYMENT HISTORY */}
            <View style={optionsStyles.header}>
                <Text style={optionsStyles.headerTitle}>PAYMENT HISTORY</Text>
            </View>
            <View style={optionsStyles.lightRow}>
                <Text style={optionsStyles.text}>Export Payment History</Text>
            </View>
            <View style={optionsStyles.darkRow}>
                <Text style={optionsStyles.text}>Clear Payment History</Text>
            </View>
            {/* SUPPORT */}
            <View style={optionsStyles.header}>
                <Text style={optionsStyles.headerTitle}>SUPPORT</Text>
            </View>
            <View style={optionsStyles.lightRow}>
                <Text style={optionsStyles.text}>Frequently Asked Questions</Text>
            </View>
            <View style={optionsStyles.darkRow}>
                <Text style={optionsStyles.text}>Contact Us</Text>
            </View>

            {/* LOG OUT BUTTON */}
            <TouchableOpacity
                /*onPress={() => navigation.navigate('Home')}*/
                style={optionsStyles.button}>
                <Text style={optionsStyles.buttonText}>LOG OUT</Text>
            </TouchableOpacity>


        </ScrollView>
    );
}

function OptionsPayment() {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={optionsStyles.container}>
            <View>
                {/* to change */}
                <Text style={optionsStyles.subheader}>
                    Payment Details                    Edit
                </Text>
            </View>
            <View style={optionsStyles.lightRow}>
                <View>
                    <Image 
                        style={{width: 40,height: 25}} 
                        source={require('./images/mastercard_logo.png')} 
                    />
                </View>
                <View>
                    <Text style={optionsStyles.paymentText}>MasterCard</Text>
                    <Text style={optionsStyles.paymentSubtext}>**** 1234</Text>
                </View>
            </View>
            <View style={optionsStyles.darkRow}>
                <Image 
                    style={{width: 40,height: 10}} 
                    source={require('./images/paypal_logo.png')} 
                />
                <View>
                    <Text style={optionsStyles.paymentText}>PayPal</Text>
                    <Text style={optionsStyles.paymentSubtext}>ex***@ex***.com</Text>
                </View>
            </View>
            <View>
                <Text style={optionsStyles.subheader}>Automatic Payments</Text>
            </View>
            <View style={optionsStyles.lightRow}>
                <Text style={optionsStyles.text}>Enable Automatic Payments</Text>
                <View style={{paddingRight:'4%'}}>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>
            </View>
            <View style={optionsStyles.infoRow}>
                <Text style={optionsStyles.infoText}>
                    Automatic Payments make riding the light rail easier
                    than ever. When enabled, you do not have to tap on or
                    off. Your phone will automatically tap on and off and
                    notify you of your status.
                </Text>
            </View>
        </View>
    );
}

function OptionsCardType() {
    return (
        <View>
            <Text>Change Card Type</Text>
        </View>
    );
}

function OptionsDisplay() {
    return (
        <View>
            <Text>Display</Text>
        </View>
    );
}


// Screen code
export default class OptionsScreen extends React.Component {

    static navigationOptions = {
        title: 'Options',
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
                            fontSize: 25,

                            shadowOffset:{ width: 0,  height: 4 },
                            shadowColor: 'black',
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 1,
                        },
                        
                    }}
                >

                    <Stack.Screen name="OPTIONS" component={OptionsMain} />
                    <Stack.Screen name="Change Payment Details" component={OptionsPayment} />
                    <Stack.Screen name="Change Card Type" component={OptionsCardType} />
                    <Stack.Screen name="Display & Text Size" component={OptionsDisplay} />
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

const optionsStyles = StyleSheet.create({

    container: {

        display: 'flex',
        //alignItems: 'center',
        width: '100%',

        backgroundColor: '#ececec',

    },

    header: {

        display: 'flex',
        justifyContent: 'center',
        
        paddingLeft: 12,
        
        height: 65,
        width: '100%',
        
        backgroundColor: "#c34242",

    },

    headerTitle: {

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

    subheader: {

        fontFamily: 'Roboto_700Bold',
        fontSize: 24,

        margin: 17,
        textTransform: "uppercase",
        color: '#c34242',
        
    },

    lightRow: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        
        height: 60,
        width: '100%',

        backgroundColor: '#ececec',

    },

    darkRow: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        
        height: 60,
        width: '100%',

        backgroundColor: '#d2d2d2',

    },

    infoRow: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        
        height: 100,
        width: '100%',

        backgroundColor: '#ececec',

    },

    text: {

        fontFamily: 'Roboto_400Regular',
        fontSize: 24,

    },

    paymentText: {

        fontFamily: 'Roboto_400Regular',
        fontSize: 21,
        fontWeight: 'bold',
        paddingRight: 200,

    },

    paymentSubtext: {

        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 200,

    },

    infoText: {

        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        color: '#505050',

    },

    button: {

        width: 300,
        height: 55,
    
        margin: 75,
    
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


});
