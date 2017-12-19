import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
      }}>
        <View style={{width: 70, height: 50, backgroundColor: 'powderblue'}}></View>
        <View style={{width: 70, height: 50, backgroundColor: 'skyblue'}}></View>
        <View style={{width: 70, height: 50, backgroundColor: 'steelblue'}}></View>
      </View>
    );
  }
}
