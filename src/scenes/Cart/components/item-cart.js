import React from 'react';
import {
    Text,
    View,
    StyleSheet ,
    Image,
    TouchableHighlight
} from 'react-native';


const CartItem = (props) => (
    <TouchableHighlight
        onPress = { ()=> {} }
        underlayColor = "#ccc"
    >
        <View style={ styles.container }>
            <View styles={ styles.left }>
                <Image
                    style={styles.cover}
                    source ={{ uri: props.product.avatar }}
                />
            </View>
            <View style={ styles.right }>
                <Text style={ styles.title }>{ props.product.name }</Text>
                <Text style={ styles.title }> $ { props.product.price }</Text>
            </View>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    cover:{
        height: 100,
        width: 120,
        resizeMode: 'contain',
    },
    left:{
        paddingRight: 2,
    },
    title:{
        fontSize: 18,
        color: '#44546b',
        fontFamily: "IndieFlower"
    },
})

export default CartItem;
