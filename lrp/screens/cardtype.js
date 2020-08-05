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
                        onPress={() => this.props.navigation.navigate('PaymentDetails')}>
                        <Text style={styles.loginText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.bigtext}>REGISTER</Text>
                </View>
                <Text style={styles.prompt}>SET CARD TYPE</Text>
                <View style={styles.checkboxes} >
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selected===1} color="#c34242" 
                        onPress={()=>this.setState({selected:1})}/>
                            <Text style={
                            {...styles.checkBoxTxt,
                                color:this.state.selected===1?"#c34242":"black",
                                fontWeight:this.state.selected===1? "bold" :"normal"
                            }}
                            >ADULT FARE</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selected===2} color="#c34242" 
                        onPress={()=>this.setState({selected:2})}/>
                            <Text style={
                            {...styles.checkBoxTxt,
                                color:this.state.selected===2?"#c34242":"green",
                                fontWeight:this.state.selected===2? "bold" :"normal"
                            }}
                            >CHILD FARE</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selected===3} color="#c34242" 
                        onPress={()=>this.setState({selected:3})}/>
                            <Text style={
                            {...styles.checkBoxTxt,
                                color:this.state.selected===3?"#c34242":"gold",
                                fontWeight:this.state.selected===3? "bold" :"normal"
                            }}
                            >SENIOR FARE</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selected===4} color="#c34242" 
                        onPress={()=>this.setState({selected:4})}/>
                            <Text style={
                            {...styles.checkBoxTxt,
                                color:this.state.selected===4?"#c34242":"gray",
                                fontWeight:this.state.selected===4? "bold" :"normal"
                            }}
                            >CONCESSION</Text>
                    </View>
                </View>
                {/*} login button - chagne this to point to where its meant to go later*/}
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
item: {
    width:300,
    height: 50,
    backgroundColor:"#fff",
    padding:10,
    marginTop:10,
    marginBottom:10,
    flexDirection:"row",
    borderWidth:0.1,
    borderRadius:25,
    borderColor:"black",
    alignItems: 'center',
    //justifyContent: 'center',
    },

checkBoxTxt:{
    marginLeft: 25,
    fontSize:25,
    fontWeight: "bold",
    color: "black"
},

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
    //justifyContent: 'center',
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

  prompt:{
    color:"#c34242",
    fontSize:25,
    //alignItems: 'left',
   // justifyContent: 'left'
    marginBottom:30,
    marginTop:10,
  },

  loginBtn:{
    width:250,
    height:55,
    backgroundColor:"#c34242",
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    marginTop:180,
    marginBottom:0
  },
  loginText: {
    color:"white",
    fontSize:30
  }
});
