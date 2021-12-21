// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Custom Button

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Mybutton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.customClick}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "deepskyblue",
    marginTop: 30,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500'
  },
});

export default Mybutton;