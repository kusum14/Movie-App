import React from 'react';
import { View,Text, StyleSheet , Button, TextInput, Image, TouchableOpacity} from 'react-native';
import logo from '../images/Instagramlogo.png'

const LoginScreen=props=>{
    return(
        <View style={styles.screen}>
            <Image source={logo} style={styles.image}></Image>
            <TextInput style={styles.input}
            placeholder={"Phone number, username or email"}/>

            <TextInput style={styles.input}
            placeholder="Password"/>

            <TouchableOpacity style={styles.button} 
            onPress={()=>{
                props.navigation.navigate({routeName: 'Display'})}}>
                    <Text style={styles.login}> LOGIN </Text>
                </TouchableOpacity>
            
        </View>
    )
};

const styles=StyleSheet.create({
    screen:{
        flex:0.8,
        justifyContent:'center',
        alignItems:'center',
        color: 'white',
        marginBottom:20
    },
    image:{
        width:300,
        height:100,
        borderRadius: 25
    },
    input:{
        width: "90%",
        padding: 20,
        borderBottomWidth:0.5,
        marginTop:5,
        marginBottom:5,
         borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopWidth:0.5,
         borderRadius: 5,
       // height: 100
    },
    button:{
        backgroundColor: '#4c68d7',
        width:"90%",
        borderRadius: 5,
        height:50,
        //alignItems:"center",
        marginTop:40,
        marginBottom:40,
        height:45,
        padding:15,
        paddingVertical:14,
        alignItems:"center",
        justifyContent:"center"
    },
    login:{
        alignItems:"center",
        justifyContent:"center"
    }
    
});

export default LoginScreen;