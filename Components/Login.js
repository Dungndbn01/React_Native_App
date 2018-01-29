import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet, ScrollView, Dimensions, Button, Alert, Navigator, Modal} from 'react-native';

import {firebaseApp} from "./FirebaseConfig.js";
import Swiper from 'react-native-swiper';
import Register from './Register.js'
import App from './App.js'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this)
        this.state = {text: '', isModalVisible: false, email: '', password: '',modalVisible: false,};
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)

    }

    openModal() {
        this.setState({modalVisible:true});
    }

    closeModal() {
        Alert.alert('AJHAShdsfjkshdf')
        this.setState({modalVisible:false});
    }

    login() {
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(
                ()=> {
                    Alert.alert(
                        'Notice',
                        'Login Successful',
                        [ { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                            {text: 'OK', onPress: () => {this.openModal()}} ],
                        {cancelable: false}
                    )

                    this.setState( {
                        email: '',
                        password: ''
                    })
                }
            )
            .catch(function (error) {
                Alert.alert(
                    'Notice',
                    'Login failed. Please type again',
                    [ { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        {text: 'OK', onPress: () => console.log('OK Pressed')} ],
                    {cancelable: false}
                )

            })
    }

    render() {
        return (
                        <View>
                            <Modal
                                visible={this.state.modalVisible}
                                animationType={'slide'}
                                // onRequestClose={() => this.closeModal()}
                            >
                                <App setParentState = { ()=>{this.closeModal()}}/>
                            </Modal>

                            <View style = {{marginTop: 0, marginLeft: 0, marginRight: 0, height: 200, backgroundColor: 'red'}}>
                    <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Slide 1</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Slide 2</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>Slide 3</Text>
                    </View>
                </Swiper>
            </View>
                <View style = {{marginTop: 50, justifyContent: 'center',flexDirection: 'column'}}>
                    <View style = {{flexDirection: 'row'}}>
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

                    <Button
                        style = {{marginTop: 20}}
                        onPress = {()=> {this.login()}}
                        title = 'Login'
                    />

                    <Button
                        onPress = {this.props.goToRegister}
                        title = "Register"
                    />

                </View>
                        </View>
        )
    }
}

var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})
