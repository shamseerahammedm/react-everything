import React, { Component } from 'react';

export class Promise extends Component {

  componentDidMount()
  {

    let p = new Promise((resolve,reject) => {
      let a = 1 + 1;
      setTimeout(()=>{
        resolve('success');
      },2000);
    });

    p.then( item => {
      console.log(' item', item);
    }).catch( err => {
      console.log('err', err);
    });
        
  }

  render() {
    return (
      <div>
                Promise
      </div>
    );
  }
}

export default Promise;
