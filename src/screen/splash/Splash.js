import React, { Component } from 'react'
import {View, Image, Dimensions} from 'react-native'
import connection from '../../../network/Connection'
import {connect } from 'react-redux'
import NavigationManager from '../../../helper/NavigationManager'

const widthDevice = Dimensions.get('window').width
const heightDevice = Dimensions.get('window').height
class Splash extends Component {

    requestDataHome(){
        if(Object.keys(this.props.dataHome).length> 0) {
            NavigationManager.openRootPage(this.props.navigation,'HomeScreen')
        }
        else {
            let url = "https://louis.pwa-commerce.com/simiconnector/rest/v2/homes";
            connection.requestData(url,this)
        }
    }
    setData(data){

        this.props.storeData('SAVE_DATA',data);
        NavigationManager.openRootPage(this.props.navigation,'HomeScreen')
    }
    render() {
        
        return (
            <View style={{flex:1}}>
                <Image 
                    source={require('../../../media/Default.png')}
                    style={{width:widthDevice, height:heightDevice}}
                />
                {this.requestDataHome()}
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataHome : state.redux_data.dataHome
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeData:(type,data) => {
            dispatch({type:type,data:data})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);