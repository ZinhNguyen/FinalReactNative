// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Custom TextInput

import React from 'react';
import { View, TextInput } from 'react-native';

const Mytextinput = (props) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        paddingBottom: 1,
        marginTop: 20,
      }}>
      <TextInput
        underlineColorAndroid={props.underlineColorAndroid}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={true}
        value={props.value}
        secureTextEntry={props.secureTextEntry} 
      />
    </View>
  );
};

export default Mytextinput;