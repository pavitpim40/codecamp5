import React from 'react'

class Hello extends React.Component{

    constructor(props){
        super(props)
        
        this.state = {
            counter : 0
        }
    }

    handleClick(){
        this.setState(function(prevState){
            return{
               counter: this.state.counter + 1  
            }
        })
    }

    render(){
      return(
        <React.Fragment>
          <h1>Hello React Class component</h1>
          <p>{this.props.hello}</p>
          <button onClick={this.handleClick.bind(this)}>Click me to increment </button>
          <p>counter : {this.state.counter}</p>
        </React.Fragment>
      )
    }
  }

export default Hello