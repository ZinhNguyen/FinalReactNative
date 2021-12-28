import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Mybutton from '../components/Mybutton';
import Mybutton1 from '../components/Mybutton1';
import Mytext from '../components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
import { ScrollView } from 'react-native-gesture-handler';
import IconAg from 'react-native-vector-icons/Ionicons';

var db = openDatabase({ name: 'QLBanHang.db' });

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255), user_password VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <View style={{flexDirection:'row', alignContent:'center', backgroundColor: 'deepskyblue', padding: 15, justifyContent: 'space-between'}}>
            <IconAg style={{alignSelf: 'center'}} name="person-circle-outline" color={'grey'} size={60} />
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Mybutton1
                    backgroundColor = 'white'
                    color = 'black'
                    title ='Đăng Nhập'
                    customClick={()=>navigation.navigate('Login')}
                />
                <Mybutton1
                    color = 'white'
                    title ='Đăng Ký'
                    customClick={()=>navigation.navigate('Register')}
                />
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
          <View style={{backgroundColor: 'white', padding: 20}}>
          </View>
          {/* <Mybutton
            title="Register"
            customClick={() => navigation.navigate('Register')}
          />
          <Mybutton
            title="Update"
            customClick={() => navigation.navigate('Update')}
          />
          <Mybutton
            title="View"
            customClick={() => navigation.navigate('View')}
          />
          <Mybutton
            title="View All"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <Mybutton
            title="Delete"
            customClick={() => navigation.navigate('Delete')}
          /> */}
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;