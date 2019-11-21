import React, { Component } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import NavigationManager from '../../../helper/NavigationManager'

const widthDevice = Dimensions.get('window').width

export default class Header extends Component {
    render() {
        return (
            <View style={{ width: widthDevice, flexDirection: 'row', height: 70, backgroundColor: 'orange', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                {this.props.parent.props.navigation.state.routeName != "HomeScreen" 
                && <TouchableOpacity style={{ position: 'absolute', top: 35, left: 10 }} 
                                    onPress={() => NavigationManager.backToPreviousPage(this.props.parent.props.navigation)}
                    >
                    <View >
                        <Image
                            source={require('../../../icon/arrow_back.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </View>
                </TouchableOpacity>}
                <Image
                    source={require('../../../icon/logo.png')}
                    style={{ width: 190, height: 50, marginLeft: -40, marginTop: 10 }}
                />
            </View>
        )
    }
}
