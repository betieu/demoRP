import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../../components/header/header'
import ItemProduct from '../../components/productlist/index'

class ProductList extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header parent={this}/>
                <View>
                    <ScrollView style={{ marginBottom: 70,marginLeft:3 }}>
                        <FlatList 
                            style={{flexDirection: 'column',}}
                            numColumns={2}
                            data={this.props.navigation.state.params.product_array.products}
                            renderItem={ item => {
                                return <ItemProduct parent={this} data={item}/>
                            }}
                        />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default ProductList
