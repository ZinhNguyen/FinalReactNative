import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Alert} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import styles from '../components/Styles';
//import filter from "lodash.filter";
var filter = require('lodash.filter'); 
import Searching from './Searching'
import * as myConstClass from '../components/path'


const DATA = [
  // {
  //   id: "1",
  //   title: "Data Structures",
  // },
];
  
const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
};
  
const renderItem = ({ item }) => <Item title={item.title} />;
// function Cuoitrang  (text) {
//   return (
//     <Searching route={text} />
//     );
//   }


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
  Cuoitrang = (text) => {
      return(
        <Searching route={text} />
      )    
    }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Bạn muốn tìm gì?"
          lightTheme
          round
          //showLoading
          value={this.state.searchValue}
          onChangeText={(text) => 
            {this.searchFunction(text)
             this.Cuoitrang(text) 
            }}
          autoCorrect={false}
          
        />
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns = '2'
          ListFooterComponent={this.Cuoitrang(this.state.searchValue)}
        />
      </View>
    );
  }
}
  
export default Search;