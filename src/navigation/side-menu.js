import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Button, AsyncStorage } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Profile from '../scenes/Profile';


export class SideMenu extends Component {
    constructor(props){
        super(props)
        this.state ={
            user:{}
        }
        this.getLogin();
    }
    //funcion para obtener los datos del login
    getLogin = async () =>{
        try {
            const data = await AsyncStorage.getItem('data');
            if(data){
                const user = JSON.parse(data);
                this.setState({
                    user: user
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    closeSession = async () => {
        try {
            await AsyncStorage.clear();
            this.props.navigation.navigate('AuthLoading')
        } catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (
        <View style={styles.container}>
                <ScrollView>
                    <Profile navigation = {this.props.navigation}/>
                    <View style={styles.itemSectionNav}>
                        <Text style={styles.textItemSectionNav} onPress={ ()=> this.props.navigation.navigate('CatalogScreen') } > 
                        <Icon name="list-alt" size={24} color="#999"/> Catalogo </Text>
                    </View>

                    <View style={styles.itemSectionNav}>
                        <Text style={styles.textItemSectionNav} onPress={ ()=> this.props.navigation.navigate('CartScreen') } > 
                        <Icon name="shopping-cart" size={24} color="#999"/> Carro de Compras </Text>
                    </View>
                    <View style={styles.itemSectionNav}>
                        <Text style={styles.textItemSectionNav} 
                            onPress={() => this.closeSession()  }        
                        > 
                        <Icon name="sign-out" size={24} color="#999"/> Salir </Text>
                    </View>
                </ScrollView>   
                
        </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#ccc'
    },
    itemSectionNav: {
        margin: 10,
        flexDirection: 'row',
        backgroundColor: '#ccc'
    },
    textItemSectionNav:{
        fontSize: 18,
    },
})

export default SideMenu;