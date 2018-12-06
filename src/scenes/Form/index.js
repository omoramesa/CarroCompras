import React from 'react';
import { Text, StyleSheet, ScrollView, TextInput, Button, View } from 'react-native';

  const Form = props => (
    <ScrollView style={ styles.formWrapper }>
            
            <Text style={ styles.formLabel }> Identificacion:</Text>
            <TextInput
                placeholder = 'Ingrese Identificacion'
            />
            <Text style={ styles.formLabel }> Nombre:</Text>
            <TextInput
                placeholder = 'Ingrese Nombre'
            />

            <Text style={ styles.formLabel }> Apellido:</Text>
            <TextInput
                placeholder = 'Ingrese Apellido'
            />           
            <Text style={ styles.formLabel }>Ciudad:</Text>
            <TextInput
                placeholder = 'Ingrese Ciudad'
            />

            <Text style={ styles.formLabel }>Direccion:</Text>
            <TextInput
                placeholder = 'Ingrese Direccion'
            />

            <Text style={ styles.formLabel }>Telefono:</Text>
            <TextInput
                placeholder = 'Ingrese Telefono'
            />

            <Text style={ styles.formLabel }>Correo:</Text>
            <TextInput
                placeholder = 'Ingrese Correo'
            />
            <View style={styles.containerButton}>
                    <Button style={styles.botton}
                        title ="Pagar"
                        onPress = { ()=>{ props.navigation.navigate('SuccessScreen') } }
                    />
            </View>

    </ScrollView>
  );


  const styles = StyleSheet.create({
    formWrapper:{
      marginHorizontal: 25
    },
    containerButton:{
        alignItems: 'center',
        justifyContent: 'center',
      },
    formLabel:{
      color: '#037a03',
      marginVertical: 0
    },

    botton: {
        marginBottom: 20,
        width: 200,
        alignItems: 'center',
        backgroundColor: '#037a03',
        borderRadius: 10,
      }
  });

  export default Form;