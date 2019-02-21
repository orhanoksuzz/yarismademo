import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
const AnswerComponent = (props) =>{
  
  
    return(
      
      <View  style={{height:120,width:'90%',marginLeft:'5%',marginRight:'5%',justifyContent:'space-between',marginTop:50}}   >
          <View style={{height:50,width:'100%',justifyContent:'space-between',flexDirection:'row'}} >
              <View style={{flex:0.45}}  >
                 <TouchableOpacity  onPress={()=>props.onClick(0)}
                                    style={{
                                            flex:1,
                                            justifyContent:'center',
                                            borderWidth:0.7,
                                            borderRadius:37.5,
                                            backgroundColor:props.truAnswer===0 ? 'green' : props.clickedItem===0 ? 'yellow' : props.truAnswer===null ? null : 'gray'}}>
                   <Text style={{fontSize:18,fontWeight:'bold',marginLeft:5}} > A-) {props.answer.a}  </Text>
                  </TouchableOpacity>
                  
              </View>
              <View style={{flex:0.45}}  >
                 <TouchableOpacity  onPress={()=>props.onClick(1)}
                                    style={{
                                            flex:1,
                                            justifyContent:'center',
                                            borderWidth:0.7,
                                            borderRadius:37.5,
                                            backgroundColor:props.truAnswer===1 ? 'green' : props.clickedItem===1 ? 'yellow' : props.truAnswer===null ? null : 'gray'}}>
                  
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:5}} > B-) {props.answer.b}  </Text>
                 </TouchableOpacity>    
              </View>
          </View>
          <View style={{height:50,width:'100%',justifyContent:'space-between',flexDirection:'row'}} >
              <View style={{flex:0.45}}  >
                <TouchableOpacity  onPress={()=>props.onClick(2)}
                                  style={{flex:1,
                                           justifyContent:'center',
                                           borderWidth:0.7,
                                           borderRadius:37.5,
                                           backgroundColor:props.truAnswer===2 ? 'green' : props.clickedItem===2 ? 'yellow' : props.truAnswer===null ? null : 'gray'}} >
                      <Text style={{fontSize:18,fontWeight:'bold',marginLeft:5}} > C-) {props.answer.c} </Text>
                </TouchableOpacity>
                  
              </View>
              <View style={{flex:0.45}}  >
                <TouchableOpacity  onPress={()=>props.onClick(3)}
                                  style={{flex:1,
                                          justifyContent:'center',
                                          borderWidth:0.7,
                                          borderRadius:37.5,
                                          backgroundColor:props.truAnswer===3 ? 'green' : props.clickedItem===3 ? 'yellow' : props.truAnswer===null ? null : 'gray'}} >
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:5}} > D-) {props.answer.d}  </Text>
                </TouchableOpacity>
                 
              </View>
          </View>
      </View>
    );
  }

  export default AnswerComponent;