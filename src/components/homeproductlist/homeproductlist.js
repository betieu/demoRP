import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import NavigationManager from '../../../helper/NavigationManager'

export default class HomeProductList extends Component {
    render() {
        return (
            <View style={{ marginTop: 20, marginBottom: 50, }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 15, }}>PRODUCT LIST</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={this.props.data.homeproductlists}
                    style={{ marginLeft: 10 }}
                    renderItem={item => {
                        return (
                            <TouchableOpacity onPress ={() => NavigationManager.openPage(this.props.parent.props.navigation, "ProductListScreen", params = item.item)}>
                                <View style={{ marginTop: 20, padding: 5, marginLeft: 5, borderRadius: 10, borderWidth: 0.5, borderColor: '#e0dcdc', overflow: 'hidden' }} >
                                    <Image
                                        source={{ uri: item.item.list_image != null ? item.item.list_image : "" }}
                                        style={{ width: 150, height: 150 }}
                                    />
                                    <View style={{ marginTop: 5, }}><Text style={{ textAlign: 'center', fontSize: 12, fontWeight:'bold' }}>{item.item.list_title}</Text></View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }
}
