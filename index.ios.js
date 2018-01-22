/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
    View,
} from 'react-native';
import InitialComponent from "./Components/InitialComponent";

export default class React_Native_App extends Component {
  render(){
    return(
        <View style = {{flex: 1}}>
          <InitialComponent/>
        </View>
    )
  }
}

AppRegistry.registerComponent('React_Native_App', () => React_Native_App);
