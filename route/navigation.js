import React, {Component} from "react";
import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Splash from "../src/screen/splash/Splash";
import Home from "../src/screen/home/Home";
import ProducList from '../src/screen/product/productlist'
import ProductDetails from '../src/screen/productdetail/products'

const Stack = createStackNavigator({
    SplashScreen:{screen:Splash},
    HomeScreen:{ screen:Home},
    ProductListScreen:{screen:ProducList},
    ProductDetailsScreen:{screen:ProductDetails}
},
{
    headerMode:'none',
    initialRouteName:'SplashScreen',
})
const AppContainer = createAppContainer(Stack)

export default AppContainer;