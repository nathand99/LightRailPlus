import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Checkbox } from 'react-native-paper';
import { StyleSheet, Text, TouchableOpacity, View, Image, CheckBox } from 'react-native';



// Screen code
export default class CardTypeScreen extends React.Component {

    static navigationOptions = {
        title: 'CardTypeScreen',
    };

    state = {
        checked: false,
    };
    
    render() {
        const { checked1 } = this.state;
        return (
            <View style={optionsStyles.container}>
                <Text style={styles.prompt}>SET CARD TYPE</Text>

                {/* ADULT FARE */}
                <View style={optionsStyles.lightRow}>
                    <CheckBox
                        value={this.state.checked}
                        onValueChange={() => this.setState({ checked: !this.state.checked })} 
                        color='#c34242'
                    />
                    <View>
                        <Image 
                            style={{width: 40,height: 25}} 
                            source={require('./images/adult_opal.png')} 
                        />
                    </View>
                    <View>
                        <Text style={optionsStyles.paymentText}>ADULT FARE</Text>
                    </View>
                </View>
                {/* CHILD FARE */}
                <View style={optionsStyles.darkRow}>
                <Checkbox
                        checked={this.state.selected===4}
                        onPress={() => {this.setState({selected:4})}}
                        color='#c34242'
                    />
                    <View>
                        <Image 
                            style={{width: 40,height: 25}} 
                            source={require('./images/child_opal.png')} 
                        />
                    </View>
                    <View>
                        <Text style={optionsStyles.paymentText}>CHILD FARE</Text>
                    </View>
                </View>
                {/* SENIOR FARE */}
                <View style={optionsStyles.lightRow}>
                    <Checkbox
                        checked={this.state.selected===3}
                        onPress={() => {this.setState({selected:3})}}
                        color='#c34242'
                    />
                    <View>
                        <Image 
                            style={{width: 40,height: 25}} 
                            source={require('./images/senior_opal.png')} 
                        />
                    </View>
                    <View>
                        <Text style={optionsStyles.paymentText}>SENIOR FARE</Text>
                    </View>
                </View>
                {/* CONCESSION */}
                <View style={optionsStyles.darkRow}>
                    <Checkbox
                        checked={this.state.selected===4}
                        onPress={() => {this.setState({selected:4})}}
                        color='#c34242'
                    />
                    <View>
                        <Image 
                            style={{width: 40,height: 25}} 
                            source={require('./images/concession_opal.png')} 
                        />
                    </View>
                    <View>
                        <Text style={optionsStyles.paymentText}>CONCESSION</Text>
                    </View>
                </View>
                {/*} register button -> main screen*/}
                <TouchableOpacity style={styles.loginBtn3} 
                onPress={() => this.props.navigation.navigate('Main')}>
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
        //alignItems: 'left',
       // justifyContent: 'left'
        marginBottom:10,
        marginTop:10,
        alignSelf:"center",
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
        marginTop:130,
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