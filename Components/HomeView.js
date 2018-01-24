import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text
} from 'react-native';

import NavigationBar from 'react-native-navigation-bar'
import { firebaseApp } from "./FirebaseConfig";

export default class HomeView extends Component {
    logOut() {
        try {
            console.log('YOu have just log out ')
             firebaseApp.auth().signOut();
        } catch (e) {
            consle.log('You cant log out')
            console.log(e);
        }
    }

    render(){
        return(
            <View>
                <NavigationBar
                    title={'Edit Profile'}
                    height={44}
                    titleColor={'#000000'}
                    backgroundColor={'#cee0d7'}
                    // leftButtonIcon={}
                    leftButtonTitle={'Cancel'}
                    leftButtonTitleColor={'#000000'}
                    onLeftButtonPress={this.props.setParentState}
                    // rightButtonIcon={}
                    rightButtonTitle={'Logout'}
                    rightButtonTitleColor={'#000000'}
                    onRightButtonPress={this.logOut()}
                />
                <ScrollView>
            <View style = {{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text style = {{flex: 1, marginTop: 200}}>
                ABC
            </Text>
            </View>
            </ScrollView>
            </View>
        )
    }
}
