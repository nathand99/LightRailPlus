import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, ScrollView, Image } from 'react-native';

import { Checkbox } from 'react-native-paper';

import Slider from '@react-native-community/slider'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './main.js';
import CardTypeScreen from './cardtype.js';

const Stack = createStackNavigator();

function SignUp({ navigation }) {
    return (
        <View style={styles.container}> 
            {/*<View style={styles.topbar}> 
                <TouchableOpacity style={styles.back} 
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.loginText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.bigtext}>REGISTER</Text>
            </View>
            <Text style={styles.title}>PERSONAL DETAILS</Text>
    */}
            <KeyboardAvoidingView style={styles.inputcontainer}>  
            <ScrollView> 
                <Text style={styles.prompt}>NAME</Text>
                {/*} name input */}
                <View style={styles.inputView} >      
                    <TextInput  
                    style={styles.inputText}
                    //placeholder="EMAIL ADDRESS" 
                    //placeholderTextColor="#000000"
                    //onChangeText={text => this.setState({email:text})}
                    />
                </View>   
                <Text style={styles.prompt}>EMAIL ADDRESS</Text>
                {/*} email input */}
                <View style={styles.inputView} >      
                    <TextInput  
                    style={styles.inputText}
                    //onChangeText={text => this.setState({email:text})}
                    />
                </View>
                <Text style={styles.prompt}>PASSWORD</Text>
                {/*} password input */}
                    <View style={styles.inputView} > 
                    <TextInput  
                        style={styles.inputText}
                        secureTextEntry={true}
                        //onChangeText={text => this.setState({email:text})}
                        />
                    </View>
                {/*} next button button - goto payment details*/}
                <TouchableOpacity style={styles.loginBtn1} 
                onPress={() => navigation.navigate('Enter Payment Details')}>
                    <Text style={styles.loginText}>NEXT</Text>
                </TouchableOpacity>
            </ScrollView> 
            </KeyboardAvoidingView>
        </View>
    );
    }

function PaymentDetails({ navigation }) {

    return (
        <View style={styles.container}> 
            {/*<View style={styles.topbar}> 
                <TouchableOpacity style={styles.back} 
                    onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.loginText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.bigtext}>REGISTER</Text>
            </View>
            <Text style={styles.title}>PAYMENT DETAILS</Text>
    */}
            <KeyboardAvoidingView style={styles.inputcontainer}>  
            <ScrollView> 
                <Text style={styles.prompt}>CARD NAME</Text>
                {/*} card name input */}
                <View style={styles.inputView} >      
                    <TextInput  
                    style={styles.inputText}
                    //onChangeText={text => this.setState({email:text})}
                    />
                </View>   
                <Text style={styles.prompt}>CARD NUMBER</Text>
                {/*} card number input */}
                <View style={styles.inputView} >      
                    <TextInput  
                    style={styles.inputText}
                    //onChangeText={text => this.setState({email:text})}
                    />
                </View>
                <Text style={styles.prompt}>EXPIRY DATE</Text>
                {/*} expiry date input */}
                <View style={styles.inputView} > 
                <TextInput  
                    style={styles.inputText}
                   // onChangeText={text => this.setState({email:text})}
                    />
                </View>
                <Text style={styles.prompt}>CVV</Text>
                {/*} cvv input */}
                <View style={styles.inputView} >      
                    <TextInput  
                    style={styles.inputText}
                    //onChangeText={text => this.setState({email:text})}
                    />
                </View>
                {/*} next button*/}
                <TouchableOpacity style={styles.loginBtn} 
                onPress={() => navigation.navigate('Select Card Type')}>
                    <Text style={styles.loginText}>NEXT</Text>
                </TouchableOpacity>
            </ScrollView> 
            </KeyboardAvoidingView>
        </View>
    );
}
{/*}
function CardType({navigation}) {

    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);


    return (
        <View style={optionsStyles.container}>        
            {/* ADULT FARE 
            <View style={optionsStyles.lightRow}>
                <Checkbox
                    status={checked1 ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked1(!checked1);
                        setChecked2(false);
                        setChecked3(false);
                        setChecked4(false);
                    }}
                    color='#c34242'
                />
                <View>
                    <Image 
                        style={{width: 50,height: 32}} 
                        source={require('./images/adult_opal.png')} 
                    />
                </View>
                <View>
                    <Text style={optionsStyles.paymentText}>ADULT FARE</Text>
                </View>
            </View>
            {/* CHILD FARE 
            <View style={optionsStyles.lightRow}>
                <Checkbox
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked2(!checked2);
                        setChecked1(false);
                        setChecked3(false);
                        setChecked4(false);
                    }}
                    color='#c34242'
                />
                <View>
                    <Image 
                        style={{width: 50,height: 32}} 
                        source={require('./images/child_opal.png')} 
                    />
                </View>
                <View>
                    <Text style={optionsStyles.paymentText}>CHILD FARE</Text>
                </View>
            </View>
            {/* SENIOR FARE 
            <View style={optionsStyles.lightRow}>
                <Checkbox
                    status={checked3 ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked1(false);
                        setChecked2(false);
                        setChecked3(!checked3);
                        setChecked4(false);
                    }}
                    color='#c34242'
                />
                <View>
                    <Image 
                        style={{width: 50,height: 32}} 
                        source={require('./images/senior_opal.png')} 
                    />
                </View>
                <View>
                    <Text style={optionsStyles.paymentText}>SENIOR FARE</Text>
                </View>
            </View>
            {/* CONCESSION 
            <View style={optionsStyles.lightRow}>
                <Checkbox
                    status={checked4 ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked4(!checked4);
                        setChecked1(false);
                        setChecked3(false);
                        setChecked2(false);
                    }}
                    color='#c34242'
                />
                <View>
                    <Image 
                        style={{width: 50,height: 32}} 
                        source={require('./images/concession_opal.png')} 
                    />
                </View>
                <View>
                    <Text style={optionsStyles.paymentText}>CONCESSION</Text>
                </View>
            </View>
            {/*} register button
            <TouchableOpacity style={styles.loginBtn3} 
            onPress={() => navigation.navigate('MainScreen')}>
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>

        </View>
    );
}
*/}
// Screen code
export default class SignUpScreen extends React.Component {

