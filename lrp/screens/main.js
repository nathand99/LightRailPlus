import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// ICON PACK BEING USED
import Ionicons from 'react-native-vector-icons/Ionicons';

// SCREENS THAT ARE BEING DISPLAYED IN EACH TAB
import PayScreen from './pay.js';
import TravelScreen from './travel.js';
import ProfileScreen from './profile.js';
import OptionsScreen from './options.js';

// CREATE THE TAB OBJECT
const Tab = createBottomTabNavigator();

// Screen code
export default class MainScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Main',
    };

    render() {
        return (
            
            // INDEPENDENT SINCE IT IS CONTAINED IN A STACK NAVIGATOR
            <NavigationContainer independent={true}>
                
                <Tab.Navigator

                    // SETTING ICONS
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Pay') {
                            iconName = 'ios-card'
                        } else if (route.name === 'Travel') {
                            iconName = 'ios-subway'
                        } else if (route.name === 'Profile') {
                            iconName = 'md-person';
                        } else if (route.name === 'Options') {
                            iconName = 'ios-settings';
                        }

                        return <Ionicons name={iconName} size={45} color={'#ececec'} />;
                        },
                    })}

                    // STYLING TABS
                    tabBarOptions={{

                        activeTintColor: '#fff',
                        activeBackgroundColor: '#9c3131',

                        inactiveTintColor: '#fff',
                        inactiveBackgroundColor: '#c34242',

                        style: {
                            height: 110,
                        },

                        tabStyle: {

                            paddingBottom: 25,

                        },

                        labelStyle: {

                            textTransform: "uppercase",
                            fontFamily: 'Roboto_700Bold',
                            fontSize: 18,
                            marginTop: -15,

                        },

                        // CUSTOM PADDING, IGNORE DEVICE SETTINGS
                        safeAreaInsets: {bottom: 0},
                    }}
                    
                >

                    <Tab.Screen name="Pay" component={PayScreen} />
                    <Tab.Screen name="Travel" component={TravelScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                    <Tab.Screen name="Options" component={OptionsScreen} />

                </Tab.Navigator>
            </NavigationContainer>
      
        );
    }

}