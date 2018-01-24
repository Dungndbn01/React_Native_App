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
import App from "./App.js";
import { firebaseApp } from "./Components/FirebaseConfig";
import InitialComponent from "./Components/InitialComponent";

export default class React_Native_App extends Component {
  render(){
      if (firebaseApp.auth !== null) {
      return(
        <View style = {{flex: 1}}>
          <App/>
        </View>
    ) }
    else return (
        <View style = {{flex: 1}}>
            <InitialComponent/>
        </View>
      )
  }
}

AppRegistry.registerComponent('React_Native_App', () => React_Native_App);
