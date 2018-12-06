import React from 'react';
import {
    Text, 
    View,
    StyleSheet,
    Button
} 
from 'react-native';

  const Success = props => ( 
    <View>
      <View style={styles.container}>
         <Text>Compra Realizada con exito!!!</Text>
      </View>

      <View style={styles.containerButton}>
              <Button style={styles.botton}
                  title ="Realizar otra compra "
                  onPress = { ()=>{ props.navigation.navigate('CatalogScreen') } }
              />
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
      containerButton:{
        alignItems: 'center',
        justifyContent: 'center',
      },
      botton: {
        marginBottom: 20,
        width: 200,
        alignItems: 'center',
        backgroundColor: '#037a03',
        borderRadius: 10,
      }
    });

export default Success;
