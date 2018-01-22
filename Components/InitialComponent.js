import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import Register from "./Register.js";
import Login from "./Login.js";
import App from "./App.js"

export default class InitialComponent extends Component {
    renderScene(route, navigator) {
        switch (route.name) {
            case 'Register': return (<Register goToLogin = { () => {navigator.pop({name: 'Login'})}}/>)
            case 'Login': return(<Login goToRegister = { () => {navigator.push({name: 'Register'})} }
                                        goToApp = { () => {navigator.push({name: 'App'})} }
            />)
            case 'App': return (<App/>)
        }
    }
    render() {
        return(
            <Navigator
                initialRoute = {{name: 'Login'}}
                renderScene = {this.renderScene}
            />
        )
    }
}
