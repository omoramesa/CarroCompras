import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    Button,
    AsyncStorage
} from 'react-native';

import Home from '../Home';
import Header from '../Header';
import ItemProduct from './componentes/item-product';
import ItemSeparator from './componentes/item-separator';

import HttpProduct from "../../services/Product/http-products";

class Catalog extends Component{

    constructor(props){
        super(props);
        this.state = {
            productList: [],
            arrayholder: []
        }
    }
    componentDidMount = () =>{ 
        this.getProducts();
    }
   
    async getProducts(){
        const data = await HttpProduct.getProducts();
        this.setState({
            productList: data,
            arrayholder: data,
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
                <Home>
                    <Header>
                       <Button
                            title ="Cart"
                            onPress = { ()=> this.props.navigation.navigate('CartScreen') }
                        />
                        <Button
                            onPress={ this.closeSession } 
                            title="Salir"
                        />
                    </Header>
                        <FlatList
                            data ={ this.state.productList }
                            renderItem={ this.renderItem }
                            ItemSeparatorComponent = { this.separatorComponent }
                            ListEmptyComponent = { this.emptyComponent }
                            keyExtractor = { this.keyExtractor }
                            ListHeaderComponent={this.renderHeaderSearchBar}  
                        />
                </Home>
            </View>
        )
    }
}
export default Catalog;