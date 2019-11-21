import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardItem } from 'native-base'

export default class Review extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Text style={{fontWeight:'bold'}}>Review</Text> 
                </CardItem>
            </Card>
        )
    }
}
