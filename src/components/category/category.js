import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default class Category extends Component {
    render() {
        return (
           <View style={{marginTop:20}}>
               <Text style={{fontSize:18, fontWeight:'bold', marginLeft:15,}}>CATEGORIES</Text>
               <FlatList
               showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={this.props.data.homecategories}
                style={{marginLeft: 10}}
                renderItem={item => {
                    
                    return (
                        <TouchableOpacity>
                        <View style={{marginTop:20,  padding:5,marginLeft:5, overflow:'hidden'}} >
                            <Image 
                                source={{uri:item.item.simicategory_filename}}
                                style={{width:150,height:150,borderWidth:0.5, borderColor:'#e0dcdc',borderRadius:100}}
                            />
                         <View style={{marginTop: 5,}}><Text style={{textAlign:'center', fontSize:12, fontWeight:'bold'}}>{item.item.cat_name}</Text></View> 
                        </View>
                        </TouchableOpacity>
                    )
                }}
               />
           </View>
        )
    }
}
