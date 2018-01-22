import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Dimensions, AsyncStorage, TouchableWithoutFeedback, Image } from 'react-native';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import ImagePicker from 'react-native-image-picker';

// var ImagePicker = require('react-native-image-picker');


// var dismissKeyboard = require('react-native-dismiss-keyboard');

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {text: '', textView: 'sdfdsf'}
        this.openCamera = this.openCamera.bind(this)
    }

    openCamera(){
        var options = {
            title: 'Select Avatar',
            customButtons: [
                {name: 'fb', title: 'Choose Photo from Facebook'},
                {name: 'twitter', title: 'Choose Photo from Twitter'}
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.launchImageLibrary(options, (response)  => {
            let source = { uri: 'data:image/jpeg;base64,' + response.data };

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
                // let source = { uri: response.uri };

                // You can also display the image using data:
                let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }

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
        //         // let source = { uri: response.uri };
        //
        //         // You can also display the image using data:
        //         let source = { uri: 'data:image/jpeg;base64,' + response.data };
        //
        //         this.setState({
        //             avatarSource: source
        //         });
        //     }
        // });
    }

    hideKeyboard() {
        dismissKeyboard()
    }

    saveText = async() => {
        try {
            let text = this.state.text
            await AsyncStorage.setItem("abc", text);
            console.log('SAVE OKKKKKKK')
        }catch(error) {
            console.log(error)
        }
    }

    getText = async() => {
        try {
            let v = await AsyncStorage.getItem("abc")
            console.log(v)
            this.setState({textView: v})
        }catch(error) {
            console.log(error)
        }
    }

    render() {
        return(
            <TouchableWithoutFeedback onPress = {()=>{this.hideKeyboard()}}>
                <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress = {this.openCamera}>
                        <Image style = {{width: 100, height: 100, marginBottom: 20 }} source = {this.state.avatarSource} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {this.openCamera} style = {styles.touch}>
                        <Text>
                            PHOTO
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.saveText()}} style = {styles.touch}>
                        <Text>
                            SAVE TEXT
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {()=>{this.getText()}} style = {styles.touch}>
                        <Text>
                            GET TEXT
                        </Text>
                    </TouchableOpacity>

                    <TextInput
                        style = {{width: Dimensions.get('window').width, height: 40, borderWidth: 1, borderColor: 'blue', marginBottom: 20}}
                        placeholder = "Input text here"
                        onChangeText = { (text)=> {this.setState({text: text})}}
                    >
                    </TextInput>

                    <Text
                        style = {{width: Dimensions.get('window').width, height: 40, borderWidth: 1, borderColor: 'blue'}}
                    >
                        {this.state.textView}
                    </Text>

                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create(
    {
        touch: {
            width: 100, height: 50, borderWidth: 1, borderColor: 'blue', marginBottom: 20, alignItems: 'center', justifyContent: 'center'
        }
    }
)

// import React, { Component } from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// import Modal from "react-native-modal";
// import TestComponent from "./TestComponent";
//
// export default class App extends Component {
//     state = {
//         isModalVisible: false
//     };
//
//     _toggleModal = () =>
//         this.setState({ isModalVisible: !this.state.isModalVisible });
//
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <TouchableOpacity onPress={this._toggleModal}>
//                     <Text>Show Modal</Text>
//                 </TouchableOpacity>
//
//                 <Modal isVisible={this.state.isModalVisible}
//                        // onBackdropPress={() => this.setState({ isModalVisible: false })}
//                 >
//                     <View style = {{flex: 1}}>
//                         <TestComponent setParentState={() => this.setState({ isModalVisible: false })}/>
//                     </View>
//                 </Modal>
//
//             </View>
//         );
//     }
// }


// import React, { Component } from 'react';
// import { AppRegistry, Text, View, Button, Modal, StyleSheet, TouchableOpacity } from 'react-native';
// import ModalViewController from './ModalViewController.js'
// import Drawer from 'react-native-drawer'
//
// export default class MyComponent extends Component {
//     closeControlPanel = () => {
//         this._drawer.close()
//     };
//     openControlPanel = () => {
//         this._drawer.open()
//     };
//
//     state = {
//         modalVisible: false,
//     };
//
//     openModal() {
//         this.setState({modalVisible:true});
//     }
//
//     closeModal() {
//         this.setState({modalVisible:false});
//     }
//
//     render() {
//         return (
//             <View ref = 'abc' style={styles.container}>
//                 <Modal
//                     visible={this.state.modalVisible}
//                     animationType={'slide'}
//                     //none, slide, fade
//                     onRequestClose={() => this.closeModal()}
//                 >
//                     {/*<View style={styles.modalContainer}>*/}
//                     {/*<View style={styles.innerContainer}>*/}
//                     {/*<Text>This is content inside of modal component</Text>*/}
//                     {/*<Button*/}
//                     {/*onPress={() => this.closeModal()}*/}
//                     {/*title="Close modal"*/}
//                     {/*>*/}
//                     {/*</Button>*/}
//                     {/*</View>*/}
//                     {/*</View>*/}
//
//                     <ModalViewController
//                     />
//                 </Modal>
//
//                 <Drawer
//                     openDrawerOffset={0.2}
//                     panCloseMask={0.6}
//                     closedDrawerOffset={-3}
//                     tapToClose={true}
//                     ref = { (ref) => this._drawer = ref}
//                     content ={
//                         <View style={{flex: 1, marginTop: 20, backgroundColor: 'blue'}}/>
//                     }
//                 >
//
//                     <View style = {{flex: 1, backgroundColor: 'red', padding: 50}}>
//                         <TouchableOpacity onPress = {()=> {this.openControlPanel()}}>
//                             <Text>
//                                 OPEN HERE
//                             </Text>
//
//                         </TouchableOpacity>
//                     </View>
//                 </Drawer>
//
//                 <Button
//                     onPress={() => this.openModal()}
//                     title="Open modal"
//                 />
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: 'grey',
//     },
//     innerContainer: {
//         alignItems: 'center',
//     },
// });
//
// AppRegistry.registerComponent('TestProject', () => MyComponent)