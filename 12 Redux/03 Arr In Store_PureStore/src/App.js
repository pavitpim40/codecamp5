import React from "react";
import "./App.css";
import { connect } from "react-redux"; //2

class App extends React.Component {  //1
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
            {this.props.state.arrObj.map((obj,i)=> <li key={i}>{obj.name}</li>)}
          </ul>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App); //3
