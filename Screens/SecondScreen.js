import React from 'react';
import { Text, View, Button } from 'react-native';

export default class SecondScreen extends React.Component {
  static navigationOptions = {
    title: '2-ci sehife',
  };
  render() {
    return (
      <View>
        <Text>Salam 2-ci ekrana xos geldiniz!!!!</Text>
        <Text style={{fontWeight:"bold", fontSize:18, color: "red"}}>Bu yazini gordunuzse demekki ikinci ekrana kecid elediniz</Text>
      </View>
    );
  }
}