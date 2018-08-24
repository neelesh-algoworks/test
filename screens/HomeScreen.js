import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = ({navigation})=> {
        return {title: 'Home',
    headerRight: (
        <Button
        onPress = {()=>navigation.navigate('MyModal')}
        title = "Info"
        color = "#f4511e"
        />
    )};
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', fontWeight: 'bold', fontSize: 20}}>
                <Text>Home Screen</Text>
            <Button 
            title = "Go to Details"
            color = "#841584"
            onPress = {() => navigate('Details', {
                itemId: 1234,
                otherParam: "anything you want here!"
            })} />
            </View>
        )
    }
}