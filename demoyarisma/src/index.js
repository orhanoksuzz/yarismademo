import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {   createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {userReducer,questionsReducer,socketEmitReducer} from './redux/reducer/index';
import { 
    SplashPageScreen,
    LoginPageScreen,
    RegisterPageScreen,
    MainPageScreen
} from './screens/index';
import SocketIOClient from 'socket.io-client';
const socketURL = 'http://isitmeyarisma.herokuapp.com';
const socket = SocketIOClient(socketURL); //Local ip'niz yada http://locahost:3000 olmalı

const RootReducers = combineReducers({
    userReducers:userReducer,
    questionsReducer:questionsReducer,
    socketEmitReducer:socketEmitReducer
})
const store = createStore(RootReducers);

const RootNavigator = createStackNavigator({
    Splash : {screen:SplashPageScreen},
    Login : {screen:LoginPageScreen},
    Register : {screen:RegisterPageScreen},
    Main : {screen:MainPageScreen}
})
const RootNavigation = createAppContainer(RootNavigator);

const RootComponent  = () => {
    return(
        <Provider  store={store} >
            <RootNavigation screenProps={{socket:socket}} />
        </Provider>
    )
}

export default RootComponent;






