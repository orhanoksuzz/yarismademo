import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
import {
    HeaderComponent,
    AnswerComponent,
    QuestionsComponent,
    RemainingTimeComponent
} from '../components/index';
import { Toast,Button } from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {updateQuestion} from '../redux/actions/questionsActions';
class MainPageScreen extends Component {
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
      componentWillMount = () => {
        console.log('MainPage',this.props.questionsList);      
      }
      
    componentDidMount(){ 
       
        this.timerfunc();
             
        
    }
    timerfunc(){
        this.setState({timeLeft:this.state.timeLeft-1});
        setTimeout(()=>{
          clearInterval(timer1);
          this.setState({clicked:true,truAnswer:this.props.questionsList[this.state.questionIndex].trueAnswer});
          setTimeout(()=>{
           let durum;
           if(this.state.truAnswer === this.state.answer){
             durum = true;
            console.log('dogru bildi',this.state);
           }else{
             durum=false;
             console.log('yanlıs bildi',this.state)
           }
           this.setState({finis:true,truAnswer:null,answer:null,durum:durum});
          },3000);
        },10000);
        
        let timer1 = setInterval(()=>{
          this.setState({timeLeft:this.state.timeLeft-1});
        },1000);
    }
    kontrol(){
      console.log('thisstate',this.state)
        let a = this.state.questionIndex+1;
        if(a>= this.props.questionsList.length){
            this.setState({toastMessage:'Yarışma Bitti',toastvisible:true});
            
        }else if(this.state.durum===0){
          this.setState({finis:false,questionIndex:a,truAnswer:null,timeLeft:10,clicked:false},()=>{this.timerfunc()})
      
        }else{
          this.setState({toastMessage:'Elendiniz',toastvisible:true});
          clearInterval();
          
        }
    }
    render() {
    
        if(this.state.finis){
          return(
            <View style={styles.container}>
               <View style={{height:50,width:null,backgroundColor:'#0082AE',justifyContent:'center',alignItems:'center'}} >
                  <Text style={{fontSize:24,fontWeight:'bold'}} > Sonuç Ekranı </Text>
                </View>
                <View style={{height:200,width:'80%',justifyContent:'center'}} >
                    <TouchableOpacity  style={{marginTop:50,height:80,width:200,justifyContent:'center',alignItems:'center',borderWidth:1,backgroundColor:'yellow'}}  
                                      onPress={()=>this.kontrol()} >
                      <Text> {this.state.durum ? 'Sıradaki Soru':'Elendiniz'}</Text>
                    </TouchableOpacity>
                </View>
                
                <Toast  allowDismiss={true} 
                    onDismiss={() => this.props.navigation.navigate('Login')}  
                    position='bottom' 
                    visible={this.state.toastvisible} 
                    message={this.state.toastMessage}
                    animated 
                    autoDismiss={2000}
            

                />
            </View>
          );
        }else{
          // <HeaderComponent header={styles.header} headerLeft={styles.headerLeft} headerCenter={styles.headerCenter} headerRight={styles.headerRight} />
               
          return (
            <View style={styles.container}>
                <View style={{height:50,width:null,backgroundColor:'#0082AE',justifyContent:'center',alignItems:'center'}} >
                  <Text style={{fontSize:24,fontWeight:'bold'}} > Soru : 1 </Text>
                </View>
                
                <QuestionsComponent questionTitle={this.props.questionsList[this.state.questionIndex].questionText}   />
                <AnswerComponent   
                answer={this.props.questionsList[this.state.questionIndex].answer}  truAnswer={this.state.truAnswer} 
                clickedItem={this.state.answer} 
                onClick={(value)=>!this.state.clicked ? this.setState({answer:value,clicked:true}) : null} />
                <View  style={styles.Inputt} >
                    <View  style={styles.InputGroup} >
                        <Button   disabled={this.props.user.userTeam===0 ? true : false} label='A Takımı' />  
                        <Button  disabled={this.props.user.userTeam===1 ? true : false} label='B Takımı'  />  
                
                    </View>
                    <View style={styles.InputGroup} > 
                        <Button  disabled={this.props.user.userTeam===2 ? true : false} label='C Takımı' />  
                        <Button  disabled={this.props.user.userTeam===3 ? true : false} label='D Takımı' />  
                
                    </View>
                      
                </View>
                <RemainingTimeComponent  time={this.state.timeLeft} />
                
            </View>
          );
        }
       
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,   
      backgroundColor: '#0EA5E4',
  
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
    },
    Inputt:{
      height:100,
      width:'80%',
      marginLeft:'10%',
   
      marginTop:15,            
    },
    InputGroup:{
      flexDirection:'row',
      justifyContent: 'space-between',
      height:50,
      width:'80%',
      marginLeft:'10%',
      padding:7,      
    }
  
  });

const mapStateToProps = (state,props) =>{
    console.log('main state',state);
    return {
        questionsList:state.questionsReducer,
        user:state.userReducers,
        navigation:props.navigation
    }
  
};
const mapDispatchToProps={
    onquestionAdd:updateQuestion
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPageScreen);