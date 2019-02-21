import React, { Component } from 'react'
import { Text, View,StyleSheet,Dimensions,ImageBackground,TextInput } from 'react-native'
import {Button,Toast} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {loginbackgroundImage} from '../../assets/index';
import { updateUser } from '../../redux/actions/userActions';
import { socketEmitAction } from '../../redux/actions/socketActions';

class LoginPageScreen extends Component {
  static navigationOptions = {
      header:null
  }
  constructor(props){
      super(props);
      this.state={
          username:'',
          password:'',
          takim:null,
          toastvisible:false,
          toastMessage:'',
          usernameError:'',
          
      }
      this.props.socket.on('join',this.socketUp.bind(this));
    
  } 
  socketLogin(e){
      console.log('gelendeğer',e);
    
      let user= {
        socketID:e.userID,
        userName:e.userName,
        userTeam:e.userTeam
    }
    console.log('usersocket',user);
    
    console.log('log',this.state.toastvisible);
    this.setState({toastvisible:true,toastMessage:'Başarılı bir şekilde giriş yaptınız yönlendiriliyorsunuz'});
     setTimeout(()=>{   
         
            this.props.onUpdateUser(user);
            this.props.navigation.navigate('Main');
        },2000)
       

  } 
  kontrol(){ 
     const {toastvisible,username} = this.state
     
      if(this.state.takim===null){         
          this.setState({toastvisible:true,toastMessage:'Lütfen Takım Seçiniz'});
      }
      if(username !=='' && this.state.takim!==null){
          let user = {
              userName:this.state.username,
              userTeam:this.state.takim
          }
          console.log('kontolruser',user);
          console.log('this.props.socket',this.props.socket);
       
          
          
               this.props.socket.emit('join',user); 
            
        }else{
            this.setState({usernameHelp:true,toastMessage:'Kullanıcı Adı Boş olamaz',usernameError:'Kullanıcı Adı Boş olamaz',toastvisible:!toastvisible});
      }
  }
  socketUp=(value)=>{      
    this.props.navigation.navigate('Main');
  }
  
  render() {
   
    return (
        <ImageBackground source={loginbackgroundImage} style={{height:'100%',width:'100%'}} >
            <View  style={{position:'absolute',left:'12%',top:'15%',height:'98%',width:'76.5%'}} >
            <View  style={{
                                        height:50,
                                        width:'90%',
                                        marginLeft:'5%',
                                        marginTop:'20%',
                                        
                                        borderRadius:90,
                                        backgroundColor:'#b2a6ce',
                                        
                                        alignItems:'center'}} >
                                <Text  style={{color:'black',marginTop:15,fontWeight:'bold',fontSize:16}} > Yarışma Ekranına 1 Adım Kaldı </Text>
                        </View>
              <View  style={{marginTop:'10%'}}  >
                  
                    
                    <View   style={{height:60,width:'90%',marginLeft:'5%',marginTop:'5%'}} >
                    <Text  style={{marginLeft:'2%',fontWeight:'600',fontSize:14}} > Kullanıcı Adınız </Text>    
                        <View  style={{
                                        height:40,
                                        width:'100%',
                                        marginTop:5,          
                                        borderRadius:12.5,
                                        backgroundColor:'#b2a6ce'
                                                                
                                    }} >
                            
                            <TextInput  placeholder='Kullanıcı Adınızı Giriniz' onChangeText={(username)=>this.setState({username})}    />
                            
                        </View>      
                    </View>
                    <View  style={{
                                        height:50,
                                        width:'70%',
                                        marginLeft:'15%',
                                        marginTop:'10%',         
                                    
                                        flexDirection:'row',
                                        justifyContent:'space-between'
                                        }} >
                            <View  style={{height:40,width:40,backgroundColor:this.state.takim===0 ? 'green' : '#b1a5cd',borderRadius:37.5,justifyContent:'center',alignItems:'center'}} >
                                <Button    onPress={()=>this.setState({takim:0})}  label='A' color='black' outlineColor='transparent' backgroundColor='transparent'  style={{height:'100%'}} />
                             
                            </View>   
                            <View  style={{height:40,width:40,backgroundColor:this.state.takim===1 ? 'green' : '#b1a5cd',borderRadius:37.5,justifyContent:'center',alignItems:'center'}} >
                            <Button   onPress={()=>this.setState({takim:1})}  label='B' color='black' outlineColor='transparent' backgroundColor='transparent' style={{height:'100%'}} />
                                 
                            </View>  
                            <View  style={{height:40,width:40,backgroundColor:this.state.takim===2 ? 'green' : '#b1a5cd',borderRadius:37.5,justifyContent:'center',alignItems:'center'}} >
                                <Button   onPress={()=>this.setState({takim:2})}  label='C' color='black' outlineColor='transparent' backgroundColor='transparent' style={{height:'100%'}} />
                             
                            </View>  
                            <View  style={{height:40,width:40,backgroundColor:this.state.takim===3 ? 'green' : '#b1a5cd',borderRadius:37.5,justifyContent:'center',alignItems:'center'}} >
                                <Button   onPress={()=>this.setState({takim:3})}  label='D' color='black' outlineColor='transparent' backgroundColor='transparent' style={{height:'100%'}} />
                              
                            </View>           
                                
                        </View>
                    <View  style={{height:20,backgroundColor:'transparent',width:null}}  />    
                    <View   style={{height:40,width:'90%',marginLeft:'5%',justifyContent:'center',alignItems:'stretch',backgroundColor:'#b19bc9',borderRadius:18.5}} >
                        <Button onPress={()=>this.kontrol()} label='Giriş Yap' color='black' labelStyle={{fontWeight:'bold',fontSize:18}}  outlineColor='transparent' backgroundColor='transparent' style={{height:'100%'}}  />
                    </View>                  
              </View>
                      
           
            </View>    
            
            <Toast  allowDismiss={true} 
                onDismiss={() => this.setState({toastvisible: false})}  
                position='bottom' 
                visible={this.state.toastvisible} 
                message={this.state.toastMessage}
                animated 
                autoDismiss={1000}
               

                />
        </ImageBackground>
     
    )
  }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0066E2',
        justifyContent: 'center',
       
        
    },
    H1:{
        fontSize:24,
        fontWeight: 'bold',
        color:'white'
    },
    H2:{
        fontSize:14,
        fontWeight: 'bold',
        color:'white'
    },
    Input:{
        height:70,
        width:'80%',
        marginLeft:'10%',
        padding:7,
        marginTop:15,
              
    
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
})

const mapStateToProps = (state,props) =>{
  
   
    
    return {
        user:state.user,
        navigation:props.navigation,
        socket:props.screenProps.socket
    }
}
const mapDispatchToProps ={
   onUpdateUser:updateUser,
   onSocketEmit:socketEmitAction
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPageScreen);