import React, { Component } from 'react';
import './transitiongroup.scss';
import { Transition } from 'react-transition-group';

class TransitionGroup extends Component {

    state = {
      isShown: false
    }

    showHideHandler = () => {
      this.setState(prevState => ({
        isShown: !prevState.isShown
      }));
    }

    render() {
      const { isShown } = this.state;
        
      return (
        <div className="container">
          <button onClick={this.showHideHandler}> Show or hide </button>
          {
                
            <Transition 
              in={isShown} 
              timeout={1000} 
              mountOnEnter // insert element to dom for animation
              unmountOnExit // remove elemtn from dom after animation completes
              onEnter = {()=> console.log('onEnter')}
              onEntering = {()=> console.log('onEntering')}
              onEntered = {()=> console.log('onEntered')}
              onExit = {()=> console.log('onExit')}
              onExiting = {()=> console.log('onExiting')}
              onExited = {()=> console.log('onExited')}
            >
              {
                state => {
                  // console.log(state);
                  return (
                    <div className={`box ${state}`} style={{ 
                      opacity : state === 'entered' ?  1 : 0,
                      transition : 'all 1s ease'
                    }}/>

                  );
                }
              }
            </Transition>
          }
        </div>
      );
    }
}

export default TransitionGroup;
