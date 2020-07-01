import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function Clock(props) {
//   return(
//     <div>
//         <h1>Hello, Clock</h1>
//   <p>this is {props.date.toLocaleTimeString()}</p>
//     </div>
//   )
// }
//function tick(){
//}
//setInterval(tick,1000);

ReactDOM.render(<App  />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
