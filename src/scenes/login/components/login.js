import React, {Component} from 'react'
import {View, Text, Button, TextInput, StyleSheet, Image, AsyncStorage} from 'react-native';

import HttpUser from "../../../services/User/http-user";

export class LoginForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
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

    login = async () =>{
        const params = {
            email: this.email,
            password: this.password,
        }
        const data = await HttpUser.login(params);
        if(data.token){
            console.log(data);
            await AsyncStorage.setItem('data', JSON.stringify(data));
            this.props.navigation.navigate('App');  
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
                    <Button
                        title="Iniciar Sesión"
                        onPress={() => this.login() }
                    />
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
    
});

export default LoginForm;