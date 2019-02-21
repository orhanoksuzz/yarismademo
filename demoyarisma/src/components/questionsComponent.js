import React from 'react';
import {View,Text} from 'react-native';
const QuestionsComponent = (props) => {
    return (
      <View style={{minHeight:100,maxHeight:200,width:'90%',alignItems:'stretch',marginTop:30,marginLeft:'5%',marginRight:'5%'}} >
          <Text style={{fontSize:24,color:'white',fontWeight:'bold'}}  >  {props.questionTitle} </Text>
      </View>
    );
  }

  export default QuestionsComponent;