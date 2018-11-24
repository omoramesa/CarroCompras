import React from 'react';

import{
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

function Header(props){
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image
                        source={require('../../assets/tienda.jpg')}
                        style={styles.logo}
                    />
                    <View style={styles.right}>
                        {props.children}
                        <TouchableOpacity
                                onPress = { ()=> props.navigation.navigate('CartScreen') }
                            >                
                            <Image
                                source={require('../../assets/tienda.jpg')}
                                style={styles.logo}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain',
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})

export default Header;