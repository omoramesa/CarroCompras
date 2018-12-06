import React from 'react';
import {Text, View, Button, StyleSheet,ScrollView,} from 'react-native';
import { withNavigation } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import   Icon  from 'react-native-vector-icons/FontAwesome';


import ItemSeparator from '../../Catalogo/componentes/item-separator';
import CartItem from './item-cart';

renderItem = ( { item }) => <CartItem product = { item } />
separatorComponent = () => <ItemSeparator />;
emptyComponent = () => <Text>No hay productos en el carrito.</Text>
keyExtractor = item => item._id.toString();

const CartList = (props) => (
    <ScrollView>
         
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
                        rightIcon={{ name: 'close' }}
                        onPressRightIcon={ () => props.onPressEvent(item) }    
                    >
                    
                    </ListItem>
                ))
            }

            {props.cartItems.length > 0 &&
            <View
               style={styles.containerButton}>
                <Text> </Text>
                <Button tyle={styles.botton}
                    title ="Finalizar Compra"
                    onPress = { ()=> props.navigation.navigate('FormScreen') }
                />
            </View>
        }
        </List>
    </ScrollView>
);

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontFamily: "IndieFlower"
    },
    containerButton:{
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
    botton: {
        marginBottom: 20,
        width: 200,
        alignItems: 'center',
        backgroundColor: '#037a03',
        borderRadius: 10,
      },
})

const mapDispatchToProsp = ( state ) => {
    return {
        cartItems: state
    }
}

export default connect(mapDispatchToProsp, null)(withNavigation(CartList));