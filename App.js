import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="I love to blink"></Blink>
        <Blink text="Yes blinking is so great"></Blink>
        <Blink text="Why did they ever take this out of HTML"></Blink>
        <Blink text="Look at me look at me look at me"></Blink>
      </View>
    )
  }
}
