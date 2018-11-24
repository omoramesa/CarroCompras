import React, { Component } from "react";
import { 
    View
} from 'react-native';

import ProfileInfo from "./components/profile-info";
class Profile extends Component {

    constructor(props) {
        super(props);
    }   
    render() {
        return (
            <View>
                <ProfileInfo navigation={ this.props.navigation } />                  
            </View>
        );
    }
}
export default Profile;
