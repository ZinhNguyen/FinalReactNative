import React, { Component } from 'react'
import {Text, View, StyleSheet, TextInput, Button, Animated, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAg from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SlideShow from './SlideShow'
import Flatlist_Ho from './Flatlist_horizontal'
import Flatlist_ve from './Flatlist_vertical'
import Mh_LoaiHoa from '../views/mh_loaihoa'
import Mh_Hoa from '../views/mh_hoa'
import Mh_Master from '../views/home'
import Mh_detail1 from '../views/details'
import Mh_Product from '../views/product'
import Mh_ProductBrand from '../views/ProductBrand'


const Tab= createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HomeNav=createStackNavigator();

const Masterdetail = () => {
    return (
  <HomeNav.Navigator
    initialRouteName='Master'
    options={{headerTitleAlign:'center'}}
  >
    <HomeNav.Screen
      name='Master'
      component={Mh_Master}
      options={{
        headerShown: false,
        title:'Danh Sách Loài Hoa',
        headerTitleAlign: 'center'
      }}
    />
    <HomeNav.Screen
      name='Detail'
      component={Mh_Hoa}
      options={({route}) => ({
        title: route.params.tenloai,
        headerTitleAlign:'center',
      })}
    />
    <HomeNav.Screen
      name='Detail1'
      component={Mh_detail1}
      options={({route}) => ({
        //headerShown: false,
        title: route.params.tenloai,
        headerTitleAlign:'center',
      })}
    />
    <HomeNav.Screen
      name='Product'
      component={Mh_Product}
      options={({route}) => ({
        title: route.params.tenloai,
        headerTitleAlign:'center',
      })}
    />
    <HomeNav.Screen
      name='ProductBrand'
      component={Mh_ProductBrand}
      options={({route}) => ({
        title: route.params.tennhan,
        headerTitleAlign:'center',
      })}
    />
  </HomeNav.Navigator>
);
};

export default Masterdetail;