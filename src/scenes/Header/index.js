import React from 'react';

import{View, Image, StyleSheet,SafeAreaView,TouchableOpacity,} from 'react-native';

function Header(props){
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                  
                    <View style={styles.right}>
                        {props.children}
                        <TouchableOpacity
                                onPress = { ()=> props.navigation.navigate('CartScreen') }
                            >                
                            
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
 
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