import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';

// Screen code
export default class SignUpScreen extends React.Component {

    static navigationOptions = {
        title: 'PaymentDetails',
    };

    render() {
        return (
            <View style={styles.container}> 
                <KeyboardAvoidingView behavior={"position"} style={styles.inputcontainer}>  
                {/* <View> */}
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
                        onChangeText={text => this.setState({email:text})}
                        />
                    </View>
                    <Text style={styles.prompt}>EXPIRY DATE</Text>
                    {/*} expiry date input */}
                    <View style={styles.inputView} > 
                    <TextInput  
                        style={styles.inputText}
                        onChangeText={text => this.setState({email:text})}
                        />
                    </View>
                    <Text style={styles.prompt}>CVV</Text>
                    {/*} cvv input */}
                    <View style={styles.inputView} >      
                        <TextInput  
                        style={styles.inputText}
                        onChangeText={text => this.setState({email:text})}
                        />
                    </View>
                    {/*} login button - chagne this to point to where its meant to go later*/}
                {/* </View>  */}
                </KeyboardAvoidingView>
                    <TouchableOpacity style={styles.loginBtn} 
                    onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={styles.loginText}>REGISTER</Text>
                    </TouchableOpacity>
            </View>
        );
    }

}

// Stylesheet
const styles = StyleSheet.create({

container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#ececec',
    alignItems: 'center',
    justifyContent: 'center',
},

inputcontainer: {
    width: '100%',
    flex: 1,
    backgroundColor: '#ececec',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
},

buttonText: {
    color: '#c34242',
    fontSize: 28,
    fontFamily: 'Roboto_700Bold',
},

logoImageContainer: {
    width: 150,
    height: 150,
},

logoText: {
    fontSize: 48,
    color: '#ececec',
    fontFamily: 'Roboto_700Bold',

    shadowOffset:{  width: 0,  height: 4,  },
    shadowColor: 'black',
    shadowOpacity: 0.25,
},

inputView:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    
    borderWidth: 2,
    borderColor: '#c34242',
    borderRadius: 4,
    
    width: '80%',
    height: 50,
    marginBottom: 25,
  },

  inputText: {
    height: 45,
    backgroundColor: '#eaeaea',


    padding: 10,
    fontSize: 20,

    width: '100%',
  },

  title:{
    color:"#c34242",
    fontFamily: 'Roboto_700Bold',
    fontSize: 28,
    paddingBottom: 20,
  },

  prompt:{
    fontFamily: 'Roboto_700Bold',
    fontSize: 26,
    textTransform: "uppercase",

    color: "#c34242",

    paddingBottom: 10,
  },

  loginBtn:{
    width: 250,
    height: 55,

    margin: 10,

    borderRadius: 5000,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#c34242',
    shadowOffset:{  width: 0,  height: 4,  },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,

    marginBottom: 50,
  },

  loginText: {
    color:"white",
    fontSize: 28,
    fontFamily: 'Roboto_700Bold',
  }
});
