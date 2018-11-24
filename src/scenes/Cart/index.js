import React from 'react';
import {
    Text, 
    View,
    Image,
    StyleSheet,
    Button
} 
from 'react-native';

  const Cart = props => ( 
    <View>
      <View style={styles.container}>
          <Image
              source={require('../../assets/play4.jpg')}
              style={styles.image}
          />
          <View>
            <Text style={styles.title}> Consolas </Text>
            <Text style={styles.description}> Play4</Text>
          </View>
      </View>
      <View>
        <Text>Total</Text>
          <Button
            title ="Pay"
            onPress = { ()=>{ props.navigation.navigate('FormScreen') } }
          />
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#66CC99',
        justifyContent: 'center',
        alignItems: 'center'
      },
      containerDetail: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      containerDetailText: {
        color: '#060302',
      },
      title:{
        color: '#fff',
        fontSize: 24,
        marginTop: 20
      },
      image:{
        width: 140,
        height: 140,
       
        resizeMode: 'cover'
      },
      description:{
        color: '#fff',
        padding: 10
      },
    });

export default Cart;
