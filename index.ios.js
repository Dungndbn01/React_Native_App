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
import App from './App.js'

export default class React_Native_App extends Component {
  render(){
    return(
        <View style = {{flex: 1}}>
          <App/>
        </View>
    )
  }
}

AppRegistry.registerComponent('React_Native_App', () => React_Native_App);
