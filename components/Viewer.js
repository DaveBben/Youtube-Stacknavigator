import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, StackNavigator } from 'react-native';

export default class Viewer extends React.Component {
    static navigationOptions = {
        title: 'View',
        headerStyle: {
            backgroundColor: '#212121',
        },
        headerTitleStyle: {
            color: '#fff'
        }
    };

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Text>{this.props.navigation.state.params.name}</Text>
            </View>
        );
    }
}


