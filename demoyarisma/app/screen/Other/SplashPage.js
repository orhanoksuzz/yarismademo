import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class SplashPageScreen extends Component {
  static navigationOptions = {
      header:null
  }  
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
      setTimeout(()=>{
          this.props.navigation.navigate('Login');
      },100);
  }
  render() {
    return (
      <View style={Styles.container} >
        <Text  style={Styles.H1} > Demo Yarışma  </Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0066E2'
    },
    H1:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    }

    
})