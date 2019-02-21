import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,ImageBackground,TextInput,Dimensions } from 'react-native'
import {
    HeaderComponent,
    AnswerComponent,
    QuestionsComponent,
    RemainingTimeComponent
} from '../components/index';
import { Toast,Button } from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {backgroundImage,soruImage,cevapImage,waitingAnimated} from '../assets/index';
import {updateQuestion} from '../redux/actions/questionsActions';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LottieView from 'lottie-react-native';
const MAX_POINTS = 15;
const SoruComponent = (props) =>{
  return(
    <ImageBackground source={soruImage} style={{ height:156.5,width:261.69,marginLeft:'8%',marginTop:'5%'}} >
    <View style={{
                  marginTop:8.25,
                  marginLeft:20,
                  height:140,
                  width:223.69
                  }} >
          <Text style={{flexGrow:1,width:220,textAlignVertical:'center'}} > {props.question}  </Text>
    </View>
   
  </ImageBackground>
  )
}
const TakimComponent = (props) =>{
  return(
    <View style={{height:60,width:'90%',marginLeft:'5%',marginTop:'10%'}} >
                  <View  style={{height:50,width:'70%',marginLeft:'15%',marginTop:'1%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
                    <View   style={{height:45,width:45,borderRadius:37.5,backgroundColor:props.team === 0 ? 'green':'#b1a5cd',justifyContent: 'center',alignItems:'center'}}>
                            <Text  style={{fontWeight:'500',fontSize:18}} > A </Text>
                    </View>              
                    <View   style={{height:45,width:45,borderRadius:37.5,backgroundColor:props.team === 1 ? 'green':'#b1a5cd',justifyContent: 'center',alignItems:'center'}}> 
                         <Text  style={{fontWeight:'500',fontSize:18}} > B </Text>
                    </View>         
                    <View   style={{height:45,width:45,borderRadius:37.5,backgroundColor:props.team === 2 ? 'green':'#b1a5cd',justifyContent: 'center',alignItems:'center'}}> 
                          <Text  style={{fontWeight:'500',fontSize:18}} > C </Text>
                    </View>                     
                    <View   style={{height:45,width:45,borderRadius:37.5,backgroundColor:props.team === 3 ? 'green':'#b1a5cd',justifyContent: 'center',alignItems:'center'}}> 
                         <Text  style={{fontWeight:'500',fontSize:18}} > D </Text>
                    </View>                  
                  </View>          
    </View>
  )
}
const CevapComponent = (props) =>{
  console.log('propscomponent',props)
  if(props.complate){
    return(
      <View  style={{height:210,width:'90%',marginLeft:'5%',marginTop:'10%'}} >
                <View  style={{
                                height:40,
                                width:250,
                                borderRadius:38,
                                borderWidth:1,
                                borderColor:'white',
                                marginLeft:'5%',
                                marginTop:10,
                                justifyContent:'center',
                                alignItems:'flex-start',                               
                                backgroundColor:props.trueAnswer===0 ? '#6dbc7e': props.selectAnswer===0 ? '#e51521' : '#5A5151'  
                                }}>
                   
                    <Text style={{marginLeft:5}} >   {props.answer.A} </Text>    

                        
                </View> 
                <View  style={{
                                height:40,
                                width:250,
                                borderRadius:38,
                                borderWidth:1,
                                borderColor:'white',
                                marginLeft:'5%',
                                marginTop:10,
                                justifyContent:'center',
                                alignItems:'flex-start',
                                backgroundColor:props.trueAnswer===1 ? '#6dbc7e': props.selectAnswer===1 ? '#e51521' : '#5A5151'  
                                }}>
                  
                    <Text style={{marginLeft:5}} >  {props.answer.B}  </Text>   
                </View> 
                <View  style={{
                              height:40,
                              width:250,
                              borderRadius:38,
                              borderWidth:1,
                              borderColor:'white',
                              marginLeft:'5%',
                              marginTop:10,
                              justifyContent:'center',
                              alignItems:'flex-start',                              
                              backgroundColor:props.trueAnswer===2 ? '#6dbc7e': props.selectAnswer===2 ? '#e51521' : '#5A5151'  
                                 }}>
               
                    <Text style={{marginLeft:5}} >   {props.answer.C}  </Text>  
                </View> 
                <View  style={{
                                height:40,
                                width:250,
                                borderRadius:38,
                                borderWidth:1,
                                borderColor:'white',
                                marginLeft:'5%',
                                marginTop:10,
                                justifyContent:'center',
                                alignItems:'flex-start',
                                backgroundColor:props.trueAnswer===3 ? '#6dbc7e': props.selectAnswer===3 ? '#e51521' : '#5A5151'  
                              }}>
                <Text style={{marginLeft:5}} >   {props.answer.D}  </Text>   
                </View> 
                
                  
    </View>
    )
  }else{
    return(
      <View  style={{height:210,width:'90%',marginLeft:'5%',marginTop:'10%'}} >
                <View  style={{
                                height:40,
                                width:250,
                                borderRadius:38,
                                borderWidth:1,
                                borderColor:'white',
                                marginLeft:'5%',
                                marginTop:10,
                                justifyContent:'center',
                                alignItems:'flex-start',
                                backgroundColor:props.selectAnswer===0 ? 'yellow' : 'transparent'
                                }}>
                  <TouchableOpacity  style={{height:40,width:250, borderRadius:38,
                                               justifyContent:'center',
                                                alignItems:'flex-start'}} 
                                            onPress={()=>props.selectAnswer ? null : props.clickedAnswer(0)}
                                        >
                          <Text style={{marginLeft:5}} >   {props.answer.A} </Text>    
                    </TouchableOpacity>
                </View> 
                <View  style={{
                              height:40,
                              width:250,
                              borderRadius:38,
                              borderWidth:1,
                              borderColor:'white',
                              marginLeft:'5%',
                              marginTop:10,
                              justifyContent:'center',
                              alignItems:'flex-start',
                              backgroundColor:props.selectAnswer===1 ? 'yellow' : 'transparent'
                              }}>
                  <TouchableOpacity  style={{height:40,width:250, borderRadius:38,
                                                justifyContent:'center',
                                                  alignItems:'flex-start'}} 
                                          onPress={()=>props.selectAnswer ? null : props.clickedAnswer(1)}
                                          >
                            <Text style={{marginLeft:5}} >   {props.answer.B} </Text>    
                      </TouchableOpacity>  
                </View> 
                <View  style={{
                                height:40,
                                width:250,
                                borderRadius:38,
                                borderWidth:1,
                                borderColor:'white',
                                marginLeft:'5%',
                                marginTop:10,
                                justifyContent:'center',
                                alignItems:'flex-start',
                                backgroundColor:props.selectAnswer===2 ? 'yellow' : 'transparent'
                                }}>
                    <TouchableOpacity  style={{height:40,width:250, borderRadius:38,
                                               justifyContent:'center',
                                                alignItems:'flex-start'}} 
                                            onPress={()=>props.selectAnswer ? null : props.clickedAnswer(2)}
                                        >
                          <Text style={{marginLeft:5}} >   {props.answer.C} </Text>    
                    </TouchableOpacity>   
                </View> 
                <View  style={{
                                height:40,
                                width:250,
                                borderRadius:38,
                                borderWidth:1,
                                borderColor:'white',
                                marginLeft:'5%',
                                marginTop:10,
                                justifyContent:'center',
                                alignItems:'flex-start',
                                backgroundColor:props.selectAnswer===3 ? 'yellow' : 'transparent'
                                }}>
                      
                     <TouchableOpacity  style={{height:40,width:250, borderRadius:38,
                                               justifyContent:'center',
                                                alignItems:'flex-start'}} 
                                          onPress={()=>props.selectAnswer ? null : props.clickedAnswer(3)}
                                        >
                          <Text style={{marginLeft:5}} >   {props.answer.D} </Text>    
                    </TouchableOpacity>         
                </View> 
                
                  
    </View>
    )
  }
  
}
const TimerComponent = (props) => {
  if(!props){
    return(
      <View style={{height:70,width:70,marginLeft:'38%',marginTop:'5%',borderRadius:37.5,backgroundColor:'#b1a5cd',justifyContent:'center',alignItems:'center'}} >
                  <Text style={{color:'black',fontWeight:'bold',fontSize:24,marginTop:'18%'}} >{props.time}</Text>
      </View>
    )
  }else{
    return(
      <View style={{
                    height:70,
                    width:70,
                    marginLeft:'38%',
                    borderRadius:37.5,
                    backgroundColor:'#b1a5cd',
                    marginTop:'5%'
                   }} >
      
       <AnimatedCircularProgress
          size={70}
          width={3}
          fill={100}
          tintColor="red"
          duration={props.timeLeft*1000}
          onAnimationComplete={() => props.complateClick()}
          backgroundColor="#b1a5cd">
        
              {            
                (duration) => (
                  <Text >
                    { Math.round(((MAX_POINTS * duration / 100)-15)*(-1)) }
                  </Text>
                )
              }    
        </AnimatedCircularProgress>
    </View>
    )
   
  }
  
}
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
          toastMessage:'',
          viewstate:'waiting', // waiting, ready,success
          
        }
        this.props.socket.on('viewon',this.questionview.bind(this));
        this.props.socket.on('question',this.questionadd.bind(this));
        this.props.socket.on('questionanswer',this.questionanswerres.bind(this));
      }
      questionview(e){
        console.log('questionview',e);
        this.setState({viewstate:e});
      }
      componentWillMount = () => {
        console.log('MainPage',this.props.questionsList);     
        
        this.setState({question:this.props.questionsList[0]}); 
      }
      componentDidMount() {
        this.props.socket.emit('question','deneme');
        console.log('state',this.props.questionsList);
      }
      
      questionadd=(question)=>{
        console.log('question on',question);
        let questions = {
          questionID:question.questionID,
          questionText:question.questionDetails,
          answer:question.questionAnswer,
          trueAnswer:question.questionTrue
      }
      console.log('answer',questions.answer.A)
      this.props.onquestionAdd(questions);
       this.setState({questions,viewstate:'ready'});
       
  
      }
      questionAnswerAdd = () => {
        let questionanswer ;
        switch (this.state.answer) {
          
          case 0:
            questionanswer = {
              questionID:this.state.questions.questionID,
              questionAnswer:'A'
            }
            break;
          case 1:
            questionanswer = {
              questionID:this.state.questions.questionID,
              questionAnswer:'B'
            }  
            break;
          case 2:
            questionanswer = {
              questionID:this.state.questions.questionID,
              questionAnswer:'C'
            }
            break;
          case 3:
            questionanswer = {
              questionID:this.state.questions.questionID,
              questionAnswer:'D'
            }
            break;    
          default:
            questionanswer = {
              questionID:this.state.questions.questionID,
              questionAnswer:null
            }
            break;
        }
      
        this.props.socket.emit('questionanswer',questionanswer);
      }
    
    kontrol(){
      /*
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
        */
        if(this.state.durum){
          this.setState({viewstate:'waiting',clicked:false,answer:null});
        }else{
          this.setState({toastMessage:'Elendiniz',toastvisible:true});
        }
    }
    questionanswerres = (e) =>{
      console.log('geldi',e)
      this.setState({durum:e.result,viewstate:'success'})
    }
    successScreen() {    
          return(
            <ImageBackground source={backgroundImage} style={{height:'100%',width:'100%'}} >
                    <View  style={{position:'absolute',left:'12%',top:'1%',height:'98%',width:'76.5%'}} >
             
                        <View style={{height:200,width:'80%',justifyContent:'center',marginLeft:'10%'}} >
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
            </ImageBackground>
            
          );
        
       
    }
    yarismaScreen(){
      
      return(
        <ImageBackground source={backgroundImage} style={{height:'100%',width:'100%'}} >
        <View  style={{position:'absolute',left:'12%',top:'1%',height:'98%',width:'76.5%'}} >
            <TimerComponent timeLeft={15} complateClick={()=>this.questionAnswerAdd()} />
          
            <SoruComponent question={this.state.questions.questionText} />
            <TakimComponent team={this.props.user.userTeam} />
            <CevapComponent 
                complate={this.state.finis} 
                answer={this.state.questions.answer} 
                trueAnswer={this.state.questions.trueAnswer} 
                clickedAnswer={(answer)=>this.setState({answer})}
                selectAnswer={this.state.answer}
                
                />

        </View>    
        
        
    </ImageBackground>
      )
    }
    waitingScreen(){
        return(
          <View  style={{flex:1,justifyContent:'center',backgroundColor:'#0066E2'}} >
              <LottieView
                source={waitingAnimated}
                autoPlay
                loop
              />
          </View>
        )
    }
    render(){
      console.log('sate',this.state);
      const {viewstate} = this.state;
      switch (viewstate) {
        case 'waiting':
              return this.waitingScreen();         
        case 'ready':
            return this.yarismaScreen();
        case 'success':
            return this.successScreen();
        default:
          return this.waitingScreen();   
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
    
    return {
        questionsList:state.questionsReducer,
        user:state.userReducers,
        navigation:props.navigation,
        socket:props.screenProps.socket
    }
  
};
const mapDispatchToProps={
    onquestionAdd:updateQuestion
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPageScreen);