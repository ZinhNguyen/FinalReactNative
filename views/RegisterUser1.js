import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import Styles from '../components/Styles'

var db = openDatabase({ name: 'QLBanHang.db' });

const RegisterUser = ({ navigation }) => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');
  let [userPassword, setUserPassword] = useState('');

  let register_user = () => {
    console.log(userName, userContact, userAddress, userPassword);

    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userContact) {
      alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    if (!userPassword) {
        alert('Please fill Password');
        return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'SELECT * FROM table_user where user_contact = ? or user_address = ?',
        [userContact, userAddress],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          
          if (len > 0) {
                Alert.alert(
                  'Lỗi',
                  'SDT / Mail đã được đăng ký! Bạn có muốn đăng nhập ?',
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                    },
                    {
                      text: 'Ok',                 
                      onPress: () => navigation.navigate('Login'),
                    },
                  ]
                );

          } else {
              tx.executeSql(
                'INSERT INTO table_user (user_name, user_contact, user_address, user_password) VALUES (?,?,?,?)',
                [userName, userContact, userAddress, userPassword],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    Alert.alert(
                      'Success',
                      'You are Registered Successfully',
                      [
                        {
                          text: 'Ok',
                          onPress: () => navigation.navigate('HomeScreen2',{
                            userContact : userContact, 
                            userName: userName,
                            userAddress: userAddress
                          }),
                        },
                      ],
                      { cancelable: false }
                    );
                  } else alert('Registration Failed');
                }
              );
          }
          }
      )
    });
  };
  const onPress = () => navigation.navigate('Login');
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
                    <Text style={Styles.loginTitle}>Đăng Ký </Text>                  
                </View>
                <View style={Styles.line}/>
                <View>
                    <Mytextinput
                        placeholder="Nhập Họ tên"
                        onChangeText={
                            (userName) => setUserName(userName)
                          }
                        style={{ padding: 10 }}
                    />
                </View>
                <View>
                    <Mytextinput
                        placeholder="Nhập số điện thoại"
                        onChangeText={
                            (userContact) => setUserContact(userContact)
                          }
                        maxLength={10}
                        keyboardType="numeric"
                        style={{ padding: 10 }}
                    />
                </View>
                <View>
                    <Mytextinput
                        placeholder="Nhập Email"
                        keyboardType="email-address"
                        onChangeText={
                            (userAddress) => setUserAddress(userAddress)
                        }
                        maxLength={225}
                        
                        
                        style={{ textAlignVertical: 'top', padding: 10 }}
                    />
                </View>
                <View>
                    <Mytextinput
                        placeholder="Nhập mật khẩu"
                        onChangeText={
                            (userPassword) => setUserPassword(userPassword)
                        }
                        secureTextEntry={true}
                        password={true}
                        style={{ padding: 10 }}
                    />
                </View>
                <Mybutton title="Đăng Ký" customClick={register_user} />
                <View style={Styles.loginCenter}>
                    <Text>Tôi đã có tài khoản </Text>
                    <TouchableOpacity
                      onPress={onPress}
                    >
                        <Text style={Styles.loginNow}> Đăng nhập ngay</Text>
                    </TouchableOpacity>
                </View>         
            </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterUser;