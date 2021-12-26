import React, {Component, useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from '../components/Styles';
//import {loaihoas} from './data/loaihoa.json';
// import Duongcach from './duongcach';
// import Dautrang from './dautrang';
import { useNavigation } from '@react-navigation/core'
import Slideshow from '../components/SlideShow'
import Categories from '../components/Category_Horizontal'
import Categories_Bottom from '../components/Category_Horizontal_Bottom'
import Newproduct from '../components/Newproduct'
import Categories_inner from '../components/Flatlist_horizontal'
import Title from '../components/Title_cate'

const HomeApps=()=>{
  const [isloaded, setDataLoaded] = useState(true);
  const [hoas, sethoaData] = useState();
  //const maloai=route.params.maloai;
  const maloai = 1;
  //console.log(maloai)
  const getloaihoas = async () => {
      try {
          let response = await fetch('http://192.168.1.8/webapiqlbanhoa/api/LayNhanHang');
          let hoas = await response.json();

          sethoaData(hoas)
          setDataLoaded(false)
          //console.log('api/LayNhanHang');
      } catch (error) {
        console.error(error);
      }
  };
  useEffect (() => {
    getloaihoas();
  },[]);
  const navigation = useNavigation();
    //console.log(loaihoas);
        return(
            <View>
              {isloaded ? <ActivityIndicator /> :
              <FlatList
                //data={hoas}
                keyExtractor={item=>item.manhan}
                renderItem={item=>renderItem(item)}
            //  ItemSeparatorComponent={Duongcach}
                pagingEnabled={false}
                ListHeaderComponent={Header}
            //    ListFooterComponent={Footer}
            />}
            </View>

        )

function handleSelection (id){
    alert(id);
}

function renderItem({item, index}) {
    //console.log(item.Maloai);
  return (
    <TouchableOpacity
        onPress ={
            () => navigation.navigate('Detail', {maloai: item.Maloai})
        }>
            <View>
                <Loaihoa ma={item.manha} ten={item.tennhan}/>
            </View>
        </TouchableOpacity>
  );
}

function Loaihoa({ma, ten}) {
  return (
    <View key={ma}>
      <Text style={styles.tieude}>{ten}</Text>
    </View>
  );
}



function Header() {
  return (
    //<Dautrang image={require('./assets/daLat.jpg')}/>
    <>
        <Slideshow/>
        <Title content ="Khám phá danh mục"/>
        <Categories/>       
        <Title content ="Tin mới đăng"/> 
        <Newproduct/>
        {/* <Title content ="Hàng Chính Hãng"/> */}
        <Categories_Bottom/>         
    </>
  );
}

// function Footer() {
//   return (
//       <>

//       </>

//   );
// }
}
export default HomeApps;