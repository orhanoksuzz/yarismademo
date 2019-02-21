import React from 'react';
import {View,Text} from 'react-native';
const HeaderComponent = (props) =>{
    return (
      <View style={props.header} >
              <View style={props.headerLeft} >
                  <Text>  100K </Text>
              </View>
              <View style={props.headerCenter} >
                  <Text>  Sunucu </Text>
              </View>
              <View style={props.headerRight} >
                  <Text>  Logo </Text>
              </View>
          </View>
    )
  }
  export default HeaderComponent;