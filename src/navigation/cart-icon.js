import React from 'react';
import { View , TouchableHighlight, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Badge } from 'react-native-elements';

const ShoppingCarIcon =  props => (
    <View>
        <TouchableHighlight
        onPress = { ()=> props.cartItems.length>0 ? props.navigation.navigate('CartScreen') : alert('No tienes artículos en tu carrito de compras.')  }
        underlayColor = "#ccc">
            <View>
                <Badge containerStyle={{ backgroundColor: 'orange'}}>
                    <Text>{props.cartItems.length } items </Text>
                </Badge>
                <Icon
                    name='cart'
                    type='evilicon'
                    color='#517fa4'
                />
            </View>
        </TouchableHighlight>
    </View>
);

const mapDispatchToProsp = ( state ) => {
    return {
        cartItems: state
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 5
    },
    badget: {
        position: 'absolute',
        height: 30,
        width: 30,
        backgroundColor: 'red',
        right: 15, 
        bottom: 15,
    },
    badgetText: {
        fontWeight: 'bold',
        fontSize: 14,
    }
})

export default connect(mapDispatchToProsp, null)(withNavigation(ShoppingCarIcon));