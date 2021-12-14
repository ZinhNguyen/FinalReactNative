import React, {Component} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import styles from '../components/Styles';
import {hoas} from '../public/Json/hang.json';
// import Duongcach from './duongcach';
// import THDautrang from './dautrang';
// import FinalHFlatlist from './final_horizontal_flatlist'



export class Flatlist_vertical extends Component {
  render() {
    return (
        <>
      <FlatList
        data={hoas}
        keyExtractor={item => item.mahoa}
        renderItem={renderItem}
        //ItemSeparatorComponent={Duong}
        pagingEnabled={false}
        //ListHeaderComponent={Dautrang}
       // ListFooterComponent={Cuoitrang}
        numColumns = '2'
        horizontal = {false}
        bounces
      />
      </>
    );
  }
}

function renderItem({item}) {
  return (
    <View>    
      <Loaihoa ma={item.mahoa} ten={item.tenhoa} mota={item.mota} />     
    </View>
  );
}

function Loaihoa({ma, ten, mota}) {
  return (
    <View key={ma} style={styles.containerProduct}>
        <Image style={styles.ImageProduct} source ={require('../public/images/menu_dichvu.png')}/>
        <Text style={styles.tieude}>{ten}</Text>
      {/* <Text style={styles.noidung}>{mota}</Text> */}
    </View>
  );
}

// function Duong() {
//   return <Duongcach />;
// }

// function Dautrang() {
//   return (  
//     <View>
//         <FinalSlideShow image={require('./assets/daLat.jpg')}/>
//         <Text style={{margin: 10, fontWeight: 'bold'}}>Khám phá danh mục</Text>
//         <FinalHFlatlist/>
//         <Text style={{margin: 10, fontWeight: 'bold'}}>Gợi ý hôm nay</Text>
//     </View>
//   );
// }

// function Cuoitrang() {
//   return (
//     <THDautrang image={require('./assets/vungTau.jpg')}/>
//   );
// }
export default Flatlist_vertical;