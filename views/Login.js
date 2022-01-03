import React, { useState } from 'react';
import { Text, View, SafeAreaView, 
      Image, TouchableOpacity, ScrollView, 
      KeyboardAvoidingView, Alert
    } from 'react-native';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import IconAg from 'react-native-vector-icons/Ionicons';
import Styles from '../components/Styles'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

var db = openDatabase({ name: 'QLBanHang.db' });

const ViewUser = ({navigation}) => {
    
  let [inputUserContact, setInputUserContact] = useState('');
  let [inputUserMail, setInputUserMail] = useState('');
  let [inputUserPassword, setInputUserPassword] = useState('');
  let [userData, setUserData] = useState({});

  let Login = () => {
    console.log(inputUserContact);
    console.log(inputUserMail);
    console.log(inputUserPassword);
    if (!inputUserContact) {
      alert('Vui lòng nhập Mail hoặc SDT');
      return;
    }
    if (!inputUserPassword) {
        alert('Vui lòng nhập mật khẩu');
        return;
    }
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where (user_contact = ? or user_address = ?) and user_password = ?',
        [inputUserContact, inputUserMail, inputUserPassword],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          
          if (len > 0) {
            let res = results.rows.item(0);
            console.log(res.user_address);
            setUserData(results.rows.item(0));
            navigation.navigate('HomeScreen2',{
              userContact : inputUserContact, 
              userName: res.user_name,
              userAddress: res.user_address
            })
                // Alert.alert(
                //   'Success',
                //   'You are Login Successfully',
                //   [
                //     {
                //       text: 'Ok',                 
                //       onPress: () => navigation.navigate('HomeScreen2',{
                //         userContact : inputUserContact, 
                //         userName: res.user_name,
                //         userAddress: res.user_address
                //       }),
                //     },
                //   ],
                //   { cancelable: false }
                // );

          } else {
            alert('SDT/ Email/ Mật khẩu không đúng');
          }
        }
      );
    });
  };
  const onPress = () => navigation.navigate('Register');
  const onPress1 = () => navigation.navigate('HomeScreen');
  
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
                    (inputUserContact) => {
                      setInputUserContact(inputUserContact)
                      setInputUserMail(inputUserContact)
                    }
                  }
                  style={{ padding: 10 }}
                />
                <Mytextinput
                  placeholder="Nhập mật khẩu"
                  secureTextEntry={true}
                  onChangeText={
                    (inputUserPassword) => setInputUserPassword(inputUserPassword)
                  }
                  style={{ padding: 10 }}
                />
                <TouchableOpacity onPress={onPress1} style={Styles.loginRight} >
                    <Text style={Styles.loginFogotText}>Quên mật khẩu?</Text>
                </TouchableOpacity>
                <Mybutton title="Đăng Nhập" customClick={Login} />
                <View style={Styles.loginCenter}>
                    <Text>Bạn chưa có tài khoản? </Text>
                    <TouchableOpacity
                      onPress={onPress}
                    >
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
          {/* <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10
            }}>
            <Text>User Id: {userData.user_id}</Text>
            <Text>User Name: {userData.user_name}</Text>
            <Text>User Contact: {userData.user_contact}</Text>
            <Text>User Address: {userData.user_address}</Text>
          </View> */}
          </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewUser;