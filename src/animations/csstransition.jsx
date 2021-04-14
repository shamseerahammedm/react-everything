import React, { Component } from 'react'
import './csstranstions.scss';
import CSSTransition from 'react-transition-group/CSSTransition';


class Csstransition extends Component {

    state = {
        isShown: false
    }


    showHideHandler = () => {
        this.setState(prevState => ({
            isShown: !prevState.isShown
        }))
    }


    render() {
        const { isShown } = this.state;
        
        return (
            <div className="container">
                <button onClick={this.showHideHandler}> Show or hide </button>
                {
                    <CSSTransition 
                        in={isShown} 
                        timeout={1000} 
                        mountOnEnter // insert element to dom for animation
                        unmountOnExit // remove elemtn from dom after animation completes
                        onEnter = {()=> console.log("onEnter")}
                        onEntering = {()=> console.log("onEntering")}
                        onEntered = {()=> console.log("onEntered")}
                        onExit = {()=> console.log("onExit")}
                        onExiting = {()=> console.log("onExiting")}
                        onExited = {()=> console.log("onExited")}
                        classNames="box" // use this for default class naming else use object as given below for custom classnames
                        // classNames={{
                        //     enter : 'box-in',
                        //     enterActive : 'box-start-animation',
                        //     exit : 'box-out',
                        //     exitActive : 'box-out-start-animation'
                        //     // appear : for animating items when page is loaded for the first time, items that are there permanently example button in this component is always prasent in the dom
                        //     // appearActive : same  - for animating items when page is loaded for the first time, items that are there permanently example button in this component is always prasent in the dom
                        // }}

                    >
                         <div className="xor" />
                    </CSSTransition>
                }
            </div>
        )
    }
}

export default Csstransition
