import React, {Component} from 'react';
import {View, Text, Button } from 'react-native';


export default class DetailsScreen extends Component{
    static navigationOptions = ({navigation, navigationOptions}) => {
        const {param} = navigation.state;

        return {
            title: param? param.otherParmas:'A Nested Way',
            headerStyle:{
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
            headerRight: (
                <Button 
                onPress = {() => alert('This is a button')}
                title = "Info"
                color = "#fff"
                />
            )
        };
    }
    render() {
        const {navigation} = this.props;
        const itemid = navigation.getParam('itemId', 'NO_ID');
        const otherParmas = navigation.getParam('otherParam', 'Not required, not provided')
        return(
            <View style ={{flex: 1, alignItem: 'center', justifyContent: 'center'}} >
                <Text>I am DetailsScreen!</Text>
                <Text>Item ID: {JSON.stringify(itemid)}</Text>
                <Text>Other Parameter: {JSON.stringify(otherParmas)}</Text>
                <Button
                title = "Navigate to Home"
                onPress = {()=>navigation.navigate('Home')}
                />
                <Button
                title = "Push to Home"
                onPress = {()=>navigation.push('Home')}
                />
                <Button
                title = "Go Back"
                onPress = {()=>navigation.goBack()}
                />

            </View>
        );
    }
}