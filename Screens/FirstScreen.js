import * as React from 'react';
import { Text, View, Button } from 'react-native';
const util = require('util');

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'Sehife yonlendirme',
  };
  render() {
    var {navigate} = this.props.navigation;
    return (
      <View>
        <Text>
          Salam 1ci ekrana xos geldiniz
        </Text>
        
        <Button 
          onPress={
            () => navigate("Second", {})
          }
          title="Ikinci ekrana get"
        />

      </View>
    );
  }
}