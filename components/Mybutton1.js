import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Mybutton = (props) => {
    var back = props.backgroundColor
    var color = props.color
  return (
    <TouchableOpacity  
      style={[styles.button,{backgroundColor: back}]}
      onPress={props.customClick}>
      <Text style={[{color: color}]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center', 
    justifyContent: 'center', 
    color: '#ffffff',
    padding: 10,
    //marginTop: 16,
    marginLeft: 10,
    //marginRight: 35,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    height: 40
  },
  text: {
    backgroundColor:'red',
  },
});

export default Mybutton;