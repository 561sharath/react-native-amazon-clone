import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartReducer";
const ProductItems=({item})=>{
    const dispacth=useDispatch()
    const [addedToCart,setAddedToCart]=useState(false)
    const addItemToCart=(item)=>{
        setAddedToCart(true)
        dispacth(addToCart(item))
        setTimeout(() => {
           setAddedToCart(false) 
        }, 60000);
    }
    return(
        <>
        <Pressable style={{
            marginHorizontal:20,
            marginVertical:25
        }}>
            <Image style={{
                width:150,
                height:150
            }}
            source={{uri:item?.image}} />
            <Text numberOfLines={1}
            style={{
                width:150,
                marginTop:10
            }}>
                {item?.title}
            </Text>
            <View style={{
                marginTop:5,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
            }}>
                <Text style={{
                    fontSize:15,
                    fontWeight:'bold',

                }}>
                    <FontAwesome name="rupee" size={14} color="black" />{item?.price}
                </Text>
                <Text style={{
                    color:'#FFC72C',
                    fontWeight:'bold'
                }}>
                    {item?.rating?.rate} ratings
                </Text>
            </View>
            <Pressable onPress={()=>addItemToCart(item)}
            style={{
                backgroundColor:'#FFC72C',
                padding:10,
                borderRadius:20,
                justifyContent:'center',
                alignItems:'center',
                marginHorizontal:10,
                marginTop:10,

            }}>
                {addedToCart ? (
                    <View>
                        <Text>
                            Added to Cart
                        </Text>
                    </View>
                ):(
                    <Text>
                        Add to Cart
                    </Text>
                )}
                
            </Pressable>
        </Pressable>
        </>
    )
}

export default ProductItems

const styles=StyleSheet.create({

})