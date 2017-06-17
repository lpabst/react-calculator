import React, { Component } from 'react';
import './Home.css';

import Homework from './components/Homework.js';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      buttons: ['CE', '(', ')', '*', '7', '8', '9', '/', '4', '5', '6', '+', '1', '2', '3', '-', '0', '.', '?', '='],
      total: '0'
    }

    this.handleClick = this.handleClick.bind(this);
    this.newProblem = this.newProblem.bind(this);
  }

  handleClick(button, i){
    if(this.state.total.length < 14){
      if (i === 0){
        var newTotal = '0'
      }else if (button == '='){
        var newTotal = eval(this.state.total);
        if (newTotal % 1 != 0){
          newTotal = newTotal.toFixed(2);
        }
      }else if (this.state.total == '0'){
        var newTotal = button
      }else{
        var newTotal = this.state.total + button
      }
      this.setState({
        total: newTotal
      })
    }
  }

  newProblem(newTotal){
    this.setState({
      total: newTotal
    })
  }

  render() {
    return (
      <div className="Home">

        <div className="App-header">
          <h2>Calculator</h2>
        </div>

        <Homework calculate={ this.newProblem } />

        <div className='calculator'>
          <div className='display'>{ this.state.total }</div>
          <div className='buttons_container'>
            {
              this.state.buttons.map( (button, i) => {
                return <div key={i}
                className='button'
                onClick={ () => {this.handleClick(button, i)} }
                >{button}</div>
              })
            }
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
