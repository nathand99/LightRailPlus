import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

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
                <View style={styles.container}>     
                    <Text style={styles.prompt}>EMAIL ADDRESS</Text>
                    {/*} email input */}
                    <View style={styles.inputView}>      
                        <TextInput style={styles.inputText}
                        //placeholder="EMAIL ADDRESS" 
                        //placeholderTextColor="#000000"
                        onChangeText={text => this.setState({email:text})}
                        />
                    </View>
                    <Text style={styles.prompt}>PASSWORD</Text>
                    {/*} password input */}
                        <View style={styles.inputView} > 
                        <TextInput style={styles.inputText}
                            secureTextEntry={true}
                            //placeholder="PASSWORD"
                            //placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({email:text})}
                            />
                        </View>
                    {/*} forgot password - change this to point somewhere better*/}
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    {/*} login button - chagne this to point to where its meant to go later*/}
                    <TouchableOpacity style={styles.loginBtn} 
                    onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={styles.loginText}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
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

container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop:200,
    marginBottom:0
  },
  loginText: {
    color:"white",
    fontSize:30
  }
});
