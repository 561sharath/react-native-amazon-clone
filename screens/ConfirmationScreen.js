import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import React, { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome,MaterialIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const ConfirmScreen=()=>{
    const navigation=useNavigation()
    const cart=useSelector((state)=>state.cart.cart)
    const total =cart?.map((item)=>item.price*item.quantity).reduce((curr,prev)=>curr+prev,0)
    const [option,setOption]=useState(false)
    const [selectedOption,setSelectedOption]=useState("")
    const steps=[
        {title:"Address",content:"Address Form"},
        {title:"Delivery",content:"Delivery Options"},
        {title:"Payment",content:"Payment Details"},
        {title:"Place Order",content:"Order Summary"},
    ]
    const [selectedAddress,setSelectedAddress]=useState("")
    const [currentStep,setCureentStep]=useState(0)
    const [address,setAddress]=useState([
        {name:'Sharath kumar',
        _id:'efgurbfhurbfhur4bfb',
        mobileNo:'9160861371',
        houseNo:'21-8-5/6',
        landmark:'sadlapalli',
        postalCode:'515201',
        street:'hanuman temple'

        },
        {name:'Bharath kumar',
        _id:'eutr47675r8943hfuyrf',
        mobileNo:'9160861371',
        houseNo:'21-8-5/6',
        landmark:'sadlapalli',
        postalCode:'515201',
        street:'hanuman temple'

        },
        {name:'Shiva kumar',
        _id:'eiuyr847yruerbf8yu437',
        mobileNo:'9160861371',
        houseNo:'21-8-5/6',
        landmark:'sadlapalli',
        postalCode:'515201',
        street:'hanuman temple'

        },

    ])
    return(
        <ScrollView style={{
            marginTop:30
        }}>
            <View style={{
                flex:1,
                paddingHorizontal:20,
                paddingTop:40
            }}>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    marginBottom:20,
                    justifyContent:'space-between'
                }}>
                    {steps.map((step,index)=>(


                        <View style={{
                            justifyContent:'center',
                            alignItems:'center'
                        }}>

                            {index > 0 && (
                                <View style={({
                                    flex:1,
                                    height:2,
                                    backgroundColor:'green'
                                },index <= currentStep && {backgroundColor:'green'})}>
                                    
                                </View>
                            )}

                            

                            <View style={[
                                {
                                width:50,
                                height:50,
                                borderRadius:25,
                                backgroundColor:'#ccc',
                                justifyContent:'center',
                                alignItems:'center'
                                },
                                index < currentStep && {backgroundColor:'green'}
                            ]}
                            >
                                {index < currentStep ? (
                                    <Text style={{
                                        fontSize:16,
                                        fontWeight:'bold',
                                        color:'white',
                                        
                                    }}>&#10003;</Text>
                                ):(
                                    <Text style={{
                                        fontSize:16,
                                        fontWeight:'bold',
                                        color:'white'
                                    }}>{index+1}</Text>
                                )}
                            </View>
                            <Text style={{
                                textAlign:'center',
                                marginTop:8
                            }}>
                                {step.title}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
            {currentStep ==0 && (
                <View style={{ marginHorizontal:20}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:'bold'
                    }}>Select Delivery Address</Text>

                    <Pressable>
                        {address?.map((item,index)=>(
                            <Pressable style={{
                                borderWidth:1,
                                borderColor:'#D0D0D0',
                                padding:10,
                                flexDirection:'row',
                                alignItems:'center',
                                gap:5,
                                paddingBottom:17,
                                marginVertical:7,
                                borderRadius:6

                            }}>

                                {selectedAddress && selectedAddress._id === item?._id ? (

                                    <FontAwesome name="dot-circle-o" size={28} color="green" />

                                ):(
                                    <Entypo onPress={()=>setSelectedAddress(item)}
                                name="circle" size={24} color="black" />
                                )}
                                

                                <View style={{marginLeft:6}}>
                                <View
                                    style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
                                >
                                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                                    {item?.name}
                                    </Text>
                                    <Entypo name="location-pin" size={24} color="red" />
                                </View>

                                <Text style={{ fontSize: 15, color: "#181818" }}>
                                    {item?.houseNo}, {item?.landmark}
                                </Text>

                                <Text style={{ fontSize: 15, color: "#181818" }}>
                                    {item?.street}
                                </Text>

                                <Text style={{ fontSize: 15, color: "#181818" }}>
                                    India, Bangalore
                                </Text>

                                <Text style={{ fontSize: 15, color: "#181818" }}>
                                    phone No : {item?.mobileNo}
                                </Text>
                                <Text style={{ fontSize: 15, color: "#181818" }}>
                                    pin code : {item?.postalCode}
                                </Text>

                                <View
                                    style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    marginTop: 7,
                                    }}
                                >
                                    <Pressable
                                    style={{
                                        backgroundColor: "#F5F5F5",
                                        paddingHorizontal: 10,
                                        paddingVertical: 6,
                                        borderRadius: 5,
                                        borderWidth: 0.9,
                                        borderColor: "#D0D0D0",
                                    }}
                                    >
                                    <Text>Edit</Text>
                                    </Pressable>

                                    <Pressable
                                    style={{
                                        backgroundColor: "#F5F5F5",
                                        paddingHorizontal: 10,
                                        paddingVertical: 6,
                                        borderRadius: 5,
                                        borderWidth: 0.9,
                                        borderColor: "#D0D0D0",
                                    }}
                                    >
                                    <Text>Remove</Text>
                                    </Pressable>

                                    <Pressable
                                    style={{
                                        backgroundColor: "#F5F5F5",
                                        paddingHorizontal: 10,
                                        paddingVertical: 6,
                                        borderRadius: 5,
                                        borderWidth: 0.9,
                                        borderColor: "#D0D0D0",
                                    }}
                                    >
                                    <Text>Set as Default</Text>
                                    </Pressable>
                                </View>
                                <View>
                                    {selectedAddress && selectedAddress._id === item?._id &&(
                                        <Pressable onPress={()=>setCureentStep(1)}
                                        style={{
                                            backgroundColor:'#008397',
                                            padding:10,
                                            borderRadius:20,
                                            justifyContent:'center',
                                            alignItems:'center',
                                            marginTop:10
                                        }}>
                                            <Text style={{
                                                textAlign:'center',
                                                color:'white'
                                            }}>
                                                Deliver to this Address
                                            </Text>
                                        </Pressable>
                                    )}
                                </View>
                                </View>
                            </Pressable>
                        ))}
                    </Pressable>
                </View>
            )}

            {currentStep==1 && (
                <View style={{
                    marginLeft:18,
                    marginRight:10
                }}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}>Choose your delivery options</Text>

                    <View  style={{
                        flexDirection:'row',
                        alignItems:'center',
                        backgroundColor:'white',

                        padding:8,
                        gap:7,
                        borderColor:'#D0D0D0',
                        borderWidth:1,
                        marginTop:10
                    }}> 

                    {option ? (

                        <FontAwesome name="dot-circle-o" size={28} color="green" />

                    ):(

                        <Entypo onPress={
                            ()=>setOption(!option)
                        }
                        name="circle" size={24} color="black" />

                    )}
                        
                    
                    <Text style={{flex:1}}>
                    <Text style={{
                        color:'green',
                        fontWeight:'500'
                    }}>
                        Tommorow by 10pm
                    </Text>{" "}
                     - Free delivery with your prime membership
                    </Text>

                    </View>

                    <Pressable onPress={()=>setCureentStep(2)}
                    style={{
                        backgroundColor:'#FFC72C',
                        padding:10,
                        borderRadius:20,
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:10
    
                    }}>
                        <Text>
                            Continue
                        </Text>
                    </Pressable>
                </View>


            )}

            {currentStep==2 && (
                <View style={{marginHorizontal:20}}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}>
                        Select your Payment Method
                    </Text>
                    <View style={{
                        backgroundColor:'white',
                        padding:8,
                        borderColor:"#D0D0D0",
                        borderWidth:1,
                        flexDirection:"row",
                        alignItems:'center',
                        gap:7,
                        marginTop:10
                    }}>

                    {selectedOption === "cash" ?(

                        <FontAwesome name="dot-circle-o" size={28} color="green" /> 

                    ):(

                        <Entypo onPress={
                            ()=>setSelectedOption("cash")
                        }
                        name="circle" size={24} color="black" />

                    )}
                    
                    
                    <Text>
                        Cash on Delivery
                    </Text>
                    </View>

                    <View style={{
                        backgroundColor:'white',
                        padding:8,
                        borderColor:"#D0D0D0",
                        borderWidth:1,
                        flexDirection:"row",
                        alignItems:'center',
                        gap:7,
                        marginTop:10
                    }}>

                    {selectedOption === "card" ? (

                        <FontAwesome name="dot-circle-o" size={28} color="green" /> 

                    ):(
                        <Entypo onPress={
                            ()=>setSelectedOption("card")
                        }
                        name="circle" size={24} color="black" />
                    )}
                    
                    
                    <Text>
                        UPI / Credit Card
                    </Text>
                    </View>
                    <Pressable onPress={()=>setCureentStep(3)}
                    style={{
                        backgroundColor:'#FFC72C',
                        padding:10,
                        borderRadius:20,
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:10
    
                    }}>
                        <Text>
                            Continue
                        </Text>
                    </Pressable>
                </View>
            )}

            {currentStep === 3 && selectedOption==="cash" &&(
                <View style={{
                    marginHorizontal:20,

                }}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}>
                        Order Now
                    </Text>

                    <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Save 5% and never run out
              </Text>
              <Text style={{ fontSize: 15, color: "gray", marginTop: 5 }}>
                Turn on auto deliveries
              </Text>
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>

          <View style={{
            backgroundColor:'white',
            padding:8,
            borderColor:'#D0D0D0',
            borderWidth:1,
            marginTop:10
          }}>
            <Text>
              Shipping to {selectedAddress.name} 
            </Text>
            <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:"space-between",

                }}>
                <Text style={{
                    fontSize:16,
                    fontWeight:'500',
                    color:'grey'
                }}>
                    Items
                </Text>
                <Text style={{
                    color:'grey',
                    fontSize:16
    
                }}>
                    <FontAwesome name="rupee" size={14} color="black" />{total}
                </Text>
                
            </View>

            <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:"space-between",

                }}>
                <Text style={{
                    fontSize:16,
                    fontWeight:'500',
                    color:'grey'
                }}>
                    Delivery
                </Text>
                <Text style={{
                    color:'grey',
                    fontSize:16
    
                }}>
                    <FontAwesome name="rupee" size={14} color="black" />0
                </Text>
                
            </View>

            <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:"space-between",

                }}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'black'
                }}>
                    Order Total
                </Text>
                <Text style={{
                    color:'#C60C30',
                    fontSize:20,
                    fontWeight:'bold'
    
                }}>
                    <FontAwesome name="rupee" size={14} color="black" />{total}
                </Text>
                
            </View>
          </View>
          <View style={{
            backfaceVisibility:'white',
            padding:8,
            borderColor:'#D0D0D0',
            borderWidth:1,
            marginTop:10

        }} 
        >
            <Text style={{
                fontSize:16,
                color:'grey',

            }}>Pay With</Text>
            <Text style={{
                fontSize:16,
                fontWeight:'600'
            }}>Pay on Delivery (cash)</Text>

            
        </View>
        <Pressable onPress={()=>setCureentStep(4)}
        style={{
                backgroundColor:'#FFC72C',
                padding:10,
                borderRadius:20,
                justifyContent:'center',
                alignItems:'center',
                marginTop:20


            }}>
                <Text>Place your order</Text>
            </Pressable>

        </View>
            )}

        {currentStep === 4 &&(
            <View style={
                {
                    marginTop:100
                }
            }>
                <Image style={{
                    height:400,
                    width:400
                }}
                source={{uri:'https://images.squarespace-cdn.com/content/v1/6209fc508f791e729abec7d0/18641903-a848-4a3a-a0a3-c9e2ddaa15c4/02-lottie-tick-01-instant-2.gif'}}/>
                <Pressable onPress={()=>navigation.navigate("Home")}
        style={{
                backgroundColor:'#FFC72C',
                padding:10,
                borderRadius:20,
                justifyContent:'center',
                alignItems:'center',
                marginTop:20


            }}>
                <Text>Continue Shopping </Text>
            </Pressable>
            </View>
            
        )}

        
        </ScrollView>
    )
}

export default ConfirmScreen

const style=StyleSheet.create({})