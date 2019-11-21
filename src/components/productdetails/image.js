import React, { Component } from 'react'
import { View, Image, Dimensions } from 'react-native'
import { Card,CardItem } from 'native-base'

const widthDevice = Dimensions.get('window').width
export default class ImageProducts extends Component {
    render() {
        return (
            <Card style={{ marginLeft: 1, marginRight: 5,overflow:'hidden' }}>
                <CardItem>
                    <View style={{ width: '100%' }}>
                        <Image
                            resizeMode="stretch"
                            source={{ uri: this.props.data.product.images[0].url }}
                            style={{ width: '100%', height: 250 }} />
                    </View>
                </CardItem>
            </Card>
        )
    }
}
