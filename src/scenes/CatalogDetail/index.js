import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ProductDetail from "./components/product-detail";
import { addProductToCart } from '../../../actions/cart-actions-creator';

class CatalogDetail extends Component {

    constructor(props) {
        super(props);
    }   
    render() {
        return (
            <View style={styles.container}>
                <ProductDetail onPressEvent = { this.props.addItemToCart } navigation={ this.props.navigation } />                  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch(addProductToCart(product))      
    }   
}

export default connect(null, mapDispatchToProps)(CatalogDetail);
