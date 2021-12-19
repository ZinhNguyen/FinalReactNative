import {ThemeProvider} from '@react-navigation/native'
import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import {useNavigation} from '@react-navigation/core'
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
import IconAg from 'react-native-vector-icons/Ionicons';
import styles from '../components/Styles'

const Detail =({route})=>{
    // const username=route.params.username;
    // const phone=route.params.mahoa;
    const mahoa=route.params.mahoa;
    const tenhoa=route.params.tenhoa;
    const dongia=route.params.dongia;
    const mota=route.params.mota;
    const hinh=route.params.hinh;
    return(
        <View style={{flexDirection:'column'}}>           
            <Image style={{alignSelf: 'center' ,resizeMode: 'stretch', width: '100%', height: 200,}} source={{uri:hinh}}/>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '600', padding: 10 }}>Tenhoa: {tenhoa}</Text>
            <Text style={{color: 'red', fontSize: 20, paddingLeft: 10, paddingBottom: 5 }}>{dongia} đ</Text>
            <Text style={{color: 'gray', fontSize: 15, fontWeight: 'normal', paddingLeft: 10, paddingBottom: 10 }}>15 giờ trước</Text>         
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'normal', paddingLeft: 10 }}>
                <IconAg name="location-outline" color={'black'} size={25} />
                 Quận bình thạnh, TP hồ chí minh 
            </Text>
            <Text style={{borderBottomWidth: 1, borderBottomColor: 'lightgray', width: '95%', alignSelf: "center"}}></Text>
            <View>
                <View style={{flexDirection: 'row'}}>
                     <IconAg name="person-circle-outline" color={'black'} size={50} /> 
                     <View style={{justifyContent: 'center'}}>
                        <Text>Tu Hao</Text> 
                        <Text>
                            <IconAg style={{alignSelf:'center'}} name="ios-ellipse" color={'green'} size={10} />
                            Hoạt động 2 giờ trước
                        </Text> 
                     </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: "space-around"}}>
                     <View style={{flexDirection:'column'}}>
                         <Text>Cá nhân</Text>
                        <IconAg style={{alignSelf:'center'}} name="person-circle-outline" color={'black'} size={15} />  
                     </View>
                     <View style={{flexDirection:'column'}}>
                         <Text style={{alignSelf:'center'}}>Đánh giá</Text>
                         <View style={{flexDirection:'row',alignSelf:'center' }}>
                            <IconAg name="star" color={'gold'} size={15} />  
                            <IconAg name="star" color={'gold'} size={15} />  
                            <IconAg name="star" color={'gold'} size={15} />  
                            <IconAg name="star" color={'gold'} size={15} />  
                            <IconAg name="star-half-sharp" color={'gold'} size={15} />  
                         </View>
                     </View>
                     <View style={{flexDirection:'column'}}>
                         <Text>Phản hồi chat</Text>
                         <Text style={{alignSelf:'center', fontSize: 15, color: 'black', fontWeight:'600'}}>83%</Text>
                     </View>
                </View>
            </View>
            <Text style={{borderBottomWidth: 1, borderBottomColor: 'lightgray', width: '95%', alignSelf: "center"}}></Text>
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'normal', padding: 10 }}>{mota}</Text>
        </View>
    )
}
const gioithieu="Toyota Raize vừa ra mắt thị trường Việt, giá từ 527 triệu đồng. Với thiết kế trẻ trung, trang bị tiện nghi hiện đại cùng giá hấp dẫn,… hứa hẹn là lựa chọn đáng giá cho người trẻ."
export default Detail