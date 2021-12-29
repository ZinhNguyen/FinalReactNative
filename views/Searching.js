import React, {Component, useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image, Alert} from 'react-native';
import styles from '../components/Styles';
// import {hoas} from './data/hoa.json';
// import Duongcach from './duongcach';
// import Dautrang from './dautrang';
import { useNavigation } from '@react-navigation/core'
import * as myConstClass from '../components/path'



const Searching=({route})=>{
    const [isloaded, setDataLoaded] = useState(true);
    const [hoas, sethoaData] = useState(0);
    //const tenhang=route.params.Searching;
    
    const tenhang = route;
    const getloaihoas = async () => {
        try {
            let response = await fetch('http://'+myConstClass.ip+'/webapiqlbanhoa/api/LayTenHang?tenhang=%'+ tenhang + '%');
            let hoas = await response.json();
            //console.log(tenhang);
            sethoaData(hoas)
            setDataLoaded(false)
            console.log('api/LayTenHang?tenhang='+tenhang);
            //var r = 1
        } catch (error) {
          //console.error(error);
          
          //Alert.alert('Not found', route)    
          //searching() 
          //var r = 2;   
            
        }
    };
    useEffect (() => {
      //console.log('a');
      getloaihoas();
    },[tenhang]);

    const navigation = useNavigation();
    //const HoaChon=hoas.filter(x=>x.maloai==maloai);
        return(
            <>
            <FlatList
            data={hoas}
            keyExtractor={item=>item.mahang}
            renderItem={item=>renderItem(item)}
            //ItemSeparatorComponent={Duong}
            pagingEnabled={false}
            //ListHeaderComponent={THDautrang}
            ListFooterComponent={Cuoitrang}
            numColumns = '2'
            bounces
            //stickyHeaderIndices ={[0]}
            
            />
            </>
        )

function handleSelection (id){
    alert(id);
}

function renderItem({item, index}) {
    //console.log(item.tenhang);
  return (
    <TouchableOpacity
        onPress ={
          () => navigation.navigate('Detail1',
          {mahoa: item.mahang, 
            tenhang: item.tenhang, 
            dongia: item.dongia, 
            mota: item.mota, 
            hinh: item.hinh, 
            hinh1: item.hinh1, 
            hinh2: item.hinh2, 
            hinh3: item.hinh3})
        }>
            <View>           
                <Loaihang ma={item.mahang} ten={item.tenhang} dongia={item.dongia} hinh={item.hinh} />
            </View>
        </TouchableOpacity>
  );
}

function renderItem1(){
  return(
    <Text>Không tìm thấy {tenhang} </Text>
  )
}

function Loaihang({ma, ten, dongia, hinh}) {

  return (
    <View key={ma} style={styles.containerProduct}>
      <Image source={{uri:hinh}}
      style={styles.ImageProduct}
      />
      <Text style={styles.tieude}>{ten}</Text>
      <Text style={styles.price}>{dongia}đ</Text>
    </View>
  );
}



function searching() {
  return (
   console.log('1')
  )
}

function Cuoitrang() {
  return (
    <View style={{marginBottom: 60}}/>
    );
}

}
export default Searching;