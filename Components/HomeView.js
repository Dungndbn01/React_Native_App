import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text
} from 'react-native';

export default class HomeView extends Component {
    render(){
        return(
            <ScrollView>
            <View style = {{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <Text>
                    ABC
                </Text>
            </View>
            </ScrollView>
        )
    }
}
