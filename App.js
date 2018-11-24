/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {SwitchNavigator} from "./src/navigation/navigation";


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SwitchNavigator/>
    );
  }
}

