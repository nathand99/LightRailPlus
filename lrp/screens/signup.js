import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView } from 'react-native';

// Screen code
export default class SignUpScreen extends React.Component {

    static navigationOptions = {
        title: 'SignUp',
    };

    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.topbar}> 
                    <Text style={styles.bigtext}>REGISTER</Text>
                </View>
                <Text style={styles.prompt}>PERSONAL DETAILS</Text>
                <KeyboardAvoidingView style={styles.inputcontainer}
                behavior= "0" enabled="False"
                >  
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
                        //placeholder="EMAIL ADDRESS" 
                        //placeholderTextColor="#000000"
                        onChangeText={text => this.setState({email:text})}
                        />
                    </View>
                    <Text style={styles.prompt}>PASSWORD</Text>
                    {/*} password input */}
                        <View style={styles.inputView} > 
                        <TextInput  
                            style={styles.inputText}
                            secureTextEntry={true}
                            //placeholder="PASSWORD"
                            //placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({email:text})}
                            />
                        </View>
                    {/*} login button - chagne this to point to where its meant to go later*/}
                    <TouchableOpacity style={styles.loginBtn} 
                    onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.loginText}>NEXT</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }

}

// Stylesheet
const styles = StyleSheet.create({

bigtext: {
    color:"white",
    fontSize:40,
    fontWeight: "bold",
    paddingTop: 20,
    alignSelf: "center",
},
topbar: {
    //flex: 1,
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

logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    height: '65%',
},

button: {
    width: 250,
    height: 55,
    margin: 10,
    borderRadius: 5000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ececec',
    shadowOffset:{  width: 0,  height: 4,  },
    shadowColor: 'black',
    shadowOpacity: 0.25,
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

  forgot:{
    color:"#c34242",
    fontSize:11
  },

  prompt:{
    color:"#c34242",
    fontSize:25,
    //alignItems: 'left',
   // justifyContent: 'left'
    //marginBottom:30
  },

  loginBtn:{
    width:250,
    height:55,
    backgroundColor:"#c34242",
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    marginTop:150,
    marginBottom:0
  },
  loginText: {
    color:"white",
    fontSize:30
  }
});
