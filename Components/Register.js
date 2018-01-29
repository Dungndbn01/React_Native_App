import React, { Component } from 'react';
import {View, Button, Dimensions, Text, TextInput, Alert, Image, Platform, AsyncStorage} from 'react-native';

import {firebaseApp} from "./FirebaseConfig.js";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from 'react-native-fetch-blob'

const storage = firebaseApp.storage()

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const uploadImage = (uri, mime = 'application/octet-stream') => {
    return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
        const sessionId = new Date().getTime()
        let uploadBlob = null
        const imageRef = storage.ref('images').child(`${sessionId}`)

        fs.readFile(uploadUri, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` })
            })
            .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, { contentType: mime })
            })
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                resolve(url)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

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
        this.state = { name: '', email: 'abc', password: '', avatarSource: require('./Send.png'), uploadURL: ''}
    }

    openCamera() {
        ImagePicker.launchImageLibrary(options, (response)  => {
            let source = { uri: response.uri }
            this.setState({
                avatarSource: source,
            });

            uploadImage(response.uri)
                .then(url => this.setState({ uploadURL: url }))
                .catch(error => console.log(error))

        });

        // ImagePicker.showImagePicker(options, (response) => {
        //     console.log('Response = ', response);
        //
        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     }
        //     else if (response.error) {
        //         console.log('ImagePicker Error: ', response.error);
        //     }
        //     else if (response.customButton) {
        //         console.log('User tapped custom button: ', response.customButton);
        //     }
        //     else {
        //         let source = { uri: response.uri };
        //         this.setState({
        //             avatarSource: source,
        //             uploadURL: response.uri
        //         });
        //
        //         uploadImage(response.uri)
        //             .then(url => this.setState({ uploadURL: response.uri }))
        //             .catch(error => console.log(error))
        //
        //         // You can also display the image using data:
        //         // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        //
        //     }
        // });
    }

    saveData = async() => {
        try {
            await AsyncStorage.setItem("profileImageURL", this.state.uploadURL);
            console.log('SAVE OKKKKKKK')
        }catch(error) {
            console.log(error)
        }
    }

    createUserDB() {
        let uid = firebaseApp.auth().currentUser.uid
        this.userRef = firebaseApp.database().ref(uid)
        this.userRef.set({
            profileImageURL: this.state.uploadURL,
            email: this.state.email,
            name: this.state.name,
            bio: "",
            phone: "",
            gender: "",
            website: "",
            userName: "",
        })
    }

    register() {
        this.saveData()
        // this.createUserDB()

        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>{
                this.createUserDB()
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
                        Name
                    </Text>
                    <TextInput
                        style={{height: 40, marginLeft: 20, width: 250, borderWidth: 1, borderColor: 'gray', borderRadius: 8}}
                        placeholder="Type name here!"
                        onChangeText={(text) => this.setState({name: text})}
                    />
                </View>

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