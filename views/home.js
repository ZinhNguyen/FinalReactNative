import React, {Component, useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from '../components/Styles';
//import {loaihoas} from './data/loaihoa.json';
// import Duongcach from './duongcach';
// import Dautrang from './dautrang';
import { useNavigation } from '@react-navigation/core'
import Slideshow from '../components/SlideShow'
import Categories from '../components/Category_Horizontal'
import Newproduct from '../components/Newproduct'
import Categories_inner from '../components/Flatlist_horizontal'
import Title from '../components/Title_cate'

const HomeApps=()=>{
    const [isloaded, setDataLoaded] = useState(true);
    const [loaihoas, setLoaihoaData] = useState();

    const getLoaihoas = async () => {
      try {
        let response = await fetch('http://192.168.1.8/webapiqlbanhoa/api/Laydanhmuc');
        let loaihoa = await response.json();

        setLoaihoaData(loaihoa);
        setDataLoaded(false);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        getLoaihoas();
    },[]);

    const navigation = useNavigation();
    //console.log(loaihoas);
        return(
            <View>
              {isloaded ? <ActivityIndicator /> :
              <FlatList
                data={loaihoas}
                keyExtractor={item=>item.Maloai}
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
                <Loaihoa ma={item.Maloai} ten={item.Tenloai}/>
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