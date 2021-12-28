import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import IconAg from 'react-native-vector-icons/MaterialCommunityIcons';

const notification = () => {
        return (
            <>
            <ScrollView>
            <View style ={{margin: 10, padding: 20, backgroundColor: 'white'}}>
                <View style= {{flexDirection: 'row', marginBottom: 5}}>
                    <IconAg name="emoticon-kiss-outline" color={'gold'} size={20} />
                    <Text style={{fontSize: 17, fontWeight: '700', color:'black', marginLeft: 5}}> Săn tin tốt, Hốt quà ngay! </Text>
                </View>
                <View style= {{flexDirection: 'row', marginBottom: 10}}>
                    <IconAg name="gift" color={'gold'} size={20} />
                    <Text style={{marginLeft: 5}}> Vào 11h30 mỗi ngày từ 19-23/1, bạn hãy săn tìm "Tin đăng đặc biệt" trên chuyên mục Đồ điện tử để nhận ngay voucher 500k và nhiều phần quà hấp dẫn khác </Text>
                </View>
                <View style= {{flexDirection: 'row', marginBottom: 5}}>
                    <IconAg name="hand-peace" color={'gold'} size={20} />
                    <Text style={{marginLeft: 5}}> Chhương trình sẽ bắt đầu trong 1 giờ nữa. Chúng tôi sẽ gợi ý, nhớ chú ý thông báo nhé </Text>
                </View>
                <View style= {{flexDirection: 'row'}}>
                    <IconAg name="hand-pointing-right" color={'gold'} size={20} />
                    <TouchableOpacity>
                        <Text style={{color:'blue', marginLeft: 5}}> Click xem ngay! </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style ={{margin: 10, backgroundColor: 'white'}}>
                <TouchableOpacity>
                 <Image style={{width:'100%'}} source={require('../public/images/hinhnen1.jpg')}/>
                </TouchableOpacity> 
                <View style ={{padding:20}}>
                    <Text style={{fontSize: 17, fontWeight: '700', color:'black', paddingBottom: 5}}>Ngồi nhà vẫn xem xe hơi tận mắt</Text>
                    <View style= {{flexDirection: 'row', marginBottom: 5, paddingBottom: 5}}>
                        <IconAg name="play-pause" color={'gray'} size={20} />
                        <Text style={{marginLeft: 5}}>Xem xe hơi chân thực, không dối lừa với hàng loạt tin đăng có video.</Text>
                    </View>                 
                    <View style= {{flexDirection: 'row'}}>
                    <IconAg name="hand-pointing-right" color={'gold'} size={20} />
                    <TouchableOpacity>
                        <Text style={{color:'blue', marginLeft: 5}}> Click xem ngay! </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            </ScrollView>
            </>
        )
}

export default notification