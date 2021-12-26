import React, {Component, useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from '../components/Styles';
// import {hoas} from './data/hoa.json';
// import Duongcach from './duongcach';
// import Dautrang from './dautrang';
import { useNavigation } from '@react-navigation/core'
import { StretchInX } from 'react-native-reanimated';
import { SearchBar } from 'react-native-elements';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton'
//import { Searchbar } from 'react-native-paper';



    // function Trans(ao, an) {
    //   return (
    //      an = ao
    //   );
    // }
    // const test = Trans('quần',test);
    // console.log({test});
    // const THDautrang = () => {
    //   const [searchQuery, setSearchQuery] = React.useState('');
    
    //   const onChangeSearch = query => setSearchQuery(query);
    //   //console.log(searchQuery)
    //   return (
    //     <Searchbar
    //       placeholder="Search"
    //       onChangeText={onChangeSearch}
    //       value={searchQuery}
    //     />
    //   );
    // };

const Searching=({route})=>{

    const [isloaded, setDataLoaded] = useState(true);
    const [hoas, sethoaData] = useState();
    //const tenhang=route.params.Searching;
    const tenhang = 'áo';
    console.log(tenhang);

    const getloaihoas = async () => {
        try {
            let response = await fetch('http://192.168.1.8/webapiqlbanhoa/api/LayTenHang?tenhang=%'+ tenhang + '%');
            let hoas = await response.json();

            sethoaData(hoas)
            setDataLoaded(false)
            console.log('api/LayTenHang?tenhang='+tenhang);
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
            //ItemSeparatorComponent={Duong}
            pagingEnabled={false}
            ListHeaderComponent={THDautrang}
            //ListFooterComponent={Cuoitrang}
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
//     //     <Searchbar
//     //     placeholder="Search"
//     //     onChangeText={onChangeSearch}
//     //     value={searchQuery}
//     //   />  
//     );
// }

}
export default Searching;

class THDautrang extends Component {

    state = {
      search: '',
    };
    updateSearch = (search) => {
      //console.log(search);
      this.setState({ search });
      //Searching(a=search);
    };
  
     render() {
      const { search } = this.state;
       return (
         <>
            <SearchBar
            containerStyle={{backgroundColor: 'deepskyblue'}}
            inputContainerStyle={{backgroundColor: 'white'}}
            placeholder="Ban can tim gi?"
            onChangeText={this.updateSearch}
            value={search}
            />
         </>
       )
     }
    }
  