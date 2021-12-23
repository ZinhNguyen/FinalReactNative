import React, {Component, useState, useEffect} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from '../components/Styles';
//import {loaihoas} from './data/loaihoa.json';
// import Duongcach from './duongcach';
// import Dautrang from './dautrang';
import { useNavigation } from '@react-navigation/core'
import Slideshow from '../components/SlideShow'

const Category_Horizontal_Bottom=()=>{
    const [isloaded, setDataLoaded] = useState(true);
    const [loaihoas, setLoaihoaData] = useState();

    const getLoaihoas = async () => {
      try {
        let response = await fetch('http://192.168.1.8/WebapiQLBanHoa/api/LayNhanHang');
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
              keyExtractor={item=>item.manhan}
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
            () => navigation.navigate('Product', {manhan: item.manhan})
        }>
            <View>
                <Loaihang ma={item.manhan} ten={item.tennhan} hinh={item.hinh} />
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

function Loaihang({ma, ten, hinh}) {
  //console.log({hinh});
  return (
    <View key={ma} style={styles.ContainerImageIcon}>     
      <Image style={styles.ImageIcon} source ={{uri:hinh}}/>   
      {/* <Text style={styles.iconContent}>{ten}</Text> */}
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
export default Category_Horizontal_Bottom;