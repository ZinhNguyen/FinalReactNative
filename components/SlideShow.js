import React, { Component } from 'react'
import { View, Button, Alert} from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import Flatlist_ve from '../components/Flatlist_vertical'
import { useNavigation } from '@react-navigation/core'

class SlideShow extends Component{
    constructor(props) {
      super(props);
      this.state = {
        images: [
          require('../public/images/hinhnen1.jpg'),
          require('../public/images/hinhnen2.jpg'),
          require('../public/images/hinhnen3.jpg'),
          require('../public/images/hinhnen4.jpg'),
          require('../public/images/hinhnen5.jpg'),
          require('../public/images/hinhnen6.jpg'),
          require('../public/images/hinhnen7.jpg'),
        ]
      };
    }; 
    render(){     
        return(
            <View>
                <SliderBox           
                images={this.state.images}
                sliderBoxHeight={180}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                //onCurrentImagePressed ={HomeScreen}
                
                dotColor="white"
                inactiveDotColor="#90A4AE"
                autoplay
                circleLoop
                />  
          </View> 
        )
    }
}
export default SlideShow 


// const HomeScreen = ({ navigation }) => {
//   //Alert.alert('1');
//   console.log('1');
//   () => navigation.navigate('Login')
// };