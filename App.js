import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Greeting name="Rexxa"></Greeting>
        <Greeting name="Jaina"></Greeting>
        <Greeting name="Valeera"></Greeting>
      </View>
    )
  }
}
