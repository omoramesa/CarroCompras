import React , {Component}from 'react';
import {Text, View, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import HttpProduct from '../../../services/Product/http-products';


class ProductDetail extends Component{
  constructor(props){
      super(props);
      this.state = {
          product: []
      }
  }

  componentDidMount = () =>{ 
      id = this.props.navigation.getParam('id', 'no-data') ;
      this.getProductById(id);
  }
   
  async getProductById(id){
      const data = await HttpProduct.getProductsById(id);
      this.setState({
        product: data
      })
      console.log(data);
  } 

  render(){
    return (
      <View>
         <View style={styles.dataContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image}  source={{ uri: this.state.product.avatar  }} />        
            </View>
          </View>

          <View style={styles.description}>
              <Text style={styles.descriptionText}> { this.state.product.brand } </Text>  
              <Text style={styles.descriptionText}>{ this.state.product.description } </Text>
              <Text style={styles.descriptionText}>{ this.state.product.name }</Text>
              <Text style={styles.priceText}> $ { this.state.product.price } </Text>
          </View>

          <View style={styles.containerButton}>
          
             
                <Button style={styles.botton}
                        title ="añadir al carrito"
                        onPress={ ()=> this.props.onPressEvent(this.state.product) }
                      
                    />
                 <Text></Text> 
                <Button style={styles.botton}
                        title ="Lista de Productos"
                        onPress = { ()=> this.props.navigation.navigate('CatalogScreen') }
                    />
               
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  dataContainer: {
    color: '#037a03',
    borderRadius: 5,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,

  },
  brand: {
    color: '#037a03',
    alignItems: 'center',
    justifyContent: 'center'
  },
 
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {  
    height: 250,
    width: 250,
    resizeMode: 'contain',
  },
  price:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceText:{
    color: 'green',
    fontSize: 24,
   },
  description: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
  },
  descriptionText: {
    color: 'black',
    fontSize: 18,
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
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 18
  }
});

export default ProductDetail;
