import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { AppLoading } from 'expo';
// import {
//   useFonts,
//   Fredoka_400Regular,
// } from '@expo-google-fonts/Fredoka-One';

const Stack = createStackNavigator();

function PAY({ navigation }) {
  
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* AUTO PAYMENT BUTTON */}
      <View style={autoStyles.circle}>
        <Text style={autoStyles.header}>AUTO</Text>
      </View>

      {/* Text */}
      <View style={styles.container}>
          {/* Logo Container */}
          <Text style={styles.body}>
            Automatic payments have been set up for this account. 
          </Text>
          <Text style={styles.body}>
            Simply board a light rail carriage and you will be tapped on automatically.
          </Text>
      </View>

      {/* RECENT PAYMENTS */}
      <View style={historyStyles.historyContainer}>
        <Text style={historyStyles.header}>RECENT PAYMENTS</Text>
        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street 15 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street 14 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street 13 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street 12 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Payment History')}>
        <Text style={styles.button}>SEE ALL</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function OptionsPayment() {

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    {/* RECENT PAYMENTS */}
    <View style={historyStyles.historyContainer}>
      <Text style={historyStyles.header}>RECENT PAYMENTS</Text>
      <View style={tripStyles.tripContainer}>
        <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street 15 July 2020</Text>
        <Text style={tripStyles.tripPrice}>-$2.99</Text>
      </View>
      <View style={tripStyles.tripContainer}>
        <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street 14 July 2020</Text>
        <Text style={tripStyles.tripPrice}>-$2.99</Text>
      </View>
      <View style={tripStyles.tripContainer}>
        <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street 13 July 2020</Text>
        <Text style={tripStyles.tripPrice}>-$2.99</Text>
      </View>
      <View style={tripStyles.tripContainer}>
        <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street 12 July 2020</Text>
        <Text style={tripStyles.tripPrice}>-$2.99</Text>
      </View>
      <View style={tripStyles.tripContainer}>
        <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street 11 July 2020</Text>
        <Text style={tripStyles.tripPrice}>-$2.99</Text>
      </View>
      <View style={tripStyles.tripContainer}>
        <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street 10 July 2020</Text>
        <Text style={tripStyles.tripPrice}>-$2.99</Text>
      </View>
    </View>

    </ScrollView>  
  );
}

// Screen code
export default class PayScreen extends React.Component {

	static navigationOptions = {
			title: 'Pay',
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

          <Stack.Screen name="PAY" component={PAY} />
          <Stack.Screen name="Payment History" component={OptionsPayment} />
          {/*<Stack.Screen name="Change Card Type" component={OptionsCardType} />
          <Stack.Screen name="Display & Text Size" component={OptionsDisplay} /> */}
        </Stack.Navigator>
      </NavigationContainer>

    );
}

	// render() {
	// 	return (
    
      
      
			// <ScrollView>
        

      //     <StatusBar style="dark" />
      //     <Text style={styles.header}>RECENT PAYMENTS</Text>
      //   </View>
			// </ScrollView>


			// <View style={styles.darkRow}>
			// 	<Text style={styles.text}>UNSW High Street to Central Chalmer's Street</Text>
			// </View>

  //   );
	// }

}

// Stylesheet
const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: '#ececec',
		// alignItems: 'flex-start',
		justifyContent: 'flex-start',
    padding: 20,
  },

	body: {
		fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 15,
    fontSize: 18,
  },
  
  button: {
    fontFamily: 'Roboto_400Regular',
    color: '#c34242',
    fontSize: 24,
    alignSelf: 'flex-end',
    fontWeight: 'bold'
  },
});

const autoStyles = StyleSheet.create({
  circle: {
    width: 230,
    height: 230,
    borderRadius: 230/2,
    backgroundColor: '#34A032',
    alignSelf: 'center',
    borderWidth: 8,
    borderColor: 'white',
    justifyContent: "center",
  },

  header: {
    fontWeight: 'bold',
		alignSelf: 'center',
		fontSize: 40,
		color: 'white',
    // fontFamily: 'Fredoka-One', cursive,
  }


});

const historyStyles = StyleSheet.create({
  historyContainer: {
    flex: 1,
    flexDirection: 'column',
		// backgroundColor: '#FF9AA2',
		// alignItems: 'flex-start',
		// justifyContent: 'flex-start',
		// padding: 80,
	},

  header: {
    // flex: 2,n
		paddingTop: 20,
		fontWeight: 'bold',
		textAlign: 'left',
		fontSize: 26,
		color: '#c34242',
    fontFamily: 'Roboto_700Bold',
    // backgroundColor: '#FFB7B2',
	},
});

const tripStyles = StyleSheet.create({
  tripContainer: {
    // flex: 1,
    flexDirection: 'row',
		// backgroundColor: 'yellow',
  },

  tripRoute: {
    flex: 7,
    // flexDirection: 'row',
    // backgroundColor: '#FFDAC1',
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    fontWeight: 'normal',
    paddingVertical: 10,
    // paddingHorizontal: 5,
    // width: 220,
  },
  
  tripDate: {
    // flex: 1,
    // flexDirection: 'row',
    // backgroundColor: '#abcdef',
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
    fontWeight: 'normal',
    paddingRight: 95,
    width: 220,
    paddingHorizontal: 10,
  },
  
  tripPrice: {
    flex: 3,
    display: 'flex',
    // flexDirection: 'row',
    // backgroundColor: '#E2F0CB',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingLeft: 24,
    // width: 100,
  },
});
