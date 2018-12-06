import React, { Component } from 'react';
import { Text, View, Image, StyleSheet,  Button, AsyncStorage} from 'react-native';

class ProfileInfo extends Component {
    constructor(props) {
        super(props);
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

    render() {
    return (  
        <View style={styles.profileContainer}>
            <Image
                source = { {uri: this.state.user.photo} }
                style={styles.profileImage}
            />
            <Text style={styles.profileName}> {this.state.user.name}</Text>
            <Text style={styles.username}>@{this.state.user.username} </Text>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    profileContainer: {
        paddingTop: 10,
        backgroundColor: '#037A03',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    profileName:{
        color: '#fff',
        fontSize: 40,
        marginTop: 20
    },
    profileImage:{
        width: 140,
        height: 140,
        borderRadius: 70,
        resizeMode: 'cover'
    },
    username:{
        color: '#fff',
        padding: 10
    },
    });

export default ProfileInfo;