    static navigationOptions = {
        title: 'SignUp',
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
                    <Stack.Screen name="Enter Personal Details" component={SignUp} />
                    <Stack.Screen name="Enter Payment Details" component={PaymentDetails} />
                    <Stack.Screen name="Select Card Type" component={CardTypeScreen} />
                    <Stack.Screen name="MainScreen" component={MainScreen} />
                </Stack.Navigator>
            </NavigationContainer>

        );
    }

}

// Stylesheet
const styles = StyleSheet.create({

back: {
    color:"white",
    fontSize:40,
    fontWeight: "bold",
    paddingTop: 40,
    paddingLeft: 20,
},

bigtext: {
    color:"white",
    fontSize:40,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 40,
    textAlign: "center",
    textAlignVertical: "center",
},
topbar: {
    flexDirection: 'row',
    backgroundColor: '#c34242',
    height:100,
    width:"100%",
},

container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
},

inputcontainer: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
},

inputView:{
    width:300,
    backgroundColor:"#ECECEC",
    borderWidth:0.1,
    borderRadius:25,
    borderColor:"black",
    height:50,
    marginTop:8,
    marginBottom:20,
    justifyContent:"center",
    padding:10
  },

  inputText: {
    height:50,
    color:"black"
  },

  title:{
    color:"#c34242",
    fontSize:25,
    paddingTop:10,
  },

  prompt:{
    color:"#c34242",
    fontSize:25,
  },

  loginBtn:{
    width:250,
    height:55,
    backgroundColor:"#c34242",
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    marginTop:50,
    marginBottom:0,
    alignSelf:"center",
  },
  loginBtn1:{
    width:250,
    height:55,
    backgroundColor:"#c34242",
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    marginTop:150,
    marginBottom:0,
    alignSelf:"center",
  },
  loginBtn3:{
    width:250,
    height:55,
    backgroundColor:"#c34242",
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    marginTop:120,
    marginBottom:0,
    alignSelf:"center",
  },
  loginText: {
    color:"white",
    fontSize:30
  }
});

const optionsStyles = StyleSheet.create({

    container: {

        display: 'flex',
        //alignItems: 'center',
        width: '100%',
        height: "100%",

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
        
        height: 80,
        width: '100%',

        backgroundColor: '#e2e2e2',

        borderWidth:0.2,
        //borderRadius:25,
        borderColor:"black",
    },

    darkRow: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        
        height: 80,
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

    sliderRow: {
        
        height: 50,
        width: '100%',

        backgroundColor: '#d2d2d2',

    },

    text: {

        fontFamily: 'Roboto_400Regular',
        fontSize: 24,

    },

    paymentText: {

        fontFamily: 'Roboto_400Regular',
        fontSize: 21,
        fontWeight: 'bold',
        paddingRight: 150,
        paddingLeft: 15,
        color:"#c34242",
    },

    paymentSubtext: {

        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 200,
        paddingLeft: 15,

    },

    infoText: {

        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        color: '#505050',

    },




});