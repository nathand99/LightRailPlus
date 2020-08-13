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
            <KeyboardAvoidingView style={styles.inputcontainer}> 
            <Text style={styles.title}>PERSONAL DETAILS</Text>
            <View>

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
            </View>
            </KeyboardAvoidingView>
                <TouchableOpacity style={styles.loginBtn1} 
                onPress={() => this.props.navigation.navigate('Payment Details')}>
                    <Text style={styles.loginText}>NEXT</Text>
                </TouchableOpacity>
            </View>
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
    textAlignVertical: "center",
},

container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
},

inputcontainer: {
    width: '100%',
    flex: 1,
    backgroundColor: '#e5e5e5',
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
    fontSize: 28,
    fontFamily: 'Roboto_700Bold',
  }
});