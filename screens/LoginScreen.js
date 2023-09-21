import React from "react";
import { Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
const LoginScreen=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigation=useNavigation()

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((authUser)=>{
            if (authUser){
                navigation.navigate("Main")
            }
            else{
                navigation.navigate("Main")
            }
        })

        return unsubscribe
   },[])

    const login=()=>{
        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            console.log(userCredential)
            const user=userCredential.user
            console.log(user)
            navigation.navigate("Main")
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
                        marginTop:8,
                        color:'#041E42',
                        


                    }}>
                        Login in to your Account 
                    </Text>
                </View>
                <View style={{
                    marginTop:70
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
                    marginTop:10
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
                    secureTextEntry={true}

                    style={{
                        color:'grey',
                        marginVertical:10,
                        width:320

                    }}
                    placeholder="enter your password"/>

                    </View>

                </View>

                <View style={{
                    marginTop:12,
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
                <Pressable onPress={login}
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
                        Login
                    </Text>
                </Pressable>

                <Pressable onPress={()=> navigation.navigate("Register")}
                style={{
                    marginTop:15
                }}>
                    <Text style={{
                        textAlign:'center',
                        color:'grey',
                        fontSize:16
                    }}>
                        Don't have an Account? Sign Up
                    </Text>
                </Pressable>

            </KeyboardAvoidingView>

        </SafeAreaView>    
    )
}

export default LoginScreen

const styles=StyleSheet.create({})
