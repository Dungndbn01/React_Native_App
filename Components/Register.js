import React, { Component } from 'react';
import {View, Button, Dimensions, Text, TextInput, Alert, Image} from 'react-native';

import {firebaseApp} from "./FirebaseConfig.js";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from 'react-native-fetch-blob'

const storage = firebaseApp.storage();
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = BLob;

var options = {
    title: 'Select Avatar',
    customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.openCamera = this.openCamera.bind(this)
        this.register = this.register.bind(this)
        this.state = { email: '', password: '', avatarSource: require('./Send.png')}
    }

    openCamera() {

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });

            }
        });

    }

    register() {
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>{
                    Alert.alert(
                        'Notice',
                        'Register Successful',
                            [ { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                            {text: 'OK', onPress: () => this.props.goToLogin()} ],
                        {cancelable: false}
                    )

                    this.setState({
                        email: '',
                        password: ''
                    })
                }
            )
            .catch(function(error) {
                Alert.alert(
                    'Notice',
                    'Register Failed',
                        [ { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        {text: 'OK', onPress: () => console.log('OK Pressed')} ],
                    {cancelable: false}
                )
            })
    }

    render() {
        return (
            <View style = {{marginTop: 50, justifyContent: 'center',alignItems: 'center', flexDirection: 'column'}}>
                <Button
                    style = {{flexGrow: 1, marginLeft: 0}}
                    onPress = {this.props.goToLogin}
                    title = "Back"
                />

                <View style = {{flexDirection: 'row', marginTop: 20}}>
                    <Text style = {{height: 40, width: 88, marginLeft: 8, fontSize: 20}}>
                        Email
                    </Text>
                    <TextInput
                        style={{height: 40, marginLeft: 20, width: 250, borderWidth: 1, borderColor: 'gray', borderRadius: 8}}
                        placeholder="Type email here!"
                        onChangeText={(text) => this.setState({email: text})}
                    />
                </View>
                <View style = {{flexDirection: 'row', marginTop: 20}}>
                    <Text style = {{height: 40, width: 88, marginLeft: 8, fontSize: 20}}>
                        Password
                    </Text>
                    <TextInput
                        style={{height: 40, marginLeft: 20, width: 250, borderWidth: 1, borderColor: 'gray', borderRadius: 8}}
                        placeholder="Type password here!"
                        secureTextEntry = {true}
                        onChangeText={(text) => this.setState({password: text})}
                    />
                </View>
                <View style = {{marginTop: 20}}>
                    <Button
                            onPress = { () => {this.register()}}
                            title = "Register"
                        />
                </View>
                <View style = {{marginTop: 20}}>
                    <Button
                        title = "Choose Image"
                        onPress = {this.openCamera}
                        />
                    <Image
                        source = {this.state.avatarSource}
                        style = {{marginTop: 20, height: 150, width: 150}}
                        />
                </View>
            </View>

        )
    }
}