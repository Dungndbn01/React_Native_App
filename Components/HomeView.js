import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Alert,
    Image,
    TouchableOpacity
} from 'react-native';

import NavigationBar from 'react-native-navigation-bar'
import { firebaseApp } from "./FirebaseConfig";

export default class HomeView extends Component {
    // logOut(){
    //
    //     try {
    //          firebaseApp.auth().signOut();
    //     } catch (e) {
    //         Alert.alert('XYZ ABC')
    //         console.log(e);
    //     }
    // }

    render(){
        return(
            <View style = {{flex: 1 ,backgroundColor: 'red'}}>

                <NavigationBar
                    title={'Edit Profile'}
                    height={44}
                    titleColor={'#000000'}
                    backgroundColor={'#cee0d7'}
                    // leftButtonIcon={}
                    leftButtonTitle={'Cancel'}
                    leftButtonTitleColor={'#000000'}
                    onLeftButtonPress={this.props.setParentState}
                    // rightButtonIcon={require('./Send.png')}
                    rightButtonTitle={'Logout'}
                    rightButtonTitleColor={'#000000'}
                    // onRightButtonPress={this.props.logOut}
                />
                {/*<ScrollView>*/}
            {/*<View style = {{flex: 1, alignItems:'center', justifyContent:'center', marginTop: 100}}>*/}
            {/*<Text style = {{flex: 1, marginTop: 200}}>*/}
                {/*ABC*/}
            {/*</Text>*/}
            {/*</View>*/}
            {/*</ScrollView>*/}
            </View>
        )
    }
}
