import React from 'react';
import {Text, View, Button, StyleSheet,ScrollView,} from 'react-native';
import { withNavigation } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import ItemSeparator from '../../Catalogo/componentes/item-separator';
import CartItem from './item-cart';

renderItem = ( { item }) => <CartItem product = { item } />
separatorComponent = () => <ItemSeparator />;
emptyComponent = () => <Text>El carrito se encuentra vacio.</Text>
keyExtractor = item => item._id.toString();
// const total = 0;
// totalPurchase = (props) => {
//     props.cartItems.map((item) => (
//         total += parseInt(item.price)
//     ))
// }
const CartList = (props) => (
    <ScrollView>
        { props.cartItems.length > 0 &&
            <View>
                {/* <Text style={ styles.title }>Total</Text> */}
                <Button
                    title ="Continuar comprando"
                    onPress = { ()=> props.navigation.navigate('CatalogScreen') }
                />
                <Button
                    title ="Realizar Compra"
                    //onPress = { ()=>{ this.totalPurchase(props) } }
                    onPress = { ()=> props.navigation.navigate('FormScreen') }
                />
            </View>
        }
        {
            props.cartItems.length == 0 &&
            <Text style={ styles.title }> No tienes productos en tu carrito de compras.</Text>
        }
        <List containerStyle={{marginBottom: 20}}>
            {
                props.cartItems.map((item) => (
                    <ListItem
                        avatar={{uri:item.avatar}}
                        key={item._id}
                        title={item.name}
                        subtitle={item.price}
                    />
                ))
            }
        </List>
    </ScrollView>
);

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontFamily: "IndieFlower"
    },
})

const mapDispatchToProsp = ( state ) => {
    return {
        cartItems: state
    }
}

export default connect(mapDispatchToProsp, null)(withNavigation(CartList));