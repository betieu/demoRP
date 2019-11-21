import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardItem } from 'native-base'

export default class Techspecs extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Text style={{fontWeight:'bold'}}>Tech Specs</Text> 
                </CardItem>
            </Card>
        )
    }
}
