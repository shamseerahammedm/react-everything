import React, { Component } from 'react'

export class PureComponent extends Component {


    state = {
        val : 1
    }


    // if PureComponent is not used use shouldComponentUpdate to do this
    // shouldComponentUpdate(nextProp, nextState){
    //     return this.state.val === nextState.val ? false : true ;
    // }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                val : 1
            })
        },2000)
    }


    getNewDate = () => {
        // your code 
        return NewDate;
    }


    render() {

        this.getNewDate();

        console.log("Rerendering");
        return (
            <div>
                {this.state.val}
            </div>
        )
    }
}

export default PureComponent
