import React from 'react';
import {View,Text} from 'react-native';
const QuestionsComponent = (props) => {
    return (
      <View style={{height:100,width:'90%',justifyContent:'center',marginTop:100,borderWidth:0.7,borderRadius:37.5,marginLeft:'5%',marginRight:'5%'}} >
          <Text>  {props.questionTitle} </Text>
      </View>
    );
  }

  export default QuestionsComponent;