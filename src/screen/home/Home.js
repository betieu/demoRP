import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Banner from '../../components/home/banner'
import { connect } from 'react-redux'
import Header from '../../components/header/header'
import Category from '../../components/category/category'
import { ScrollView } from 'react-native-gesture-handler'
import HomeProductList from '../../components/homeproductlist/homeproductlist'

class Home extends Component {
    render() {
        return (
                <View style={{ flex: 1 }}>
                    <Header parent={this}/>
                    <View>
                    <ScrollView style={{marginBottom: 50,}}>
                        <Banner data={this.props.dataHome.home.homebanners} />
                        <Category data={this.props.dataHome.home.homecategories} />
                        <HomeProductList data={this.props.dataHome.home.homeproductlists} parent={this}/>
                    </ScrollView>
                    </View>
                </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataHome: state.redux_data.dataHome
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeData: (type, data) => {
            dispatch({ type: type, data: data })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
