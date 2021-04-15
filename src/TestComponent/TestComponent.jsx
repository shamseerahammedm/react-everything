import React, { Component } from 'react';
import { test } from 'utils/utils';

const TestComponent  = () => {
  return (
    <div>
      Functional 
      <TestComponentClass/>
    </div>
  );
};

export default TestComponent;

class TestComponentClass extends Component {
  constructor(props) {
    super(props);
    this.normalFunction = this.normalFunction.bind(this);
  }
  state = {
    test : 123,
    something : 1
  }
  arrowFunction = (arg) => {
    console.log('arrowFunction');
    console.log(arg);
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
        <button onClick={() => this.arrowFunction('Some arrow argument')}>Arrow btn</button>
        <button onClick={() => this.normalFunction('Some normal argument')}>Normal btn</button>
        {/* With out biding this button wont work */}
        <button onClick={this.normalFunction}>Normal binded</button> 
        {this.state.something}
        <br/>
       Test -  {this.state.test}
      </div>
    );
  }
}

export { TestComponentClass };