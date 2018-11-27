import React, { Component } from 'react';
import { View,  ActivityIndicator,StyleSheet, AsyncStorage } from 'react-native';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    console.log('AuthLoading.js');
    this.validateToken();
  }
  
  validateToken = async () =>{
      try {
        const data = await AsyncStorage.getItem('data');
        if(data){
            const dataUser = JSON.parse(data);
            console.log(dataUser.token);

            setTimeout ( ()=>{
              this.props.navigation.navigate(dataUser.token ? 'App': 'Login');
            },2000);
          }else{
            this.props.navigation.navigate('Login');
          }
        
      } catch (error) {
          console.log('Error en el token' + error);
          this.props.navigation.navigate('Login');
      }
  }

  render() {
    return (
      <View style={styles.container}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default AuthLoading;
