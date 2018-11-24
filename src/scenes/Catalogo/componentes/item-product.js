import React from 'react';
import { Text, View, StyleSheet , Image, TouchableHighlight} from 'react-native';


const ItemProduct = (props) => (
    <TouchableHighlight
        onPress = { ()=> props.navigation.navigate('CatalogDetailScreen', { id: props.product._id } ) }
        underlayColor = "#ccc"
    >
    <View style={ styles.container }>
        <View styles={ styles.left }>
            <Image
                style={styles.avatar}
                source ={{ uri: props.product.avatar }}
            />
            
        </View>
        <View style={ styles.right }>
            <Text style={ styles.name }>{ props.product.name }</Text>
            <Text style={ styles.price }> $ { props.product.price }</Text>
            <Text style={ styles.description }>{ props.product.description }</Text>
        </View>
    </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
 
    avatar:{
        height: 60,
        width: 120,
        resizeMode: 'contain',
    },
    right:{
        paddingLeft: 3,
        justifyContent: 'space-between',

    },
    left:{
        paddingRight: 3,
    },
    name:{
        fontSize: 18,
        color: '#44546b'
    },
    price:{
        color: 'green',
        fontSize: 20,   
    },
    description:{
        color: '#44546b',
        fontSize: 12,
    }   
})

export default ItemProduct;
