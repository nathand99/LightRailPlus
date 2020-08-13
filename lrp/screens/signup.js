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
            <View style={styles.topbar}> 
                <TouchableOpacity style={styles.back} 
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.loginText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.bigtext}>REGISTER</Text>
            </View>
            <Text style={styles.title}>PERSONAL DETAILS</Text>
    
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
                onPress={() => this.props.navigation.navigate('PaymentDetails')}>
                    <Text style={styles.loginText}>NEXT</Text>
                </TouchableOpacity>
            </ScrollView> 
            </KeyboardAvoidingView>
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
    padding:10,
    //paddingTop:30,
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
    //alignItems: 'left',
   // justifyContent: 'left'
    //marginBottom:30
    //marginBottom:30
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
    marginTop:110,
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