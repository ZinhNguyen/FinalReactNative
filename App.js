/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import SlideShow from './components/SlideShow'


export class App extends Component {
  render() {
    return (
      <View>
          <StatusBar   
            translucent 
            backgroundColor="transparent"
            barStyle = "dark-content"
            hidden = {false}   
          />  
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <SlideShow />
      </View>
    )
  }
}

export default App
