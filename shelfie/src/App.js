import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';



export default class App extends Component {
  constructor(){
    super();
      this.state = {
        inventory: []
      }
  }

  render(){
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
  
      </div>
    );
  }

}


