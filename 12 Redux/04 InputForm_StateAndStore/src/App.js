import React from "react";
import "./App.css";
import { connect } from "react-redux"; //2

class App extends React.Component {  //1
  state = {
    name : "",
    email : "",
  }

  AddHistory = (e) => {
    e.preventDefault();
    this.props.addHistory({type : "ADD_HISTORY", name : this.state.name , email : this.state.email })
    this.setState({
      name : "",
      email : ""
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.data}
          <div>
            <button onClick={()=>this.props.plus({ type: "INCREASE" })}>+</button>
            <button onClick={()=>this.props.reset({ type: "RESET" })}>reset</button>
            <button onClick={this.props.minus}>-</button>
            <button onClick={()=>this.props.addNum({ type: "ADD_NUM" , num: this.props.data })}>Add Number</button>
            <button onClick={()=>this.props.addPerson({ type: "ADD_PERSON" })}>Add Person</button>
          </div>
          <ul>
            {this.props.state.arr.map((num,i)=> <li key={i}>{num}</li> )}
            {this.props.state.arrObj.map((obj,i)=> (obj.name ? obj.email?  <li key={i}>Name : {obj.name} , Email : {obj.email}</li> : <li key={i}>Name : {obj.name} , Email : No email</li>: null))}
          </ul>
          <form onSubmit={this.AddHistory}>
            <input type = "text" placeholder="name" onChange={(e)=>this.setState({name : e.target.value})} value={this.state.name}></input><br/>
            <input type = "text" placeholder="email" onChange={(e)=>this.setState({email : e.target.value})} value={this.state.email}></input><br/>
            <button type="submit">Submit</button>
          </form>


        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data : state.count,
    state : state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: (action) => dispatch(action),
    reset: (action) => dispatch(action),
    minus: () => dispatch({ type: "DECREASE" }),
    addNum : (action) => dispatch(action),
    addPerson : (action) => dispatch(action),
    addHistory : (action) => dispatch(action)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App); //3
