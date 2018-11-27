import React, { Component } from "react";
import {  View  } from 'react-native';
import ProductDetail from "./components/product-detail";

import {connect} from 'react-redux'

class CatalogDetail extends Component {

    constructor(props) {
        super(props);
    }   
    render() {
        return (
            <View>
                <ProductDetail onPressEvent = {this.props.addItemToCart} navigation={ this.props.navigation } />                  
            </View>
        );
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        addItemToCart: ( product ) => dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }
}
export default connect (null, mapDispatchToProps) (CatalogDetail);
