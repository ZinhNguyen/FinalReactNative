import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import styles from '../components/Styles';
//import filter from "lodash.filter";
var filter = require('lodash.filter'); 
import * as myConstClass from '../components/path'

// const Searching=()=>{

//   const [isloaded, setDataLoaded] = useState(true);
//  const [hoas, sethoaData] = useState();
//   //const tenhang=route.params.Searching;
//   const tenhang = 'áo';
//   console.log(tenhang);

  // const getloaihoas = async () => {
  //     try {
  //         let response = await fetch('http://'+myConstClass.ip+'/api/LayTenHang?tenhang=%'+ tenhang + '%');
  //         let hoas = await response.json();

  //         sethoaData(hoas)
  //         setDataLoaded(false)
  //         console.log('api/LayTenHang?tenhang='+tenhang);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     return(
  //       hoas
  //     )
  // };
//   useEffect (() => {
//     getloaihoas();
//   },[]);
//   return(
//     {hoas}
//   )
// }

// const DATA1 = Searching();
// const hoa = getloaihoas();
// console.log(hoa)

const DATA = [
  {
    id: "1",
    title: "Data Structures",
  },
  {
    id: "2",
    title: "STL",
  },
  {
    id: "3",
    title: "C++",
  },
  {
    id: "4",
    title: "Java",
  },
  {
    id: "5",
    title: "Python",
  },
  {
    id: "6",
    title: "CP",
  },
  {
    id: "7",
    title: "ReactJs",
  },
  {
    id: "8",
    title: "NodeJs",
  },
  {
    id: "9",
    title: "MongoDb",
  },
  {
    id: "10",
    title: "ExpressJs",
  },
  {
    id: "11",
    title: "PHP",
  },
  {
    id: "12",
    title: "MySql",
  },
];
  
const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
};
  
const renderItem = ({ item }) => <Item title={item.title} />;
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: DATA,
      error: null,
      searchValue: "",
    };
    this.arrayholder = DATA;
    //console.log(DATA);
  }
  
  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns = '2'
        />
      </View>
    );
  }
}
  
export default Search;