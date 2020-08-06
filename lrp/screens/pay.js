import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Alert, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Constants } from 'expo';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const Stack = createStackNavigator();

function Pay({ navigation }) {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const requestTapOn = () => {
    setIsModalVisible(true);
  }

  const cancelTapOn = () => {
    setIsModalVisible(false);
  }

  const confirmTapOn = () => {
    setIsModalVisible(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

      {/* AUTO PAYMENT BUTTON */}
      <View style={autoStyles.circle}>
        {/* Replace with modal */}

        <View>
          <TouchableWithoutFeedback onPress={()=>requestTapOn()}>
            <Text style={autoStyles.header}>AUTO</Text>
          </TouchableWithoutFeedback>

          {/* Tap on Modal */}
          <Modal isVisible={isModalVisible} style={styles.modal}>
            <View>
              <Text style={{textAlign:'center'}}>You have been automatically tapped on at</Text>
              <Text style={modalStyles.dest}>Kensington</Text>
            </View>

            {/* Confirm/Cancel Buttons */}
            <View style={modalStyles.modal}>
              {/* <View style={{backgroundColor:'green'}}> */}
                <TouchableOpacity style={{alignSelf: 'center', backgroundColor:'#b0b0b0',width:'80%',borderRadius: 25}} 
                                  onPress={()=> {navigation.navigate('Pay'), cancelTapOn()}}>
                  <Text style={{color:'white',textAlign:'center',padding:10}}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: 'center', backgroundColor:'#34a032',width:'80%', borderRadius: 25}} onPress={() => {
                  navigation.navigate('Tapped On'),
                  confirmTapOn()}}>
                  <Text style={{color:'white',textAlign:'center',padding:10}}>Confirm</Text>
                </TouchableOpacity>
              {/* </View> */}
            </View>
          </Modal>

        </View>


      </View>
      {/* Text */}
      <View style={styles.container}>
          {/* Logo Container */}
          <Text style={styles.body}>
            Automatic payments have been set up for this account. 
          </Text>
          <Text style={styles.body}>
            Simply board a light rail carriage and you will be tapped on and off automatically.
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

function tapOn({ navigation }) {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const requestTapOn = () => {
    setIsModalVisible(true);
  }

  const cancelTapOn = () => {
    setIsModalVisible(true);
  }

  const confirmTapOn = () => {
    setIsModalVisible(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* TAPPED ON INFORMATION */}
      <TouchableWithoutFeedback onPress={()=>openOffModal()}>
        <Text style={styles.body}>Tapped on at: Kensington</Text>
      </TouchableWithoutFeedback>

      {/* AUTO PAYMENT BUTTON */}
      <View style={autoStyles.circle}>
        {/* Replace with modal */}

        <View>
          <TouchableWithoutFeedback onPress={()=>requestTapOn()}>
            <Text style={autoStyles.header}>AUTO</Text>
          </TouchableWithoutFeedback>

          {/* Tap on Modal */}
          <Modal isVisible={isModalVisible} style={styles.modal}>
            <View style={{ flex: 1,justifyContent:'center'}}>
              <Text style={{textAlign:'center'}}>You have been automatically tapped off at</Text>
              <Text style={modalStyles.dest}>Juniors Kingsford</Text>
              <Text style={{textAlign:'center', paddingTop: 30}}>Your trip fare is</Text>
              <Text style={modalStyles.dest}>$1.18</Text>
              <Text style={{textAlign:'center', paddingTop: 30}}>and has been charged to</Text>
              <Text style={modalStyles.dest}>Mastercard</Text>
              <Text style={{textAlign:'center'}}>ending in 1234</Text>
              <Text style={{textAlign:'center', paddingTop: 30}}>Thank you for travelling on the Light Rail!</Text>
            </View>

            <View style={modalStyles.modal}>
              <View >

                <TouchableOpacity style={{backgroundColor:'#34a032', alignSelf: 'stretch', borderRadius: 25}} 
                                  onPress={()=>{ navigation.navigate('Paid'), confirmTapOn()}}>
                  <Text style={{color:'white',textAlign:'center',padding:10}}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

        </View>


      </View>
      {/* Text */}
      <View style={styles.container}>
          {/* Logo Container */}
          <Text style={styles.body}>
            Automatic payments have been set up for this account. 
          </Text>
          <Text style={styles.body}>
            Simply board a light rail carriage and you will be tapped on and off automatically.
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

function Paid({ navigation }) {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const requestTapOn = () => {
    setIsModalVisible(true);
  }

  const cancelTapOn = () => {
    setIsModalVisible(false);
  }

  const confirmTapOn = () => {
    setIsModalVisible(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

      {/* AUTO PAYMENT BUTTON */}
      <View style={autoStyles.circle}>
        {/* Replace with modal */}

        <View>
          <TouchableWithoutFeedback onPress={()=>requestTapOn()}>
            <Text style={autoStyles.header}>AUTO</Text>
          </TouchableWithoutFeedback>

          {/* Tap on Modal */}
          <Modal isVisible={isModalVisible} style={styles.modal}>
            <View>
              <Text style={{textAlign:'center'}}>You have been automatically tapped on at</Text>
              <Text style={modalStyles.dest}>Kingsford</Text>
            </View>

            {/* Confirm/Cancel Buttons */}
            <View style={modalStyles.modal}>
              {/* <View style={{backgroundColor:'green'}}> */}
                <TouchableOpacity style={{alignSelf: 'center', backgroundColor:'#b0b0b0',width:'80%',borderRadius: 25}} 
                                  onPress={()=> {navigation.navigate('Pay'), cancelTapOn()}}>
                  <Text style={{color:'white',textAlign:'center',padding:10}}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: 'center', backgroundColor:'#34a032',width:'80%', borderRadius: 25}} onPress={() => {
                  navigation.navigate('Tapped On'),
                  confirmTapOn()}}>
                  <Text style={{color:'white',textAlign:'center',padding:10}}>Confirm</Text>
                </TouchableOpacity>
              {/* </View> */}
            </View>
          </Modal>

        </View>


      </View>
      {/* Text */}
      <View style={styles.container}>
          {/* Logo Container */}
          <Text style={styles.body}>
            Automatic payments have been set up for this account. 
          </Text>
          <Text style={styles.body}>
            Simply board a light rail carriage and you will be tapped on and off automatically.
          </Text>
      </View>

      {/* RECENT PAYMENTS */}
      <View style={historyStyles.historyContainer}>
        <Text style={historyStyles.header}>RECENT PAYMENTS</Text>

        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>Kensington to Juniors Kingsford{"\n"}06 August 2020</Text>
          <Text style={tripStyles.tripPrice}>-$1.18</Text>
        </View>

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

          <Stack.Screen name="Pay" component={Pay} />
          <Stack.Screen name="Payment History" component={OptionsPayment} />
          <Stack.Screen name="Tapped On" component={tapOn} />
          <Stack.Screen name="Paid" component={Paid}></Stack.Screen> 
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

  modal: {
    // alignSelf: 'center',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    backgroundColor:'#ececec',
    borderRadius: 25,
    maxHeight:Dimensions.get('window').height * 0.8
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
    marginTop: 20
  },

  header: {
    fontWeight: 'bold',
		alignSelf: 'center',
		fontSize: 40,
		color: 'white',
    // fontFamily: 'Fredoka-One', cursive,
  }
});

const modalStyles = StyleSheet.create({
  modal: {
    // flex: 1,
    justifyContent: 'space-around',
    // position: 'absolute',
    // bottom: 50,
    borderRadius: 25,
    // paddingTop: 20,
    backgroundColor:'#ececec',
    height: 100
  },

  confirm: {
    // backgroundColor:'yellow',
    alignSelf: 'stretch',
    height: 30
  },

  dest: {
    fontWeight: 'bold',
    // alignSelf: 'center',
    textAlign:'center',
    fontSize: 40,
    paddingHorizontal: 10
  }
})

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
