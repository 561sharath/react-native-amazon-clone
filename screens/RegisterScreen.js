import React from "react";
import { Alert, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";
import { auth, db } from "../firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


const RegisterScreen=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const navigation=useNavigation()

    const register=()=>{
        if(email==="" || password==="" || name===""){
            Alert.alert('Invalid Details', 'Please fill all the details', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);

        }
        createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            console.log("user credentials",userCredential)
            const user=userCredential._tokenResponse.email
            const myUserUid=auth.currentUser.uid

            setDoc(doc(db,"users",`${myUserUid}`),{
                email:user,
                name:name,
            }
            )

            navigation.navigate("Login")
            
        })
    }
    
    return(

        <SafeAreaView style={{
            flex:1,
            backgroundColor:"white",
            alignItems:'center',
            marginTop:30,
        }}>
            <View>
                <Image style={{
                    width:200,
                    height:200

                }}
                source={{uri:'https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png'}}
                />
                    
                
            </View>

            <KeyboardAvoidingView>

                <View style={{
                    alignItems:'center'
                }}>
                    <Text style={{
                        fontSize:17,
                        fontWeight:'bold',
                        marginTop:3,
                        color:'#041E42',
                        


                    }}>
                        Register to your Account 
                    </Text>
                </View>

                <View style={{
                    marginTop:30
                }}>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        gap:10,
                        backgroundColor:'#D0D0D0',
                        paddingVertical:5,
                        borderRadius:5,
                        marginTop:30


                    }}>
                    <Ionicons style={{
                        marginLeft:8
                    }}
                    name="person" size={24} color="black" />
                    <TextInput 
                    value={name}
                    onChangeText={(text)=>setName(text)}
                    style={{
                        color:'grey',
                        marginVertical:10,
                        width:320

                    }}
                    placeholder="enter your name"/>

                    </View>

                </View>

                <View>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        gap:10,
                        backgroundColor:'#D0D0D0',
                        paddingVertical:5,
                        borderRadius:5,
                        marginTop:30


                    }}>
                    
                    <MaterialIcons style={{
                        marginLeft:8
                    }} 
                    name="email" size={24} color="black" />
                    <TextInput 
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                    style={{
                        color:'grey',
                        marginVertical:10,
                        width:320

                    }}
                    placeholder="enter your email"/>

                    </View>

                </View>

                
                <View style={{
                    
                }}>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        gap:10,
                        backgroundColor:'#D0D0D0',
                        paddingVertical:5,
                        borderRadius:5,
                        marginTop:30


                    }}>
                    <Entypo style={{
                        marginLeft:8
                    }}
                    name="lock" size={24} color="black" />
                    <TextInput 
                    value={password}
                    onChangeText={(text)=>setPassword(text)}
                    style={{
                        color:'grey',
                        marginVertical:10,
                        width:320

                    }}
                    placeholder="enter your password"/>

                    </View>

                </View>

                

                <View style={{
                    marginTop:10,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                }}>
                    <Text>
                        Keep me Logged In
                    </Text>
                    <Text style={{
                        color:'#007FFF',
                        fontWeight:'500'
                    }}>
                        Forgot Password
                    </Text>
                </View>
                <View style={{
                    marginTop:80
                }}/>
                <Pressable onPress={register} 
                style={{
                    width:200,
                    backgroundColor:"#FEBE10",
                    borderRadius:6,
                    marginLeft:'auto',
                    marginRight:'auto',
                    padding:15,
    

                }}>
                    <Text style={{
                        color:'white',
                        textAlign:'center',
                        fontSize:16,
                        fontWeight:"bold"

                    }}>
                        Register
                    </Text>
                </Pressable>

                <Pressable onPress={()=> navigation.goBack()}
                style={{
                    marginTop:15
                }}>
                    <Text style={{
                        textAlign:'center',
                        color:'grey',
                        fontSize:16
                    }}>
                        Already have an Account? Sign In
                    </Text>
                </Pressable>

            </KeyboardAvoidingView>

        </SafeAreaView>    
    )
}

export default RegisterScreen

const styles=StyleSheet.create({})
