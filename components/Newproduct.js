import React, {Component, useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from '../components/Styles';
// import {hoas} from './data/hoa.json';
// import Duongcach from './duongcach';
// import Dautrang from './dautrang';
import { useNavigation } from '@react-navigation/core'

const Newproduct=({route})=>{

    const [isloaded, setDataLoaded] = useState(true);
    const [hoas, sethoaData] = useState();
    //const maloai=route.params.maloai;
    const maloai = 1;
    //console.log(maloai)
    const getloaihoas = async () => {
        try {
            let response = await fetch('http://192.168.1.8/webapiqlbanhoa/api/LayLoaiHang?maloai='+maloai);
            let hoas = await response.json();

            sethoaData(hoas)
            setDataLoaded(false)
            //console.log('api/LayLoaiHang?maloai='+maloai);
        } catch (error) {
          console.error(error);
        }
    };
    useEffect (() => {
      getloaihoas();
    },[]);
    const navigation = useNavigation();
    //const HoaChon=hoas.filter(x=>x.maloai==maloai);
        return(
            <>          
            <FlatList
            data={hoas}
            keyExtractor={item=>item.mahang}
            renderItem={item=>renderItem(item)}
            // ItemSeparatorComponent={Duong}
            pagingEnabled={false}
            // ListHeaderComponent={THDautrang}
            // ListFooterComponent={Cuoitrang}
            numColumns = '2'
            bounces
            />
            </>
        )

function handleSelection (id){
    alert(id);
}

function renderItem({item, index}) {
    //console.log(item);
  return (
    <TouchableOpacity
        onPress ={
          () => navigation.navigate('Detail1', 
          {mahoa: item.mahang, tenhang: item.tenhang, dongia: item.dongia, mota: item.mota, hinh: item.hinh})
        }>
            <View>
                <Loaihang ma={item.mahang} ten={item.tenhang} dongia={item.dongia} hinh={item.hinh} />
            </View>
        </TouchableOpacity>
  );
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

// function Duong() {
//   return <Duongcach />;
// }

// function THDautrang() {
//   return (
//     <Dautrang image={require('./assets/daLat.jpg')}/>
//   );
// }

// function Cuoitrang() {
//   return (
//     <Dautrang image={require('./assets/vungTau.jpg')} style={styles.Dautrang}/>
//   );
// }
}
export default Newproduct;