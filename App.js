/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {SwitchNavigator} from "./src/navigation/navigation";
import { Provider } from 'react-redux';
import store from './src/store';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
  
    return (
      <Provider store = {store}>
          <SwitchNavigator/>    
      </Provider>
      
    );
  }
}

