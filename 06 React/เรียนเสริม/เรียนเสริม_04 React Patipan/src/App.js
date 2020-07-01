import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Hello from './Hello';
import Clock from './Clock'
import Click from './Click'
import EventBind from './EventBind'
import Greeting from './Greeting'
import LoginCrontrol from './LogginControl'
import Mailbox from './Mailbox'
import YourAge from './Yourage'
import NameList from './NameList'

function App() {
  
  const messages = ['Message1', 'Message2', 'Message3']
  return (
    <div>
     {/* <Greeting isLoggedIn = {true} /> */}
     {/* <Mailbox unreadMessages={messages}/>
     <YourAge age = {18}/> */}
     <NameList/>
    </div>
  );
}



 
export default App;

