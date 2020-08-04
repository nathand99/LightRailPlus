import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { CheckBox } from "native-base"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Screen code
export default class SignUpScreen extends React.Component {

    static navigationOptions = {
        title: 'CardType',
    };
    state={
        selected:0
    }

    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.topbar}> 
                    <TouchableOpacity style={styles.back} 
                        onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.loginText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.bigtext}>REGISTER</Text>
                </View>
                <Text style={styles.prompt}>CARD TYPE</Text>
                <View style={styles.item} >
                    <CheckBox checked={this.state.selectedLang===1} color="#fc5185" onPress={()=>this.setState({selectedLang:1})}/>
                    <Text style={
                    {...styles.checkBoxTxt,
                        color:this.state.selectedLang===1?"#fc5185":"gray",
                        fontWeight:this.state.selectedLang===1? "bold" :"normal"
                    }}
                    >Python</Text>
                </View>
                {/*} login button - chagne this to point to where its meant to go later*/}
                <TouchableOpacity style={styles.loginBtn} 
                onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.loginText}>REGISTER</Text>
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
    paddingTop: 30,
    paddingLeft: 20,
},

bigtext: {
    color:"white",
    fontSize:40,
    fontWeight: "bold",
    //paddingTop: 10,
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
    paddingTop: 0,
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
    padding:10,
    //paddingTop:30,
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
    marginTop:40,
    marginBottom:0
  },
  loginText: {
    color:"white",
    fontSize:30
  }
});
