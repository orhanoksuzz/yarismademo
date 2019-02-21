import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/sidebar';
import Content from './components/content';
import SocketIOClient from 'socket.io-client';
const socketURL = 'http://isitmeyarisma.herokuapp.com';
const socket = SocketIOClient(socketURL); 



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      togle:true,
    }
    
  }
  togle(){
    this.setState({togle:!this.state.togle})
  }
  render() {
    return (
      <div className="wrapper">
      {
        this.state.togle ? ((
          <Sidebar   />
        )) : null
      }
         
          <Content  togle={()=>this.togle()}  screenProps={{socket:socket}} />
      </div>
    );
  }

}

export default App;
