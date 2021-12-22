import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert} from 'react-native';
import Mybutton from '../components/Mybutton';
import Mybutton1 from '../components/Mybutton1';
import Mytext from '../components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import IconAg from 'react-native-vector-icons/Ionicons';

var db = openDatabase({ name: 'QLBanHang.db' });

const HomeScreen2 = ({route, navigation}) => {
  const userContact=route.params.userContact;
  const userName=route.params.userName;
  const userAddress=route.params.userAddress;
  console.log(userContact);
  //console.log(userName);
  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});
  let searchUser = () => {
    console.log(contact);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_contact = ?',
        [contact],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            console.log(res);
          } else {
            alert('No user found');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
        <View style={{flexDirection:'row', alignContent:'center', backgroundColor: 'white', padding: 15, justifyContent: 'flex-start'}}>
            <IconAg style={{alignSelf: 'center'}} name="person-circle-outline" color={'green'} size={60} />
            <View style={{flexDirection: 'column', alignSelf: 'center', alignItems: 'flex-start'}} >
                <Text>{userName}</Text>
                <Text>{userAddress}</Text>
            </View>
          </View>
          <View style={{borderColor: 'lightgray', borderWidth: 1}}/>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="receipt" color={'green'} size={30} />
                <Mybutton1
                    title='Đơn Hàng đặt cọc'
                    color='black'
                />
          </View>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="md-heart-circle" color={'deeppink'} size={30} />
                <Mybutton1
                    title='Tin nhắn đã lưu'
                    color='black'
                />
          </View>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="md-bookmark-sharp" color={'purple'} size={30} />
                <Mybutton1
                    title='Tìm kiếm đã lưu'
                    color='black'
                />
          </View>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="md-people-circle" color={'deepskyblue'} size={30} />
                <Mybutton1
                    title='Bạn bè'
                    color='black'
                />
          </View>
          <View style={{borderColor: 'lightgray', borderWidth: 0.5}}/>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="md-ribbon" color={'goldenrod'} size={30} />
                <Mybutton1
                    title='Đồng tốt'
                    color='black'
                />
          </View>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="newspaper-sharp" color={'goldenrod'} size={30} />
                <Mybutton1
                    title='Lịch sử giao dịch'
                    color='black'
                />
          </View>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="md-wallet" color={'goldenrod'} size={30} />
                <Mybutton1
                    title='Tài khoản nhận thanh toán'
                    color='black'
                />
          </View>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="md-add-circle-sharp" color={'goldenrod'} size={30} />
                <Mybutton1
                    title='Tạo cửa hàng/ Chuyên trang'
                    color='black'
                />
          </View>
          <View style={{borderColor: 'lightgray', borderWidth: 0.5}}/>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="fast-food" color={'limegreen'} size={30} />
                <Mybutton1
                    title='Chợ tốt ưu đãi'
                    color='black'
                />
          </View>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="md-sync-circle" color={'limegreen'} size={30} />
                <Mybutton1
                    title='Vòng quay may mắn'
                    color='black'
                />
          </View>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="md-gift" color={'limegreen'} size={30} />
                <Mybutton1
                    title='Chợ tốt khuyến mãi'
                    color='black'
                />
          </View>
          <View style={{borderColor: 'lightgray', borderWidth: 0.5}}/>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="md-help-buoy" color={'gray'} size={30} />
                <Mybutton1
                    title='Trợ giúp'
                    color='black'
                />
          </View>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="md-settings" color={'gray'} size={30} />
                <Mybutton1
                    title='Cài đặt'
                    color='black'
                />
          </View>
          <View style={{flexDirection:'row'}}>
                <IconAg style={{alignSelf: 'center', marginLeft: 20}} name="log-out" color={'gray'} size={30} />
                <Mybutton1                    
                    title='Đăng Xuất'
                    color='black'
                    customClick={
                        ()=>{Alert.alert('Ban da thoat'),
                            navigation.navigate('HomeScreen')}}
                />
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen2;