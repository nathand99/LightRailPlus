import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const Stack = createStackNavigator();

function pay({ navigation }) {
  
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
      <View>
        <TouchableWithoutFeedback onPress={()=>requestTapOn()}>
          <Text style={{textAlign: 'center'}}>(Tap this message to simulate automatic tap on.){"\n"}</Text>
        </TouchableWithoutFeedback>
      </View>

      {/* Nominated payment method */}
      <View style={payMethod.methodContainer}>
        <View style={payMethod.methodTextBox}>
        <Text style={payMethod.methodText}>PAYMENT METHOD:{"\n"}Mastercard ending in 1234</Text>
        </View>
        {/* <Text style={styles.stopName}> Mastercard 1234 </Text> */}
        <View style={payMethod.methodPic}>
          <Image 
            style={{width: 64,height: 40}} 
            source={require('./images/mastercard_logo.png')} 
          />
        </View>
      </View>

      {/* AUTO PAYMENT BUTTON */}
      <View style={autoStyles.circle}>
        {/* Replace with modal */}

        <View>
           <Text style={autoStyles.header}>AUTO</Text>

          {/* Tap on Modal */}
          <Modal isVisible={isModalVisible} style={styles.modal}>
            <View>
              <Text style={{textAlign:'center'}}>You have been automatically tapped on at</Text>
              <Text style={modalStyles.dest}>Kensington</Text>
            </View>

            {/* Confirm/Cancel Buttons */}
            <View style={modalStyles.modal}>
              {/* <View style={{backgroundColor:'green'}}> */}
                <TouchableOpacity style={{alignSelf: 'center', backgroundColor:'#34a032',width:'80%', borderRadius: 25}} onPress={() => {
                  navigation.navigate('Tapped On'),
                  confirmTapOn()}}>
                  <Text style={{color:'white',textAlign:'center',padding:10}}>Confirm</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: 'center', backgroundColor:'#b0b0b0',width:'80%',borderRadius: 25}} 
                                  onPress={()=> {navigation.navigate('Pay'), cancelTapOn()}}>
                  <Text style={{color:'white',textAlign:'center',padding:10}}>Cancel</Text>
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
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}15 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}14 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}13 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}12 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}11 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Payment History')}>
        <Text style={styles.button}>SEE ALL</Text>
      </TouchableOpacity>
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
      <TouchableWithoutFeedback onPress={()=>requestTapOn()}>
        <Text style={{textAlign: 'center'}}>(Tap on this message to simulate tap off.){"\n"}</Text>
      </TouchableWithoutFeedback>

      {/* Nominated payment method */}
      <View style={payMethod.methodContainer}>
        <View style={payMethod.methodTextBox}>
        <Text style={payMethod.methodText}>PAYMENT METHOD:{"\n"}Mastercard ending in 1234</Text>
        </View>
        {/* <Text style={styles.stopName}> Mastercard 1234 </Text> */}
        <View style={payMethod.methodPic}>
          <Image 
            style={{width: 64,height: 40}} 
            source={require('./images/mastercard_logo.png')} 
          />
        </View>
      </View>

      <Text style={styles.body}>{"\n"}Tapped on at: </Text>
      <Text style={styles.stopName}>Kensington</Text>

      {/* AUTO PAYMENT BUTTON */}
      <View style={autoStyles.circle}>
        {/* Replace with modal */}

        <View>
            <Text style={autoStyles.header}>AUTO</Text>

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
              <View>
                <TouchableOpacity style={{alignSelf: 'center', backgroundColor:'#34a032',width:'80%', borderRadius: 25}} onPress={() => {
                  navigation.navigate('Paid'),
                  confirmTapOn()}}>
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
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}15 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}14 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}13 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}12 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
        <View style={tripStyles.tripContainer}>
          <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}11 July 2020</Text>
          <Text style={tripStyles.tripPrice}>-$2.99</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Payment History')}>
        <Text style={styles.button}>SEE ALL</Text>
      </TouchableOpacity>
    </ScrollView>
  );

}

function paid({ navigation }) {
  
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

      <TouchableWithoutFeedback onPress={()=>requestTapOn()}>
        <Text style={{textAlign: 'center'}}>(Tap this message to simulate automatic tap on.){"\n"}</Text>
      </TouchableWithoutFeedback>

      {/* Nominated payment method */}
      <View style={payMethod.methodContainer}>
        <View style={payMethod.methodTextBox}>
        <Text style={payMethod.methodText}>PAYMENT METHOD:{"\n"}Mastercard ending in 1234</Text>
        </View>
        {/* <Text style={styles.stopName}> Mastercard 1234 </Text> */}
        <View style={payMethod.methodPic}>
          <Image 
            style={{width: 64,height: 40}} 
            source={require('./images/mastercard_logo.png')} 
          />
        </View>
      </View>

      {/* AUTO PAYMENT BUTTON */}
      <View style={autoStyles.circle}>
        {/* Replace with modal */}
        <View>
          <Text style={autoStyles.header}>AUTO</Text>

          {/* Tap on Modal */}
          <Modal isVisible={isModalVisible} style={styles.modal}>
            <View>
              <Text style={{textAlign:'center'}}>You have been automatically tapped on at</Text>
              <Text style={modalStyles.dest}>Kingsford</Text>
            </View>

            {/* Confirm/Cancel Buttons */}
            <View style={modalStyles.modal}>
              {/* <View style={{backgroundColor:'green'}}> */}
                <TouchableOpacity style={{alignSelf: 'center', backgroundColor:'#34a032',width:'80%', borderRadius: 25}} onPress={() => {
                  navigation.navigate('Tapped On'),
                  confirmTapOn()}}>
                  <Text style={{color:'white',textAlign:'center',padding:10}}>Confirm</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: 'center', backgroundColor:'#b0b0b0',width:'80%',borderRadius: 25}} 
                                  onPress={()=> {navigation.navigate('Pay'), cancelTapOn()}}>
                  <Text style={{color:'white',textAlign:'center',padding:10}}>Cancel</Text>
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

function payHistory() {

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    {/* RECENT PAYMENTS */}
    <View style={historyStyles.historyContainer}>
      <Text style={historyStyles.header}>RECENT PAYMENTS</Text>
      <View style={tripStyles.tripContainer}>
        <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}15 July 2020</Text>
        <Text style={tripStyles.tripPrice}>-$2.99</Text>
      </View>
      <View style={tripStyles.tripContainer}>
        <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}14 July 2020</Text>
        <Text style={tripStyles.tripPrice}>-$2.99</Text>
      </View>
      <View style={tripStyles.tripContainer}>
        <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}13 July 2020</Text>
        <Text style={tripStyles.tripPrice}>-$2.99</Text>
      </View>
      <View style={tripStyles.tripContainer}>
        <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}12 July 2020</Text>
        <Text style={tripStyles.tripPrice}>-$2.99</Text>
      </View>
      <View style={tripStyles.tripContainer}>
        <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}11 July 2020</Text>
        <Text style={tripStyles.tripPrice}>-$2.99</Text>
      </View>
      <View style={tripStyles.tripContainer}>
        <Text style={tripStyles.tripRoute}>UNSW High Street to Central Chalmers Street{"\n"}10 July 2020</Text>
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

          <Stack.Screen name="Pay" component={pay} />
          <Stack.Screen name="Payment History" component={payHistory} />
          <Stack.Screen name="Tapped On" component={tapOn} />
          <Stack.Screen name="Paid" component={paid}></Stack.Screen> 
        </Stack.Navigator>
      </NavigationContainer>

    );
}

}

// Stylesheet
const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: '#ececec',
		justifyContent: 'flex-start',
    padding: 20,
  },

  stopName: {
		fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 15,
    fontSize: 25,
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
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    backgroundColor:'#ececec',
    borderRadius: 25,
    maxHeight:Dimensions.get('window').height * 0.8
  },

  
});

const payMethod = StyleSheet.create({
  methodContainer: {
    backgroundColor: '#d2d2d2',
    flexDirection: 'row',
    borderRadius: 10
  },

  methodTextBox: {
    // backgroundColor: 'red',
    flex: 7,
    paddingVertical: 20,
    paddingLeft: 18
  },
  
  methodText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
    fontWeight: 'bold',
  },

  methodPic: {
    // backgroundColor: 'red',
    flex: 3,
    // display: 'flex',
    paddingVertical: 20,
    paddingLeft: 24,
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
  }
});

const modalStyles = StyleSheet.create({
  modal: {
    justifyContent: 'space-around',
    borderRadius: 25,
    backgroundColor:'#ececec',
    height: 100
  },

  confirm: {
    alignSelf: 'stretch',
    height: 30
  },

  dest: {
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 40,
    paddingHorizontal: 10
  }
})

const historyStyles = StyleSheet.create({
  historyContainer: {
    flex: 1,
    flexDirection: 'column',
	},

  header: {
		paddingTop: 20,
		fontWeight: 'bold',
		textAlign: 'left',
		fontSize: 26,
		color: '#c34242',
    fontFamily: 'Roboto_700Bold',
	},
});

const tripStyles = StyleSheet.create({
  tripContainer: {
    flexDirection: 'row',
  },

  tripRoute: {
    flex: 7,
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    fontWeight: 'normal',
    paddingVertical: 10,
  },
  
  tripDate: {
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
    fontFamily: 'Roboto_400Regular',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingLeft: 24,
  },
});
