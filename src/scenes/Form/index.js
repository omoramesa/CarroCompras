import React from 'react';
import { Text, StyleSheet, ScrollView, TextInput, Button, View } from 'react-native';

  const Form = props => (
    <ScrollView style={ styles.formWrapper }>
            <Text style={ styles.formLabel }> Nombre </Text>
            <TextInput
                placeholder = 'Name field is required'
                style = { styles.formInput }
                onChangeText = { props.onChangeText }
            />

            <Text style={ styles.formLabel }> Apellido </Text>
            <TextInput
                placeholder = 'Last name field is required'
                style = { styles.formInput }
            />

            <Text style={ styles.formLabel }> Identificacion</Text>
            <TextInput
                placeholder = 'Document number field is required'
                style = { styles.formInput }
            />
            
            <Text style={ styles.formLabel }>Ciudad</Text>
            <TextInput
                placeholder = 'City field is required'
                style = { styles.formInput }
            />

            <Text style={ styles.formLabel }>Direccion Domicilio</Text>
            <TextInput
                placeholder = 'Adress field is required'
                style = { styles.formInput }
            />

            <Text style={ styles.formLabel }>Celular</Text>
            <TextInput
                placeholder = 'Phone field is required'
                style = { styles.formInput }
            />

            <Text style={ styles.formLabel }>Correo</Text>
            <TextInput
                placeholder = 'Email field is required'
                style = { styles.formInput }
            />
            <View>
                    <Button
                        title ="Enviar"
                        onPress = { ()=>{ props.navigation.navigate('SuccessScreen') } }
                    />
            </View>

    </ScrollView>
  );


  const styles = StyleSheet.create({
    formWrapper:{
      marginHorizontal: 25
    },
    formLabel:{
      color: '#3F51B5',
      marginVertical: 10
    },
    formInput: {
      borderBottomWidth: 1,
      borderBottomColor: '#ccc'
    }
  });

  export default Form;