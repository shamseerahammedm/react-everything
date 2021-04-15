import React, { Component } from 'react';
import { test } from 'utils/utils';

const BindingComponent  = () => {
  return (
    <div>
      Functional 
      <BindingComponentClass/>
    </div>
  );
};

export default BindingComponent;

class BindingComponentClass extends Component {
  constructor(props) {
    super(props);
    // Binding 'Normal with out binding' button 
    // this.normalFunction = this.normalFunction.bind(this);
  }
  state = {
    test : 123,
    something : 1
  }
  arrowFunction = (arg) => {
    console.log('arrowFunction');
    this.setState({
      test : 123,
      something : this.state.something + 1
    });
  }

  normalFunction(arg, value){
    console.log('normalFunction');
    this.setState({
      something : this.state.something + 1
    });
  }

  render(){

    return (
      <div> 
        {/* Both works  */}
        <button onClick={() => this.arrowFunction('Some arrow argument')}>Arrow btn</button>
        <button onClick={() => this.normalFunction('Some normal argument')}>Normal btn</button>

        {/* Arrow functions dont need binding */}
        <button onClick={this.arrowFunction}>Arrow btn straight</button>

        {/* With out biding this button wont work, 'this' will be undefined*/}
        <button onClick={this.normalFunction}>Normal with out binding</button> 

        {/*  Binding done inside render */}
        <button onClick={this.normalFunction.bind(this)}>Normal binded inside render</button> 

        <br/>
        Something -  {this.state.something}
        <br/>
        Test -  {this.state.test}
      </div>
    );
  }
}

export { BindingComponentClass };