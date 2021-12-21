// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view single user

import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView,} from 'react-native';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import IconAg from 'react-native-vector-icons/Ionicons';
import Styles from '../components/Styles'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

var db = openDatabase({ name: 'QLBanHang.db' });

const ViewUser = () => {
    
  let [inputUserId, setInputUserId] = useState('');
  let [inputUserName, setInputUserName] = useState('');
  let [userData, setUserData] = useState({});

  let searchUser = () => {
    console.log(inputUserId);
    console.log(inputUserName);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ? and user_name = ?',
        [inputUserId, inputUserName],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('Email/ Mật khẩu không đúng');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <View style={Styles.loginContainer}>
                <View>
                    <Text style={Styles.loginTitle}>Đăng Nhập </Text>                  
                </View>             
                <View style={Styles.line}/>
                <Mytextinput
                  placeholder="Nhập Email/ Số điện thoại"
                  onChangeText={
                    (inputUserId) => setInputUserId(inputUserId)
                  }
                  style={{ padding: 10 }}
                />
                <Mytextinput
                  placeholder="Nhập mật khẩu"
                  secureTextEntry={true}
                  onChangeText={
                    (inputUserName) => setInputUserName(inputUserName)
                  }
                  style={{ padding: 10 }}
                />
                <TouchableOpacity style={Styles.loginRight}>
                    <Text style={Styles.loginFogotText}>Quên mật khẩu?</Text>
                </TouchableOpacity>
                <Mybutton title="Search User" customClick={searchUser} />
                <View style={Styles.loginCenter}>
                    <Text>Bạn chưa có tài khoản? </Text>
                    <TouchableOpacity>
                        <Text style={Styles.loginNow}> Đăng ký ngay</Text>
                        
                    </TouchableOpacity>
                </View>  
                <View style={[Styles.loginCenter,{marginTop:30}]}>
                    <Text>Hoặc đăng nhập với</Text>
                </View>
                <View style={Styles.loginIconContainer}>
                {/* <IconAg style={{alignSelf: 'center'}} name="logo-facebook" color={'deepskyblue'} size={30} />
                <IconAg style={{alignSelf: 'center'}} name="logo-google" color={'deepskyblue'} size={30} />
                <IconAg style={{alignSelf: 'center'}} name="md-logo-apple" color={'black'} size={30}   /> */}
                    <TouchableOpacity>
                        <Image source={require('../public/images/facebook.png')} style={Styles.loginIcon} />
                    </TouchableOpacity>   
                    <TouchableOpacity >
                        <Image source={require('../public/images/google.png')} style={Styles.loginIcon} />
                    </TouchableOpacity>  
                    <TouchableOpacity >
                        <Image source={require('../public/images/apple.png')} style={Styles.loginIcon} />
                    </TouchableOpacity>     
                </View>           
            </View>
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10
            }}>
            <Text>User Id: {userData.user_id}</Text>
            <Text>User Name: {userData.user_name}</Text>
            <Text>User Contact: {userData.user_contact}</Text>
            <Text>User Address: {userData.user_address}</Text>
          </View>
          </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewUser;