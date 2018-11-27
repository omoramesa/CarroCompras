import React, { Component } from "react";
import { 
    View
} from 'react-native';
import { CartInfo } from "./components/info-cart";

class Cart extends Component {
    constructor(props) {
        super(props);
    }   
    render() {
        return (
            <View>
                <CartInfo navigation={ this.props.navigation } />                  
            </View>
        );
    }
}
export default Cart;