import React, {Component} from 'react'
import { View,  Text,  FlatList,  Button,  AsyncStorage, StyleSheet} from 'react-native';

import ItemProduct from './componentes/item-product';
import ItemSeparator from './componentes/item-separator';

import HttpProduct from "../../services/Product/http-products";

class Catalog extends Component{

    constructor(props){
        super(props);
        this.state = {
            productList: [],
        }
    }
    componentDidMount = () =>{ 
        this.getProducts();
    }
   
    async getProducts(){
        const data = await HttpProduct.getProducts();
        this.setState({
            productList: data,
        });
    }
  
    renderItem = ( { item }) => <ItemProduct navigation = { this.props.navigation } product = { item } />
    separatorComponent = () => <ItemSeparator />;
    emptyComponent = () => <Text>No se encontraron productos </Text>
    keyExtractor = item => item._id.toString();
    closeSession = async () =>{
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading')
    }
    render(){
        return (
            <View>
                <View style={styles.containerButton}>
                    <Button style={styles.button}
                     onPress={ this.closeSession } 
                        title="Salir"
                    />
                 <Text></Text> 

                  </View> 
                    <FlatList
                        data ={ this.state.productList }
                        renderItem={ this.renderItem }
                        ItemSeparatorComponent = { this.separatorComponent }
                        ListEmptyComponent = { this.emptyComponent }
                        keyExtractor = { this.keyExtractor }
                        ListHeaderComponent={this.renderHeaderSearchBar}  
                    />
           
            </View>
        )
    }
}



const styles = StyleSheet.create({
    wrapper:{
       paddingHorizontal: 20,
       flexDirection: 'column',
       alignContent: 'center',
       alignItems: 'center',
       marginTop: '10%'
    },
   
    formLabel:{
        color: '#07660A'
    },
    formInput:{
        width: 250,
        borderBottomColor: '#07660A',
        marginBottom: 20,
    },
    heading: {
        alignItems:  'flex-start'
    },
    headingImage: {
        width: 150,
        height: 150,
    },
    inputContainer: {
        marginTop: 15
    },
    title: {
        color: 'green',
        marginTop: 30,
        fontSize: 30,
      },
      button: {
        marginBottom: 15,
        width: 50,
        height:30,
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 15,
      },
      containerButton:{
        alignItems: 'center',
        justifyContent: 'space-between',
      },
});

export default Catalog;