import React, { Component } from 'react';
import { Text, View, Image,  StyleSheet,} from 'react-native';
import CartList from './list-cart';

export class CartInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (  
      <View>
        <View style={styles.container}>
            <View>
              <Text style={styles.title}> Resumen del pedido </Text>
            </View>
        </View>
        <CartList/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#3949AB',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title:{
      color: '#fff',
      fontSize: 24,
      marginTop: 20,
      padding: 10,
      fontFamily: "IndieFlower"
    },
    image:{
      width: 140,
      height: 140,
      borderRadius: 70,
      resizeMode: 'cover'
    },
  });
  
export default CartInfo;
