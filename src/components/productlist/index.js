import React, { Component } from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NavigationManager from '../../../helper/NavigationManager'


const widthDevice = Dimensions.get('window').width

export default class ItemProduct extends Component {

    render() {
        return (
            <TouchableOpacity onPress ={() => NavigationManager.openPage(this.props.parent.props.navigation,"ProductDetailsScreen", params={
                entity_id:this.props.data.item.entity_id})} >
                <View style={{
                    width: widthDevice / 2 - 10,
                    height: 200,
                    borderColor: '#e0dcdc',
                    borderWidth: 0.5,
                    borderRadius: 10,
                    marginLeft: 5,
                    marginBottom: 25,
                    overflow: 'hidden',
                    alignItems: 'center'
                }}>
                    <Image
                        source={{ uri: this.props.data.item.images[0].url }}
                        style={{ width: widthDevice / 2 - 20, padding: 5, height: 150, marginTop: 4, borderRadius: 10 }}
                    />
                    <Text style={{ marginTop: 5 }}>{this.props.data.item.name}</Text>
                    <Text style={{ color: 'red', fontSize: 12, marginTop: 5 }}>${this.props.data.item.app_prices.price}</Text>

                </View>
            </TouchableOpacity>
        )
    }
}
//entity_id
