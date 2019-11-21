import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card, CardItem } from 'native-base'

export default class Description extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    render() {
        return (
            <TouchableOpacity onPress={()=> this.setState({isShow:!this.state.isShow})}>
                <Card>
                    <CardItem style={{flexDirection:'column'}}>
                        <Text style={{ fontWeight: 'bold', marginLeft:-255 }}>Description</Text>
                        {this.state.isShow && <Text style={{marginTop:10, marginLeft:-30}}>{this.props.data.product.description}</Text>}
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }
}
