import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
class RegisterPageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> RegisterPageScreen </Text>
      </View>
    );
  }
}
export default  connect ()(RegisterPageScreen);