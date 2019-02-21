/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const HeaderComponent = (props) =>{
  return (
    <View style={styles.header} >
            <View style={styles.headerLeft} >
                <Text>  100K </Text>
            </View>
            <View style={styles.headerCenter} >
                <Text>  Sunucu </Text>
            </View>
            <View style={styles.headerRight} >
                <Text>  Logo </Text>
            </View>
        </View>
  )
}
const QuestionsComponent = (props) => {
  return (
    <View style={{height:100,width:'90%',justifyContent:'center',marginTop:100,borderWidth:0.7,borderRadius:37.5,marginLeft:'5%',marginRight:'5%'}} >
        <Text>  Mondros Ateşkeş antlaşması kaç yılında imzalanmıştır?  </Text>
    </View>
  );
}
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
                 <Text style={{fontSize:18,fontWeight:'bold',marginLeft:5}} > A-) 1925  </Text>
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
                
                  <Text style={{fontSize:18,fontWeight:'bold',marginLeft:5}} > B-) 1919  </Text>
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
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:5}} > C-) 1921  </Text>
              </TouchableOpacity>
                
            </View>
            <View style={{flex:0.45}}  >
              <TouchableOpacity  onPress={()=>props.onClick(3)}
                                style={{flex:1,
                                        justifyContent:'center',
                                        borderWidth:0.7,
                                        borderRadius:37.5,
                                        backgroundColor:props.truAnswer===3 ? 'green' : props.clickedItem===3 ? 'yellow' : props.truAnswer===null ? null : 'gray'}} >
                  <Text style={{fontSize:18,fontWeight:'bold',marginLeft:5}} > D-) 1918  </Text>
              </TouchableOpacity>
               
            </View>
        </View>
    </View>
  );
}
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
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      timeLeft:10,
      clicked:false,
      truAnswer:null,
      finis:false,
      answer:null // 0='A'  1='B' 2='C' 3='D'
    }
  }
  componentDidMount(){
   
    this.timerfunc();
  
    
  }
  timerfunc(){
    this.setState({timeLeft:this.state.timeLeft-1});
    setTimeout(()=>{
      clearInterval(timer1);
      this.setState({clicked:false,truAnswer:2});
      setTimeout(()=>{
        this.setState({finis:true});
      },3000);
    },10000);
    
    let timer1 = setInterval(()=>{
      this.setState({timeLeft:this.state.timeLeft-1});
    },1000);
  }
  render() {
    console.log('this.state',this.state);
    if(this.state.finis){
      return(
        <View style={styles.container}>
            <HeaderComponent />
            <Text  style={{marginTop:150}} > Süreniz Bitti</Text>
            <TouchableOpacity  style={{marginTop:50,height:80,width:200,justifyContent:'center',alignItems:'center',borderWidth:1,backgroundColor:'yellow'}}  
                              onPress={()=>this.setState({finis:false,answer:null,truAnswer:null,timeLeft:10},()=>{this.timerfunc()})} >
              <Text> Yeniden Oyna</Text>
            </TouchableOpacity>
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
            <HeaderComponent />
            
            <QuestionsComponent   />
            <AnswerComponent truAnswer={this.state.truAnswer} clickedItem={this.state.answer} onClick={(value)=>!this.state.clicked ? this.setState({answer:value,clicked:true}) : null} />
            <RemainingTimeComponent  time={this.state.timeLeft} />
        </View>
      );
    }
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor: '#0066E2',

  },
  header: {
    height:50,
    width:null,
    justifyContent:'center',
    flexDirection: 'row',
  },
  headerLeft:{
    marginTop: 15,
    height:20,
    width:'30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter:{
    marginTop:15,
    height:20,
    width:'40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight:{
    marginTop:15,
    height:20,
    width:'30%',
    justifyContent: 'center',
    alignItems: 'center',
  }

});
