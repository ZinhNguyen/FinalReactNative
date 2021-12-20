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
import IconAg from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SlideShow from './components/SlideShow'
import Flatlist_Ho from './components/Flatlist_horizontal'
import Flatlist_ve from './components/Flatlist_vertical'
import Mh_LoaiHoa from './views/mh_loaihoa'
import Mh_Hoa from './views/mh_hoa'
import Mh_Master from './views/home'
import Mh_detail1 from './views/details'
import Mh_Product from './views/product'
import MasterDetail from './components/Masterdetail'
import HomeScreen from './views/HomeScreen1';
import RegisterUser from './views/RegisterUser';
import UpdateUser from './views/UpdateUser';
import ViewUser from './views/ViewUser';
import ViewAllUser from './views/ViewAllUser';
import DeleteUser from './views/DeleteUser';


const Tab= createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HomeNav=createStackNavigator();


const AccountFunction=()=>(
  <HomeNav.Navigator initialRouteName="HomeScreen">
    <HomeNav.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title: 'Home', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    <HomeNav.Screen
      name="View"
      component={ViewUser}
      options={{
        title: 'View User', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    <HomeNav.Screen
      name="ViewAll"
      component={ViewAllUser}
      options={{
        title: 'View Users', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    <HomeNav.Screen
      name="Update"
      component={UpdateUser}
      options={{
        title: 'Update User', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    <HomeNav.Screen
      name="Register"
      component={RegisterUser}
      options={{
        title: 'Register User', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
    <HomeNav.Screen
      name="Delete"
      component={DeleteUser}
      options={{
        title: 'Delete User', //Set Header Title
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    />
  </HomeNav.Navigator>
)

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
              component={MasterDetail}
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
            <Tab.Screen name= "Chat" 
              component={Flatlist_Ho}
              options={{
                tabBarLabel: 'chat',
                tabBarIcon: ({ color, size}) => (
                  <IconAg name="chatbox-outline" color={color} size={30} />
                )
              }}
            /> 
            <Tab.Screen name= "Notification" 
              component={Flatlist_ve}
              options={{
                tabBarLabel: 'notify',
                tabBarIcon: ({ color, size}) => (
                  <IconAg name="notifications-outline" color={color} size={30} />
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
              component={AccountFunction}
              options={{
                tabBarLabel: 'User',
                tabBarIcon: ({ color, size}) => (
                  <IconAg name="person-outline" color={color} size={30} />
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
      // </View>
      // </SafeAreaView>
      <>    
         {/* <StatusBar   
           translucent 
            backgroundColor="transparent"
           barStyle = "dark-content"
           hidden = {false}   
          />     */}
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
