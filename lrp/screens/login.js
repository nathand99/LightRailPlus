import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';

// Screen code
export default class LogInScreen extends React.Component {

    static navigationOptions = {
        title: 'LogIn',
    };

    render() {
        return (
            <View style={styles.container}> 
                <KeyboardAvoidingView style={styles.inputcontainer}>  
                <View>  
                    <Text style={styles.prompt}>EMAIL ADDRESS</Text>
                    {/*} email input */}
                    <View style={styles.inputView}>      
                        <TextInput style={styles.inputText}
                        onChangeText={text => this.setState({email:text})}/>
                    </View>
                    <Text style={styles.prompt}>PASSWORD</Text>
                    {/*} password input */}
                        <View style={styles.inputView} > 
                        <TextInput style={styles.inputText}
                            secureTextEntry={true}
                            onChangeText={text => this.setState({email:text})}/>
                        </View>
                    {/*} forgot password - change this to point somewhere better*/}
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>            
                </View> 
                </KeyboardAvoidingView>
                {/*} login button*/}
                <TouchableOpacity style={styles.loginBtn} 
                    onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={styles.loginText}>LOG IN</Text>
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
    paddingLeft: 70,
    textAlign: "center",
    textAlignVertical: "center",
},
topbar: {
    flexDirection: 'row',
    backgroundColor: '#c34242',
    height:100,
    width:"100%",
},

inputcontainer: {
    width: '100%',
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
},

container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
},

inputView:{

    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    
    borderWidth: 2,
    borderColor: '#c34242',
    borderRadius: 4,
    
    width: '90%',
    height: 50,
    marginBottom: 25,

    // display: "flex",
    // width:300,
    // backgroundColor:"#ECECEC",
    // borderWidth:0.1,
    // borderRadius:25,
    // borderColor:"black",
    // height:50,
    // marginTop:8,
    // marginBottom:20,
    // justifyContent:"center",
    // padding:10,

  },

  inputText: {

    height: 45,
    backgroundColor: '#eaeaea',


    padding: 10,
    fontSize: 20,

    width: '90%',
    // height:"100%",
    // color:"black"
  },

  forgot:{
    color:"#c34242",
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: "center",
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
