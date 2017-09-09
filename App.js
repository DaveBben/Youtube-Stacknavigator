import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Viewer from './components/Viewer'

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      color: '#fff'
    }
  };

  constructor() {
    super()
    this.state = {
      data: [{ name: 'Dave' }, { name: 'Bob' }],
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.name}
          renderItem={({ item }) => <View><TouchableOpacity  onPress={() => navigate('Viewer', { name: item.name })} ><Text style={styles.text}>{item.name}</Text></TouchableOpacity ></View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  text: {
    fontSize: 40,
  },
  centering: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },


});

const people = StackNavigator({
  Home: { screen: App },
  Viewer: { screen: Viewer },
});

AppRegistry.registerComponent('youtubestacknavigator', () => people);



