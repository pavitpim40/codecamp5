import React from "react";
import "./App.css";
import { connect } from "react-redux"; //2

class App extends React.Component {  //1
  
  AddHistory = (e) => {
    e.preventDefault();
    this.props.addHistory({type : "ADD_HISTORY", name : this.props.state.textName , email : this.props.state.textEmail })
    
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
            <input type = "text" placeholder="name" onChange={(e)=>this.props.textName({type : "TEXT_NAME", textName : e.target.value})} value={this.props.state.textName}></input><br/>
            <input type = "text" placeholder="email" onChange={(e)=>this.props.textEmail({type : "TEXT_EMAIL",textEmail : e.target.value})} value={this.props.state.textEmail}></input><br/>
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
    textName : (action) => dispatch(action), 
    textEmail : (action) => dispatch(action), 
    addHistory : (action) => dispatch(action),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App); //3
