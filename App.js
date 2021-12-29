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
 import HomeScreen2 from './views/HomeScreen2';
 import RegisterUser from './views/RegisterUser1';
 import UpdateUser from './views/UpdateUser';
 import LoginUser from './views/Login'
 import ViewAllUser from './views/ViewAllUser1';
 import DeleteUser from './views/DeleteUser';
 import Timkiem from './views/Searching2';
 import Notify from './views/notification'
 
 
 const Tab= createBottomTabNavigator();
 const Drawer = createDrawerNavigator();
 const HomeNav=createStackNavigator();
 
 const NotificationFunction = () =>{
   return(
       <HomeNav.Navigator initialRouteName ="NotificationHome">
       <HomeNav.Screen
           name="NotificationHome"
           component={Notify}
           options={{
             title: 'Notification', //Set Header Title
             headerShown: false,
             headerStyle: {
               backgroundColor: 'deepskyblue', //Set Header color
             },
             headerTintColor: '#fff', //Set Header text color
             headerTitleStyle: {
               fontWeight: 'bold', //Set Header text style
             },
           }}
         />
     <HomeNav.Screen
       name='Detail1'
       component={Mh_detail1}
       options={({route}) => ({
         //headerShown: false,
         title: route.params.tenloai,
         headerTitleAlign:'center',
         headerTintColor: '#fff', //Set Header text color
       })}
     />
     </HomeNav.Navigator>
   )
 }
 
 const SearchingFunction = () =>{
   return(
       <HomeNav.Navigator initialRouteName ="SearchHome">
       <HomeNav.Screen
           name="SearchHome"
           component={Timkiem}
           options={{
             title: 'SearchHome', //Set Header Title
             headerShown: false,
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
       name='Detail1'
       component={Mh_detail1}
       options={({route}) => ({
         //headerShown: false,
         title: '',
         headerStyle: {
           backgroundColor: 'deepskyblue', //Set Header color
         },
         headerTitleAlign:'center',
         headerTintColor: '#fff', //Set Header text color
       })}
     />
     </HomeNav.Navigator>
   )
 }
 
 const UserInfor = () =>{
   return(
       <HomeNav.Navigator initialRouteName ="HomeScreen">
       <HomeNav.Screen
           name="HomeScreen"
           component={HomeScreen}
           options={{
             title: 'Home', //Set Header Title
             headerShown: false,
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
           name="HomeScreen2"
           component={HomeScreen2}
           options = {({route}) => ({
             headerShown:false,
             title: route.params.userName, //Set Header Title
             headerStyle: {
               backgroundColor: '#f4511e', //Set Header color
             },
             headerTintColor: '#fff', //Set Header text color
             headerTitleStyle: {
               fontWeight: 'bold', //Set Header text style
             },
           })}
         />
         <HomeNav.Screen
           name="Login"
           component={LoginUser}
           options={{
             //headerShown:false,
             title: '', //Set Header Title
             headerStyle: {
               backgroundColor: 'deepskyblue', //Set Header color
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
             //headerShown:false,
             title: '', //Set Header Title
             headerStyle: {
               backgroundColor: 'deepskyblue', //Set Header color
             },
             headerTintColor: '#fff', //Set Header text color
             headerTitleStyle: {
               fontWeight: 'bold', //Set Header text style
             },
           }}
         />
       </HomeNav.Navigator>
   )
 }
 
 const AccountFunction=()=>(
   <HomeNav.Navigator initialRouteName="UserInfor">
     <HomeNav.Screen
       name="UserInfor"
       component={UserInfor}
       options={{
         headerShown: false,
         tabBarHideOnKeyboard: true,
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
         tabBarHideOnKeyboard: true,
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
             <Tab.Screen name= "Notification" 
               component={NotificationFunction}
               options={{
                 tabBarLabel: 'notification',
                 headerTitleAlign: 'center',
                 headerTintColor: '#fff', //Set Header text color
                 headerStyle: {
                   backgroundColor: 'deepskyblue', //Set Header color
                 },
                 tabBarIcon: ({ color, size}) => (
                   <IconAg name="notifications-outline" color={color} size={30} />
                 )
               }}
             /> 
             <Tab.Screen name= "Searching" 
               component={SearchingFunction}
               options={{
                 tabBarHideOnKeyboard: true,
                 headerShown: false,
                 tabBarLabel: 'Searching',
                 tabBarIcon: ({ color, size}) => (
                   <IconAg name="search-outline" color={color} size={30} />
                 )
               }}
             />
             <Tab.Screen name= "User" 
               component={AccountFunction}
               options={{
                 tabBarHideOnKeyboard: true,
                 headerShown: false,
                 title: '',
                 headerTintColor: '#fff', //Set Header text color
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
          <StatusBar   
            //translucent 
            backgroundColor="deepskyblue"
            barStyle = "dark-content"
            hidden = {false}   
           />    
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