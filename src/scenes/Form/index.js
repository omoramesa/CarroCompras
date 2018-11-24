import React from 'react';
import { 
    Text, 
    StyleSheet,
    ScrollView,
    TextInput,
    Button,
    View
  } from 'react-native';

  const Form = props => (
    <ScrollView style={ styles.formWrapper }>
            <Text style={ styles.formLabel }> Name </Text>
            <TextInput
                placeholder = 'Name field is required'
                style = { styles.formInput }
                onChangeText = { props.onChangeText }
            />

            <Text style={ styles.formLabel }> Last name </Text>
            <TextInput
                placeholder = 'Last name field is required'
                style = { styles.formInput }
            />

            <Text style={ styles.formLabel }> Document number </Text>
            <TextInput
                placeholder = 'Document number field is required'
                style = { styles.formInput }
            />
            
            <Text style={ styles.formLabel }>City</Text>
            <TextInput
                placeholder = 'City field is required'
                style = { styles.formInput }
            />

            <Text style={ styles.formLabel }>Adress</Text>
            <TextInput
                placeholder = 'Adress field is required'
                style = { styles.formInput }
            />

            <Text style={ styles.formLabel }>Phone</Text>
            <TextInput
                placeholder = 'Phone field is required'
                style = { styles.formInput }
            />

            <Text style={ styles.formLabel }>Email</Text>
            <TextInput
                placeholder = 'Email field is required'
                style = { styles.formInput }
            />

            <Text style={ styles.formLabel }>Confirm Email</Text>
            <TextInput
                placeholder = 'Confirm Email field is required'
                style = { styles.formInput }
            />

            <View>
                    <Button
                        title ="Ok"
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