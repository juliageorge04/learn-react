import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import Counternew from './Counternew';
import Demonew from './Demonew';
import Todo from './Todo';
import Events from './Events';
import Toggle from './Toggle';
import List from './List';
import Hooks from './Hooks';
import Ajax from './Ajax';
import Form from './Form';
//import reportWebVitals from './reportWebVitals';
/*var x=setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Counter />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}, 1000);

ReactDOM.render(<React.StrictMode>
  <Todo />
</React.StrictMode>,
document.getElementById('root'));*/

ReactDOM.render(<App />,
document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
