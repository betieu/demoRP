import React, { Component } from 'react'
import {View, Image, Dimensions, Alert} from 'react-native'
import connection from '../../../network/Connection'
import {connect } from 'react-redux'
import NavigationManager from '../../../helper/NavigationManager'
import {Toast} from 'native-base'

const widthDevice = Dimensions.get('window').width
const heightDevice = Dimensions.get('window').height
class Splash extends Component {

    requestDataHome(){
            let url = "https://louis.pwa-commerce.com/simiconnector/rest/v2/homes";
            connection.requestData(url,this)

    }
    setData(data){
        if(data == 0){
            if(Object.keys(this.props.dataHome).length> 0) {
                console.log("1")
                Alert.alert('You are offline', 'Try shopping offline now', [
                    { text: 'Not now', onPress: () => {} },
                    { text: 'Try now', onPress: () => NavigationManager.openRootPage(this.props.navigation,'HomeScreen') }
                ])
                return
            }
            Toast.show({text: 'You are offline',textStyle: {textAlign:'center'},duration: 3000,type:'danger'});
            return
        }
        this.props.storeData('SAVE_DATA',data);
        NavigationManager.openRootPage(this.props.navigation,'HomeScreen')
    }
    render() {
        
        return (
            <View style={{flex:1}}>
                <Image 
                    source={require('../../../icon/Default.png')}
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