import React, { Component } from 'react';
import {
    View, Dimensions, TouchableOpacity, Image, Text, Modal, Button, ScrollView
} from 'react-native';
import EditProfile from './EditProfile.js'

const width = Dimensions.get('window').width

export default class UserView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        };
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({modalVisible:true});
    }

    closeModal() {
        this.setState({modalVisible:false});
    }
    
    render(){
        return(
            <ScrollView>
            <View style = {{flex: 1, flexDirection: 'column'}}>
                <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    // onRequestClose={() => this.closeModal()}
                >
                    <EditProfile setParentState = {this.closeModal}/>
                </Modal>

                <View style = {{marginTop: 20, flexDirection: 'row', justifyContent: 'center', height: 80, width: width, backgroundColor: 'green'}}>
                    <View style = {{ marginTop: 12, marginLeft: 12, height: 64, width: 64, borderRadius: 32, backgroundColor: 'purple'}}>
                    <TouchableOpacity>
                        <Image source = {require('./Camera.png')} />
                    </TouchableOpacity>
                    </View>

                    <View style = {{flexGrow: 1, flexDirection: 'column', justifyContent: 'center', marginLeft: 20, marginRight: 0, marginTop: 0, marginBottom: 0 }}>
                        <View style = {{backgroundColor: 'red', flexGrow: 1, marginLeft: 0, marginTop: 0, marginRight: 0, height: 40}}>

                        </View>
                        <View style = {{backgroundColor: 'blue', flexGrow: 1, flexDirection: 'row', marginLeft: 0, marginBottom: 0, marginRight: 0, height: 40, justifyContent: 'center'}}>

                            <TouchableOpacity
                                onPress = {this.openModal}
                                style = {{flexGrow: 1, marginLeft: 0, marginTop: 5, width: width - 96 - 55, height: 30, backgroundColor: 'purple'}}>

                            </TouchableOpacity>

                            <TouchableOpacity style = {{flexGrow: 1, marginRight: 10, marginTop: 5, width: 40, height: 30, backgroundColor: 'purple'}}>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <Text style = {{marginLeft: 12}}>
                    Nguyen Dinh Dung
                </Text>

                <View style = {{marginTop: 12, marginLeft: 0, marginRight: 0, height: 50, width: width,
                flexDirection: 'row', backgroundColor: 'purple'}}>
                    <Image source = {require('./Camera.png')}
                           style = {{marginLeft: 0, marginTop: 0, marginBottom: 0, width: width/4}} />

                </View>

                <View style = {{flexGrow: 1, alignItems: 'center', marginTop: 0, marginLeft: 0, marginBottom: 0, marginRight: 0, backgroundColor: 'red'}}>
                    <View style = {{marginTop: 68, width: 68, height: 68, borderRadius: 34, backgroundColor: 'green'}}>

                    </View>
                    <Text style = {{marginTop: 20, fontSize: 20, fontWeight: 'bold'}}>
                        Share Photos and Videos
                    </Text>
                    <Text style = {{marginTop: 20, fontSize: 16}}>
                        When you share photos and videos, they'll
                    </Text>
                    <Text style = {{marginTop: 10, fontSize: 16}}>
                        appear on your profile
                    </Text>
                    <Text style = {{marginTop: 30, fontSize: 16, color: 'blue'}}>
                        Share your first photo or video
                    </Text>

                </View>
            </View>
            </ScrollView>
        )
    }
}
