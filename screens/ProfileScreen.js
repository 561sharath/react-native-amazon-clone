import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { useEffect } from "react";
import CartScreen from "./CartScreen";
const ProfileScreen=()=>{

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:"",
            headerStyle:{
                backgroundColor:'#00CED1'
            },

            headerLeft: () => (
                <Image
                  style={{ width: 140, height: 120, resizeMode: "contain" }}
                  source={{
                    uri: "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png",
                  }}
                />
              ),

              headerRight: () => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                    marginRight: 12,
                  }}
                >
                  <Ionicons name="notifications-outline" size={24} color="black" />
        
                  <AntDesign name="search1" size={24} color="black" />
                </View>
              ),



        })

    },[])

    const navigation=useNavigation()

   
    return(
        <ScrollView style={{
            padding:10,
            flex:1,
            backgroundColor:'white'
        }}>
            <Text style={{
                fontSize:16,
                fontWeight:'bold'
            }}>
                Welcome User
            </Text>

            <View style={{
                flexDirection:'row',
                alignItems:'center',gap:10,
                marginTop:12
            }}>
                <Pressable onPress={navigation.navigate(CartScreen)}
                style={{
                    padding:10,
                    backgroundColor:'#E0E0E0',
                    borderRadius:25,
                    flex:1

                }}>
                    <Text style={{
                        textAlign:'center'
                    }}>
                        Your Orders
                    </Text>
                </Pressable>

                <Pressable style={{
                    padding:10,
                    backgroundColor:'#E0E0E0',
                    borderRadius:25,
                    flex:1

                }}>
                    <Text style={{
                        textAlign:'center'
                    }}>
                        Your Account
                    </Text>
                </Pressable>
            </View>

            <View style={{
                flexDirection:'row',
                alignItems:'center',gap:10,
                marginTop:12
            }}>
                <Pressable onPress={navigation.navigate("Main")}
                style={{
                    padding:10,
                    backgroundColor:'#E0E0E0',
                    borderRadius:25,
                    flex:1

                }}>
                    <Text style={{
                        textAlign:'center'
                    }}>
                        Buy Again
                    </Text>
                </Pressable>

                <Pressable
                style={{
                    padding:10,
                    backgroundColor:'#E0E0E0',
                    borderRadius:25,
                    flex:1

                }}>
                    <Text style={{
                        textAlign:'center'
                    }}>
                        Logout
                    </Text>
                </Pressable>
            </View>
            
        </ScrollView>
    )
}

export default ProfileScreen

const styles=StyleSheet.create({})