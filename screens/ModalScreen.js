import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class ProfileScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Button
                    title="This is a modal. Wanna go back?"
                    color="#841584"
                    onPress={() => navigation.goBack()}
                />
            </View>
        );
    }
}