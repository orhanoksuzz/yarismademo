import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
import {
    HeaderComponent,
    AnswerComponent,
    QuestionsComponent,
    RemainingTimeComponent
} from '../components/index';
import { Toast } from 'react-native-ui-lib';
const questionsList = [
    {
        questionText:'İstanbulun Fethi',
        answer:{
            a:'1471',
            b:'1456',
            c:'1453',
            d:'1299'
        },
        trueAnswer:2
    },{
        questionText:'İstanbulun Kurtuluşu',
        answer:{
            a:'1926',
            b:'1919',
            c:'1920',
            d:'1921'
        },
        trueAnswer:1
    },{
        questionText:'Tolgayı Kim Üzdü?',
        answer:{
            a:'Oğuzhan',
            b:'Volkan',
            c:'Orhan',
            d:'Hiçbiri'
        },
        trueAnswer:3
    },{
        questionText:'Uygulama Ne zaman biter?',
        answer:{
            a:'Bir kaç gün içinde',
            b:'Çoktan Bitti',
            c:'Bir kaç ay içinde',
            d:'Bu uygulama bitmez'
        },
        trueAnswer:0
    },
]
export default class MainPageScreen extends Component {
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props);
        this.state={
          timeLeft:10,
          clicked:false,
          truAnswer:null,
          finis:false,
          answer:null, // 0='A'  1='B' 2='C' 3='D'
          questionIndex:0,
          toastvisible:false,
          toastMessage:''
        }
      }
    componentDidMount(){       
        this.timerfunc();     
        
    }
    timerfunc(){
        this.setState({timeLeft:this.state.timeLeft-1});
        setTimeout(()=>{
          clearInterval(timer1);
          this.setState({clicked:true,truAnswer:questionsList[this.state.questionIndex].trueAnswer});
          setTimeout(()=>{
            this.setState({finis:true,truAnswer:null,answer:null});
          },3000);
        },10000);
        
        let timer1 = setInterval(()=>{
          this.setState({timeLeft:this.state.timeLeft-1});
        },1000);
    }
    kontrol(){
        let a = this.state.questionIndex+1;
        if(a>= questionsList.length){
            this.setState({toastMessage:'Yarışma Bitti',toastvisible:true});
            
        }else{
            this.setState({finis:false,questionIndex:a,truAnswer:null,timeLeft:10,clicked:false},()=>{this.timerfunc()})
        }
    }
    render() {
        console.log('this.state',this.state);
        if(this.state.finis){
          return(
            <View style={styles.container}>
                <HeaderComponent header={styles.header} headerLeft={styles.headerLeft} headerCenter={styles.headerCenter} headerRight={styles.headerRight} />
                <Text  style={{marginTop:150}} > Sıradaki Soru</Text>
                <TouchableOpacity  style={{marginTop:50,height:80,width:200,justifyContent:'center',alignItems:'center',borderWidth:1,backgroundColor:'yellow'}}  
                                  onPress={()=>this.kontrol()} >
                  <Text> Sıradaki Soru</Text>
                </TouchableOpacity>
                <Toast  allowDismiss={true} 
                    onDismiss={() => this.setState({toastvisible: false})}  
                    position='bottom' 
                    visible={this.state.toastvisible} 
                    message={this.state.toastMessage}
                    animated 
                    autoDismiss={1000}
            

                />
            </View>
          );
        }else{
          return (
            <View style={styles.container}>
                 <HeaderComponent header={styles.header} headerLeft={styles.headerLeft} headerCenter={styles.headerCenter} headerRight={styles.headerRight} />
               
                
                <QuestionsComponent questionTitle={questionsList[this.state.questionIndex].questionText}   />
                <AnswerComponent   answer={questionsList[this.state.questionIndex].answer}  truAnswer={this.state.truAnswer} clickedItem={this.state.answer} onClick={(value)=>!this.state.clicked ? this.setState({answer:value,clicked:true}) : null} />
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