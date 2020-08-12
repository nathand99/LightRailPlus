import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Checkbox } from 'react-native-paper';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';



// Screen code
export default class SignUpScreen extends React.Component {

    render() {
        return (
            <View style={optionsStyles.container}>
                {/* CURRENT CARD */}
                <View>
                    <Text style={optionsStyles.subheader}>Current Card</Text>
                </View>
                <View style={optionsStyles.lightRow}>
                    <View>
                        <Image 
                            style={{width: 40,height: 25}} 
                            source={require('./images/adult_opal.png')} 
                        />
                    </View>
                    <View>
                        <Text style={optionsStyles.paymentText}>ADULT FARE</Text>
                        <Text style={optionsStyles.paymentSubtext}>Since 06/07/2019</Text>
                    </View>
                </View>
                {/* CHANGE CARD */}
                <View>
                    <Text style={optionsStyles.subheader}>Change Card</Text>
                </View>
                {/* ADULT FARE */}
                <View style={optionsStyles.lightRow}>
                    <Checkbox
                        status={checked1 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked1(!checked1);
                        }}
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
                        status={checked2 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked2(!checked2);
                        }}
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
                        status={checked3 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked3(!checked3);
                        }}
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
                        status={checked4 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked4(!checked4);
                        }}
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
                {/* INFO */}
                <View style={optionsStyles.infoRow}>
                    <Text style={optionsStyles.infoText}>
                        Some selection may require verification of eligibility
                        via phone call. Please co-operate with our customer
                        service agents if you wish to change your card type to
                        one of these selections.
                    </Text>
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
    marginLeft: 50,
    fontSize:25,
    fontWeight: "bold",
    color: "black"
},

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
    //justifyContent: 'center',
},

inputcontainer: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
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

const optionsStyles = StyleSheet.create({

    container: {

        display: 'flex',
        //alignItems: 'center',
        width: '100%',

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
        
        height: 60,
        width: '100%',

        backgroundColor: '#ececec',

    },

    darkRow: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        
        height: 60,
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
        paddingRight: 200,
        paddingLeft: 15,

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

    button: {

        width: 300,
        height: 55,
    
        margin: 75,
    
        borderRadius: 5000,
    
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    
        backgroundColor: '#c34242',

    },
    
    buttonText: {
        color: '#ececec',
        fontSize: 28,
        fontFamily: 'Roboto_700Bold',
    },


});