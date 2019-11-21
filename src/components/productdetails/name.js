import React, { Component } from 'react'
import { View } from 'react-native'
import { Card, CardItem, Text } from 'native-base'

export default class NameProduct extends Component {
    render() {
        
        return (
            <Card style={{marginRight:5}}>
                <CardItem>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{ fontWeight: 'bold' }}>{this.props.data.product.name}</Text>
                        <Text style={{ color: 'red' }}>${this.props.data.product.app_prices.price}</Text>
                    </View>
                </CardItem>
            </Card>
        )
    }
}
