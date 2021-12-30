import React, {Component, useState, useEffect} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from '../components/Styles';
//import {loaihoas} from './data/loaihoa.json';
// import Duongcach from './duongcach';
// import Dautrang from './dautrang';
import { useNavigation } from '@react-navigation/core'
import Slideshow from '../components/SlideShow'
import * as myConstClass from '../components/path'

const Category_Horizontal=()=>{
    const [isloaded, setDataLoaded] = useState(true);
    const [loaihoas, setLoaihoaData] = useState();

    const getLoaihoas = async () => {
      try {
        let response = await fetch('http://'+myConstClass.ip+'/api/Laydanhmuc');
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
            //   ItemSeparatorComponent={Duongcach}
              pagingEnabled={false}
            //  ListHeaderComponent={Header}
            //  ListFooterComponent={Cuoitrang}
                numColumns = '1'
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
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
            () => navigation.navigate('Product', {maloai: item.Maloai, tenloai: item.Tenloai})
        }>
            <View>
                <Loaihang ma={item.Maloai} ten={item.Tenloai} hinh={item.Hinh} />
            </View>
        </TouchableOpacity>
  );
}



function Loaihang({ma, ten, hinh}) {
  //console.log({hinh});
  return (
    <View key={ma} style={styles.ContainerImageIcon}>     
      <Image style={styles.ImageIcon} source ={{uri:hinh}}/>   
      <Text style={styles.iconContent}>{ten}</Text>
    </View>
  );
}


// function Header() {
//   return (
//     //<Dautrang image={require('./assets/daLat.jpg')}/>
//     <>
//         <Slideshow/>
//         <Categories/>
//     </>
//   );
// }

// function Cuoitrang() {
//   return (
//     <Dautrang image={require('./assets/vungTau.jpg')}/>
//   );
// }
}
export default Category_Horizontal;