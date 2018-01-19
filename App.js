/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'

import HomeView from './Components/HomeView.js'
import SearchView from './Components/SearchView.js'
import AddPhotoView from './Components/AddPhotoView.js'
import FollowView from './Components/FollowView.js'
import UserView from './Components/UserView.js'

const deviceW = Dimensions.get('window').width

const basePx = 375

const rightButtonConfig =[ {
    title: 'Next',
    handler: () => alert('hello!'),
}, {title: 'Next2'} ];

const leftButtonConfig = [ {
    handler: () => alert('helloWorld!')},
    {    icon: require('./Image/Send.png'),
        id: "ABC"
    }
]


const titleConfig = {
    title: 'Instagram',
};

function px2dp(px) {
    return px *  deviceW / basePx
}

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home
                </Text>
            </View>
        )
    }
}

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Profile
                </Text>
            </View>
        )
    }
}

export default class App extends Component {
    state= {
        selectedTab: 'home',
        navBarHeight: 44
    };

    render() {
        return (
            <View style = {{flex: 1}}>
                <NavigationBar
                    style = {{height: this.state.navBarHeight}}
                    tintColor={'#EBF0E6'}
                    title={titleConfig}
                    rightButton={rightButtonConfig}
                    leftButton={leftButtonConfig}
                />

                <TabNavigator style={styles.container}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
                    badgeText="2"
                    onPress={() => this.setState({selectedTab: 'home', navBarHeight: 44})}>
                    <HomeView/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'search'}
                    title="Search"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="search" size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="search" size={px2dp(22)} color="#3496f0"/>}
                    onPress={() => this.setState({selectedTab: 'search', navBarHeight: 0})}>
                    <SearchView/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'camera'}
                    title="Add"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="camera" size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="camera" size={px2dp(22)} color="#3496f0"/>}
                    onPress={() => this.setState({selectedTab: 'camera'})}>
                    <AddPhotoView/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'heart'}
                    title="Follow"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="heart" size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="heart" size={px2dp(22)} color="#3496f0"/>}
                    onPress={() => this.setState({selectedTab: 'heart', navBarHeight: 0})}>
                    <FollowView/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'user'}
                    title="Profile"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
                    renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#3496f0"/>}
                    onPress={() => this.setState({selectedTab: 'user', navBarHeight: 44})}>
                    <UserView/>
                </TabNavigator.Item>

            </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
