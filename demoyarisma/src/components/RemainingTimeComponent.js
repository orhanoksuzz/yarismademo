import React from 'react';
import {View,Text} from 'react-native';
const RemainingTimeComponent = (props) =>{
  
    return (
      <View style={{height:50,width:null,alignItems:'center',justifyContent:'center',marginTop:50}} >
            <View style={{height:40,
                          width:40,
                          borderWidth:1,
                          borderRadius:360,
                          justifyContent:'center',
                          alignItems:'center'}}  >
                <Text> {props.time} </Text>
            </View>
      </View>
    );
  }
  export default RemainingTimeComponent;