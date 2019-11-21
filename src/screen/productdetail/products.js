import React, { Component } from 'react'
import { View, ActivityIndicator, Text, ScrollView } from 'react-native'
import connection from '../../../network/Connection'
import Header from '../../components/header/header'
import ImageProducts from '../../components/productdetails/image'
import { connect } from 'react-redux'
import NameProduct from '../../components/productdetails/name'
import Description from '../../components/productdetails/description'
import Techspecs from '../../components/productdetails/techspec'
import Review from '../../components/productdetails/review'

class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    componentWillMount() {
        if(Object.keys(this.props.dataProduct).length> 0) {
            this.setState({data:this.props.dataProduct})
           return;
        }
        let url = "https://louis.pwa-commerce.com/simiconnector/rest/v2/products/"
        url = url + this.props.navigation.state.params.entity_id
        connection.requestData(url, this)
    }
    setData(data) {
        this.setState({ data: data })
        this.props.storeData("DATA_PRODUCT", data)
    }
    render() {
        console.log(this.props.dataProduct)
        if (this.state.data === null) {
            return (
                <View style={{ flex: 1 }}>
                    <Header parent={this} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" />
                    </View>
                </View>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                <Header parent={this} />
                <View>
                    <ScrollView style={{ marginBottom: 70, marginLeft: 3 }}>
                        <ImageProducts data={this.state.data} />
                        <NameProduct data={this.state.data} />
                        <Description />
                        <Techspecs />
                        <Review />
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataProduct: state.redux_data.dataProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeData: (type, data) => {
            dispatch({ type: type, data: data })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);