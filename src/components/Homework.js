
import React, { Component } from 'react';
import './Homework.css';

class Homework extends Component{





    render(){
        return (
            <div className='homework_container'>

                <div className='question'
                onClick={ ()=> {this.props.calculate('8*9-4') } } >
                    8*9-4
                </div>
                
                <div className='question'
                onClick={ ()=> {this.props.calculate('14+6-22') } }>
                    14+6-22
                </div>  

                <div className='question'
                onClick={ ()=> {this.props.calculate('547*69-66598') } }>
                    547*69-66598
                </div>

                <div className='question'
                onClick={ ()=> {this.props.calculate('1+1+1.4') } }>
                    1+1+1.4
                </div>

                <div className='question'
                onClick={ ()=> {this.props.calculate('98/14+665') } }>
                    98/14+665
                </div>       
            
            </div>
        )
    }


}

export default Homework;
