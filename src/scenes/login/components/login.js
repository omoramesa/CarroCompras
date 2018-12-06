import React, {Component} from 'react'
import {View, Text, Button, TextInput, StyleSheet, Image, AsyncStorage, TouchableOpacity} from 'react-native';

import HttpUser from "../../../services/User/http-user";

export class LoginForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: 'agiraldo@gmail.com',
            password: '654321',
        }
    }

   
    login = async () =>{
        if(this.state.email === ""){
            alert('El correo es  obligatorio');
            return;
        }
        if(this.state.password === ""){
            alert('La contraseña es obligatoria');
            return;
        }
        const params = {
            email: this.state.email,
            password: this.state.password,
        }
        const data = await HttpUser.login(params);
        if(data){
            await AsyncStorage.setItem('data', JSON.stringify(data));
            this.props.navigation.navigate('App');  
        }else{
            alert('No fue posible iniciar sesión');
        }
    }
    
    onChangeText = (input, text)=>{
        if(input == 'email'){
            this.setState({
                email: text
            })
        }else if(input == 'password'){
            this.setState({
                password: text
            })
        }
    }


    render() {
        return (
          <View style ={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.heading}>
                    <Image
                        source={require('../../../assets/carrito.png')}
                        style={styles.headingImage}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.heading}>
                     <Text style={[styles.title]}> Tienda en Línea</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.formLabel}> Usuario </Text>
                    <TextInput
                        placeholder="Email"
                        style={styles.formInput}
                        value={this.state.email}
                        onChangeText={(text)=>this.onChangeText('email',text)}
                    />
                    <Text style={styles.formLabel}> Contraseña </Text>
                    <TextInput
                        placeholder="Password"
                        style={styles.formInput}
                        value={this.state.password}
                        onChangeText={(text)=>this.onChangeText('password',text)}
                        secureTextEntry
                    />
                    <View style={styles.containerButton}>
                        <TouchableOpacity onPress={() => this.login() }>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Iniciar Sesión</Text>
                        </View>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
          </View>
        );
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
        width: 100,
        height:30,
        alignItems: 'center',
        backgroundColor: '#037a03',
        borderRadius: 15,
      },
      containerButton:{
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default LoginForm;