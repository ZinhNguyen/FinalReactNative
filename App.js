/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import {Text, View, StyleSheet, TextInput, Button, Animated, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAg from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SlideShow from './components/SlideShow'
import Flatlist_Ho from './components/Flatlist_horizontal'
import Flatlist_ve from './components/Flatlist_vertical'


const Tab= createBottomTabNavigator();
const Drawer = createDrawerNavigator();

class TabControl extends Component {
   render() {
     return (
       <>
          <Tab.Navigator 
            screenOptions={{
              tabBarStyle: {height: 60},
              tabBarLabelStyle: {fontSize: 15},
              //tabBarInactiveTintColor: 'gray',
              //tabBarActiveTintColor: 'blue',
            }}
          >
            <Tab.Screen name= "Master Detail" 
              component={Flatlist_ve}
              options={{
                tabBarHideOnKeyboard: 'true',
                headerShown: false,
                title: '',
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size}) => (
                  <IconAg name="home-outline" color={color} size={30} />
                )
              }}
            />
            <Tab.Screen name= "Cart" 
              component={Flatlist_Ho}
              options={{
                tabBarLabel: 'Cart',
                tabBarIcon: ({ color, size}) => (
                  <IconAg name="cart-outline" color={color} size={30} />
                )
              }}
            /> 
            <Tab.Screen name= "Message" 
              component={Flatlist_ve}
              options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({ color, size}) => (
                  <IconAg name="chat-outline" color={color} size={30} />
                )
              }}
            /> 
            <Tab.Screen name= "Wishlist" 
              component={Flatlist_Ho}
              options={{
                tabBarLabel: 'Wishlist',
                tabBarIcon: ({ color, size}) => (
                  <IconAg name="heart-outline" color={color} size={30} />
                )
              }}
            />
            <Tab.Screen name= "User" 
              component={Flatlist_ve}
              options={{
                tabBarLabel: 'User',
                tabBarIcon: ({ color, size}) => (
                  <IconAg name="account-circle-outline" color={color} size={30} />
                )
              }}
            /> 
        </Tab.Navigator>
       </>
    )
  }
}  

export class App extends Component {
  render() {
    return (
      // <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      // <View>
      //     <StatusBar   
      //       translucent 
      //       backgroundColor="transparent"
      //       barStyle = "dark-content"
      //       hidden = {false}   
      //     />  
      //   <SlideShow />
      //   <Flatlist_Ho/>
      //   <Flatlist_ve/>
      // </View>
      // </SafeAreaView>
      <>      
       <NavigationContainer>
         <Drawer.Navigator>
           <Drawer.Screen name = "Home" 
           component={TabControl}
           options={{
             headerShown: false,
             drawerLabel: 'Home',
             drawerIcon: ({color, size}) => (
               <IconAg name="home" color={color} size={size} />)
           }}/>
           <Drawer.Screen name="Flat" 
           component={Flatlist_ve}
           options={{
             drawerLabel: 'Select',
             drawerIcon: ({color, size}) => (
               <IconAg name="camera" color={color} size={size} />)
           }}/>
         </Drawer.Navigator>
       </NavigationContainer>
       </>
    )
  }
}

export default App
