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
                <View style={styles.topbar}> 
                    <TouchableOpacity style={styles.back} 
                    onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.loginText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.bigtext}>LOG IN</Text>
                </View>
                <KeyboardAvoidingView style={styles.inputcontainer}>  
                <ScrollView>  
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
                </ScrollView> 
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
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
},

container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
},

inputView:{
    display: "flex",
    width:300,
    backgroundColor:"#ECECEC",
    borderWidth:0.1,
    borderRadius:25,
    borderColor:"black",
    height:50,
    marginTop:8,
    marginBottom:20,
    justifyContent:"center",
    padding:10,
  },

  inputText: {
    height:"100%",
    color:"black"
  },

  forgot:{
    color:"#c34242",
    fontSize:11,
    textAlign: "center",
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
    marginTop:10,
    marginBottom:40
  },
  loginText: {
    color:"white",
    fontSize:30
  }
});
