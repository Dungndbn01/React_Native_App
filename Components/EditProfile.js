import React, { Component } from 'react';
import {
    View, ScrollView, TouchableOpacity, Text, TextInput, Dimensions, Alert, Image
} from 'react-native';
import {firebaseApp} from "./FirebaseConfig";

import NavigationBar from 'react-native-navigation-bar';
import ImagePicker from "react-native-image-picker";

const width = Dimensions.get('window').width
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

export default class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.doneHandler = this.doneHandler.bind(this)
        this.changePicture = this.changePicture.bind(this)
        this.state = {name: '', userName: '', website: '', bio: '', email: '', profileImageURL: '', phone: '', gender: ''}
    }

    componentWillMount() {
        this.listenForItems()
    }

    changePicture() {
        // ImagePicker.launchImageLibrary(options, (response)  => {
        //     let source = { uri: response.uri }
        //     this.setState({
        //         avatarSource: source,
        //     });
        //
        //     uploadImage(response.uri)
        //         .then(url => this.setState({ uploadURL: url }))
        //         .catch(error => console.log(error))


            ImagePicker.launchImageLibrary(options, (response)  => {
            this.setState({
                profileImageURL: response.uri,
            });
        });
        }

    doneHandler() {
        let uid = firebaseApp.auth().currentUser.uid
        this.userRef = firebaseApp.database().ref(uid)
        this.userRef.set({
            profileImageURL: this.state.profileImageURL,
            email: this.state.email,
            name: this.state.name,
            bio: this.state.bio,
            phone: this.state.phone,
            gender: this.state.gender,
            website: this.state.website,
            userName: this.state.userName,
        })
    }

    listenForItems() {
        let uid = firebaseApp.auth().currentUser.uid
        this.userRef = firebaseApp.database().ref(uid)
        this.userRef.on('value', (dataSnapshot) => {
            // items.push({
            //     name: dataSnapshot.val(),
            //     key: dataSnapshot.key
            // });
            this.setState({
                profileImageURL: dataSnapshot.val().profileImageURL,
                name: dataSnapshot.val().name,
                email: dataSnapshot.val().email,
                userName: dataSnapshot.val().userName,
                bio: dataSnapshot.val().bio,
                phone: dataSnapshot.val().phone,
                gender: dataSnapshot.val().gender,
                website: dataSnapshot.val().website,
            })
        })
    }

    render(){
        let pic = {uri: this.state.profileImageURL}
        return(
            <View style = {{flex: 1}}>

                <ScrollView>
                    <View style = {{marginTop: 64, marginLeft: 0, marginRight: 0, height: 150, backgroundColor: 'blue', alignItems: 'center'}}>
                        <TouchableOpacity onPress = {this.changePicture}>
                            <View style = {{marginTop: 20, width: 68, height: 68, backgroundColor: 'purple', borderRadius: 34}}>
                                <Image source = {pic} style = {{width: 68, height: 68, borderRadius: 34}} />

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style = {{color: 'red', marginTop: 20}}>
                                Change Profile Photo
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50, flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16}}>
                            Name
                        </Text>
                        <TextInput
                            style={{ height: 18, borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({name: text})}
                            value={this.state.name}
                            placeholder = 'Name'
                        />
                    </View>

                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50,  flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16}}>
                            UserName
                        </Text>
                        <TextInput
                            style={{ height: 18, borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({userName: text})}
                            value={this.state.userName}
                            placeholder = "User Name"
                        />
                    </View>

                    <View style = {{marginTop: 0, marginLeft: 0, marginRight: 0, height: 50,  flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16}}>
                            Website
                        </Text>
                        <TextInput
                            style={{height: 18, borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({website: text})}
                            value={this.state.website}
                            placeholder = "Website"
                        />
                    </View>

                    <View style = {{marginTop: 0, marginLeft: 0, marginRight: 0, height: 50,  flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16}}>
                            Bio
                        </Text>
                        <TextInput
                            style={{height: 18, borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({bio: text})}
                            value={this.state.bio}
                            placeholder = "Bio"
                        />
                    </View>
                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50,  flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16, color: 'blue'}}>
                            Try Instagram Business Tools
                        </Text>
                    </View>

                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50,  flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16, color: 'black', fontWeight: 'bold'}}>
                            Private Information
                        </Text>
                    </View>

                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50,  flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16}}>
                            Email
                        </Text>
                        <TextInput
                            style={{height: 18, borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            placeholder = 'Email'
                            onChangeText={(text) => this.setState({email: text})}
                            value={this.state.email}
                        />
                    </View>

                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50,  flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16}}>
                            Phone
                        </Text>
                        <TextInput
                            style={{height: 18, borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({phone: text})}
                            value={this.state.phone}
                            placeholder = "Phone"
                        />
                    </View>

                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50,  flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16}}>
                            Gender
                        </Text>
                        <TextInput
                            style={{height: 18, borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({gender: text})}
                            value={this.state.gender}
                            placeholder = "Gender"
                        />
                    </View>

                </ScrollView>

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
                    rightButtonTitle={'Done'}
                    rightButtonTitleColor={'#000000'}
                    onRightButtonPress={this.doneHandler}
                />

            </View>
        )
    }
}
