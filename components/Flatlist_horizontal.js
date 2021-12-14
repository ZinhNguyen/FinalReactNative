import React, {Component} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import styles from '../components/Styles';
import {loaihangs} from '../public/Json/loaihang.json';
//import Duongcach from './duongcach';


export class flatlist_horizontal extends Component {
  render() {
    return (
      <FlatList
        data={loaihangs}
        keyExtractor={item => item.maloai}
        renderItem={renderItem}
        // ItemSeparatorComponent={Duong}
        pagingEnabled={false}
        numColumns = '1'
        horizontal = {true}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

function renderItem({item}) {
  return (
    <View>  
      <Loaihang ma={item.maloai} ten={item.tenloai} hinh={item.hinh} />          
    </View>
  );
}

function Loaihang({ma, ten, hinh}) {
  console.log({hinh});
  return (
    <View key={ma} style={styles.ContainerImageIcon}>     
      <Image style={styles.ImageIcon} source ={{uri:hinh}}/>   
      <Text style={styles.tieude}>{ten}</Text>
    </View>
  );
}


// function Duong() {
//   return <Duongcach />;
// }




export default flatlist_horizontal;