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
          <Image
              source={{ uri: 'https://banner2.kisspng.com/20171202/b4a/success-png-image-5a229eaff3dc00.4133076515122182879989.jpg' }}
              style={styles.image}
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
    });

export default Success;
