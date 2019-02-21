import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import {TextInput,Button,Toast} from 'react-native-ui-lib';

export default class LoginPageScreen extends Component {
  static navigationOptions = {
      header:null
  }
  constructor(props){
      super(props);
      this.state={
          username:'',
          password:'',
          button1:false,
          button2:false,
          toastvisible:false,
          toastMessage:'',
          usernameError:'',
         
      }
  }  
  kontrol(){
      const {button1,button2,toastvisible,username} = this.state
      console.log('user',username)
      if(!button1 && !button2){         
          this.setState({toastvisible:!toastvisible,toastMessage:'Lütfen Takım Seçiniz'});
      }
      if(username !==''){
        this.setState({toastvisible:!toastvisible,toastMessage:'Başarılı bir şekilde giriş yaptınız yönlendiriliyorsunuz'});
        let team;
        if(button1){
            team='A Takımı';
        }else if(button2){
            team='B Takımı';
        }else{
            team=null
        }
        setTimeout(()=>{
            this.props.navigation.navigate('Main',{username:this.state.username,team:team})
        },1000)
      }else{
            this.setState({usernameHelp:true,toastMessage:'Kullanıcı Adı Boş olamaz',usernameError:'Kullanıcı Adı Boş olamaz',toastvisible:!toastvisible});
      }
  }
  render() {
      console.log('state',this.state)
    return (
      <View    style={Styles.container} >
         <View style={{justifyContent:'center',alignItems:'center'}} >
             <Text  style={Styles.H1} > Yarışma Ekranına 1 Adım Kaldı </Text>
         </View>   
        <View  style={Styles.Input} >
                 <Text  style={Styles.H2} > Kullanıcı Adınız</Text>
                <TextInput   
                    onChangeText={(username)=>this.setState({username})} 
                    value={this.state.username} 
                    maxLength = {15}  
                    showCharacterCounter
                    enableErrors={true}
                    
                    error={this.state.usernameError}
                    onFocus={()=>this.setState({usernameError:''})}
                    />
        </View>
        <View  style={Styles.InputGroup} >
                <Button disabled={this.state.button1} label='A Takımı' onPress={()=>this.setState({button1:true,button2:false})} />  
                <Button disabled={this.state.button2} label='B Takımı' onPress={()=>this.setState({button1:false,button2:true})} />  
        
        </View>
        <Text  style={{marginLeft:'40%'}} > Takımı Seç</Text>
        <Button  style={{marginTop:15}}  enableShadow  label='Giriş Yap' fullWidth onPress={()=>this.kontrol()} />  
        <Toast  allowDismiss={true} 
                onDismiss={() => this.setState({toastvisible: false})}  
                position='bottom' 
                visible={this.state.toastvisible} 
                message={this.state.toastMessage}
                animated 
                autoDismiss={1000}
               

                />
      </View>
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
    InputGroup:{
        flexDirection:'row',
        justifyContent: 'space-between',
        height:50,
        width:'80%',
        marginLeft:'10%',
        padding:7,      
        marginTop: 30,
    }
})