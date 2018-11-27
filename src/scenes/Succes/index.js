import React from 'react';
import {
    Text, 
    View,
    Image,
    StyleSheet
} 
from 'react-native';

  const Success = props => ( 
    <View>
      <View style={styles.container}>
         <Text>Compra Realizada con exito!!!</Text>
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
        padding: 90,
        paddingTop: 90,
        justifyContent: 'center',
        alignItems: 'center'
      },
      image:{
        width: 140,
        height: 140,
        borderRadius: 70,
        resizeMode: 'cover'
      },
    });

export default Success;
