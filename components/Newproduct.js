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
    const maloai = 2;
    //console.log(maloai)
    const getloaihoas = async () => {
        try {
            let response = await fetch('http://webapibanhoa.somee.com/api/XulyController/LayHoaTheoLoai?maloai='+maloai);
            let hoas = await response.json();

            sethoaData(hoas)
            setDataLoaded(false)
            console.log('api/XulyController/LayHoaTheoLoai?maloai='+maloai);
        } catch (error) {
          console.error(error);
        }
    };
    useEffect (() => {
      getloaihoas();
    },[]);
    //const HoaChon=hoas.filter(x=>x.maloai==maloai);
        return(
            <>          
            <FlatList
            data={hoas}
            keyExtractor={item=>item.mahoa}
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
    console.log(item);
  return (
    <TouchableOpacity
        onPress ={
            () => handleSelection(item.mahoa)
        }>
            <View>
                <Loaihoa ma={item.mahoa} ten={item.tenhoa} mota={item.mota} hinh={item.hinh} />
            </View>
        </TouchableOpacity>
  );
}

function Loaihoa({ma, ten, mota, hinh}) {
    
  return (
    <View key={ma} style={styles.containerProduct}>
      <Image source={{uri:hinh}}
      style={styles.ImageProduct}
      />
      <Text style={styles.tieude}>{ten}</Text>
      {/* <Text style={styles.noidung}>{mota}</Text> */}
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