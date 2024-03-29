import React from 'react'
import { View} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { ImageSlider} from "react-native-image-slider-banner";
import * as myConstClass from '../components/path'


const SlideShow1 = () =>{
        const navigation = useNavigation();
        return(
            <View> 
                <ImageSlider 
                    data={[                   
                      {img: 'http://'+myConstClass.ip+'/images/style2.jpg'},                      
                      {img: 'http://'+myConstClass.ip+'/images/style3.jpg'},                      
                      {img: 'http://'+myConstClass.ip+'/images/style4.jpg'},                      
                      {img: 'http://'+myConstClass.ip+'/images/style5.jpg'},                      
                      {img: 'http://'+myConstClass.ip+'/images/style6.jpg'},                      
                      {img: 'http://'+myConstClass.ip+'/images/style7.jpg'},                                                                                     
                    ]}
                    autoPlay={true}
                    //onItemChanged={(item) => console.log("item", item)}
                    //onClick={(item, index) => {alert('hello'+index)}}
                    onClick = {()=>navigation.navigate('Notification')}
                    closeIconColor="#fff"
                    caroselImageStyle={{height: 250}}               
                />
          </View> 
        )
    }
export default SlideShow1