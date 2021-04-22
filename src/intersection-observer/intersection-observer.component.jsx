import React, { Component } from 'react';
import './intersection-observer.styles.scss';
import { createRef } from 'react';

const OPTIONS = {
  // root: document.querySelector('body'),
  // rootMargin: '0px',
  threshold: 1.0
};

class IntersectionObserverTesting extends Component {

  intersectionObserverFunction = null;
  constructor(props) {
    super(props);
    this.itemsContainer = createRef();
    this.intersectionObserverFunction = new IntersectionObserver(entries => {
      const ratio = entries[0].intersectionRatio;
      console.log(ratio);
      if (ratio > 0)
      {
        this.setState({
          count: this.state.count + 5
        });
      }
    }, OPTIONS);
  }

  state = {
    count: 1
  }

  lazyLoadThem = () => {
    let setOfItems = [];
    const { count } = this.state;
    for (let i = 0; i < count; i++)
    {
      setOfItems.push(
        <div className="box" key={i}> Newly added item and my number is {i}</div>
      );
    }
    return setOfItems;
  }

  componentDidMount() {

    this.intersectionObserverFunction.observe(this.itemsContainer.current);

    // let options = {
    //     // root: document.querySelector('body'),
    //     // rootMargin: '0px',
    //     threshold: 1.0
    // } 
    // let observer = new IntersectionObserver(entries => {
    //     const ratio = entries[0].intersectionRatio;
    //     console.log(ratio);
    //     if(ratio > 0)
    //     {
    //         this.setState({
    //             count : this.state.count + 5
    //         })
    //     }
    // }, options);
    // observer.observe(this.itemsContainer.current);
  }

  componentWillUnmount() {
    this.intersectionObserverFunction.disconnect();
  }

  render() {

    return (
      <div className="outer">
        {this.lazyLoadThem()}
        {/* observer is watching this last element (itemsContainer), checking if its in the view or not  */}
        <div ref={this.itemsContainer}></div>
      </div>
    );
  }
}

export default IntersectionObserverTesting;
