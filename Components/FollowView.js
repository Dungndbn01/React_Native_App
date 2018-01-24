import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBarNav from 'top-bar-nav';
import Following from "./Following.js";
import You from "./You.js"

const ROUTES = {
    Following,
    You
};

const ROUTESTACK = [
    { label: 'Following', title: 'Following' },
    { label: 'You', title: 'You' }
];

export default class FollowView extends React.Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <TopBarNav
                    routeStack={ROUTESTACK}
                    renderScene={(route, i) => {
                        let Component = ROUTES[route.title];
                        return <Component index={i} />;
                    }}
                    headerStyle={[styles.headerStyle, { paddingTop: 20 }]}
                    labelStyle={styles.labelStyle}
                    underlineStyle={styles.underlineStyle}
                    imageStyle={styles.imageStyle}
                    sidePadding={0}
                    inactiveOpacity={1}
                    fadeLabels={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        borderBottomWidth: 1,
        borderColor: '#e6faff',
        backgroundColor: '#3385ff'
    },
    labelStyle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff'
    },
    imageStyle: {
        height: 20,
        width: 20,
        tintColor: '#e6faff'
    },
    underlineStyle: {
        height: 3.6,
        backgroundColor: '#e6faff'
    }
});
