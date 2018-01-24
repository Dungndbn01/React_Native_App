import React, { Component } from 'react';
import {
    View, ScrollView, TouchableOpacity, Text, TextInput, Dimensions
} from 'react-native';

import NavigationBar from 'react-native-navigation-bar';

const width = Dimensions.get('window').width

export default class EditProfile extends Component {
    // onBackHandle() {
    //
    // }
    //
    // onForwardHandle() {
    //
    // }
    constructor(props) {
        super(props)
        this.state = {text: "ABC XYZ"}
    }

    render(){
        return(
            <View style = {{flex: 1, backgroundColor: 'red'}}>

                <ScrollView>
                    <View style = {{marginTop: 64, marginLeft: 0, marginRight: 0, height: 150, backgroundColor: 'blue', alignItems: 'center'}}>
                        <TouchableOpacity>
                            <View style = {{marginTop: 20, width: 68, height: 68, backgroundColor: 'purple', borderRadius: 34}}>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style = {{color: 'red', marginTop: 20}}>
                                Change Profile Photo
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50, backgroundColor: 'purple', flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16, color: 'yellow'}}>
                            Name
                        </Text>
                        <TextInput
                            style={{ height: 18, borderColor: 'gray', borderWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder = 'Name'
                        />
                    </View>

                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50, backgroundColor: 'purple', flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16, color: 'yellow'}}>
                            UserName
                        </Text>
                        <TextInput
                            style={{ height: 18, borderColor: 'gray', borderWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                    </View>

                    <View style = {{marginTop: 0, marginLeft: 0, marginRight: 0, height: 50, backgroundColor: 'purple', flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16, color: 'yellow'}}>
                            Website
                        </Text>
                        <TextInput
                            style={{height: 18, borderColor: 'gray', borderWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                    </View>

                    <View style = {{marginTop: 0, marginLeft: 0, marginRight: 0, height: 50, backgroundColor: 'purple', flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16, color: 'yellow'}}>
                            Bio
                        </Text>
                        <TextInput
                            style={{height: 18, borderColor: 'gray', borderWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                    </View>
                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50, backgroundColor: 'purple', flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16, color: 'blue'}}>
                            Try Instagram Business Tools
                        </Text>
                    </View>

                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50, backgroundColor: 'purple', flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16, color: 'black', fontWeight: 'bold'}}>
                            Private Information
                        </Text>
                    </View>

                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50, backgroundColor: 'purple', flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16, color: 'yellow'}}>
                            Email
                        </Text>
                        <TextInput
                            style={{height: 18, borderColor: 'gray', borderWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                    </View>

                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50, backgroundColor: 'purple', flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16, color: 'yellow'}}>
                            Phone
                        </Text>
                        <TextInput
                            style={{height: 18, borderColor: 'gray', borderWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                    </View>

                    <View style = {{flexGrow: 1, marginTop: 0, marginLeft: 0, marginRight: 0, height: 50, backgroundColor: 'purple', flexDirection: 'row', justifyContent: 'center'}}>

                        <Text style = {{flexGrow: 1, marginTop: 16, marginLeft: 16, color: 'yellow'}}>
                            Gender
                        </Text>
                        <TextInput
                            style={{height: 18, borderColor: 'gray', borderWidth: 1, marginTop: 16, marginRight: 12, width: width - 120}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
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
                    onRightButtonPress={this.props.setParentState}
                />

            </View>
        )
    }
}
