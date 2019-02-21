import React, { Component } from 'react';
import { ImageBackground, Text,StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import {loginbackgroundImage} from '../../assets/index';
 class SplashPageScreen extends Component {
  static navigationOptions = {
      header:null
  }  
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    //console.log('userSplash',this.props.user);
      setTimeout(()=>{
          if(this.props.user==='' || this.props.user === undefined){
            this.props.navigation.navigate('Login');
          }else{
            this.props.navigation.navigate('Main');
          }
         
      },100);
  }
  render() {
     
    return (
      <ImageBackground source={loginbackgroundImage} style={Styles.container} >
        <Text  style={Styles.H1} > Demo Yarışma  </Text>
      </ImageBackground>
    );
  }
}

const Styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0066E2'
    },
    H1:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    }

    
})

const mapStateToProps = (state,props) =>{
    return{
        user:state.user,
        navigation:props.navigation
    }
}

export default connect(mapStateToProps)(SplashPageScreen);