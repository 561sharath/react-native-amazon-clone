import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ProductInfoScreen from "../screens/ProductInfoScreen";
import AddAddressScreen from "../screens/AddAddressScreen";
import AddressScreen from "../screens/AddressScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConfirmScreen from "../screens/ConfirmationScreen";
const StackNavigator=()=>{
    const Stack = createNativeStackNavigator();
    const Tab=createBottomTabNavigator()
    function BottomTabs(){
        return(
            <Tab.Navigator >
                <Tab.Screen
                
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel:"Home",
                        tabBarLabelStyle:{color:"#008E97"},
                        headerShown:false,
                        tabBarIcon:({focused})=>
                        focused ? (
                            <Entypo name="home" size={24} color="black" />
                        ) :(
                            <Entypo name="home" size={24} color="lightblue" />
                        )

                    }}
                />
                
                <Tab.Screen
                    name="profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel:"profile",
                        tabBarLabelStyle:{color:"#008E97"},
                        
                        tabBarIcon:({focused})=>
                        focused ? (
                            <Ionicons name="person" size={24} color="black" />
                        ) :(
                            <Ionicons name="person" size={24} color="lightblue" />
                        )

                    }}
                />

<Tab.Screen
                    name="cart"
                    component={CartScreen}
                    options={{
                        tabBarLabel:"cart",
                        tabBarLabelStyle:{color:"#008E97"},
                        headerShown:false,
                        tabBarIcon:({focused})=>
                        focused ? (
                            <FontAwesome name="shopping-cart" size={24} color="black" />
                        ) :(
                            <FontAwesome name="shopping-cart" size={24} color="lightblue" />
                        )

                    }}
                />
            </Tab.Navigator>
            
        )
    }
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
          <Stack.Screen name="Info" component={ProductInfoScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Address" component={AddAddressScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Add" component={AddressScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Confirm" component={ConfirmScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default StackNavigator

const styles=StyleSheet.create({})
