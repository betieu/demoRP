import React, { Component } from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import Swiper from 'react-native-swiper'

const widthDevice = Dimensions.get('window').width

export default class Banner extends Component {
    constructor(props){
        super(props)
    }
    renderBanner(){
        let arrayBanner = []
        let data = this.props.data.homebanners;
        for(let i = 0; i < data.length; i++){
            arrayBanner.push(
                <View>
                    <Image 
                        source={{uri:data[i].banner_name}}
                        style={{width:'100%',height:'100%'}}
                    />
                </View>
            )
        }
        return arrayBanner
    }
    render() {
        return (
            <View style={{width:widthDevice- 10, height:200, borderRadius:20, marginLeft:5, marginRight:5, overflow:'hidden'}}>
                <Swiper height={200} autoplay={true} horizontal={true} autoplayTimeout={5}>
                   {this.renderBanner()}
                </Swiper>
            </View>
        )
    }
}
