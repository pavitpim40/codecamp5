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
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: (action) => dispatch(action),
    reset: (action) => dispatch(action),
    minus: () => dispatch({ type: "DECREASE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App); //3
