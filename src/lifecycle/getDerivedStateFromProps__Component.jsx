import React, { Component } from 'react'

export class GetDerivedStateFromProps__Component extends Component {


    state = {
        currentValue : 0
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("props",props);
        console.log("state",state);
        return {
            currentValue : props.data * 10
        }
    }



    render() {
        console.log("render of GetDerivedStateFromProps__Component",);
        return (
            <div>
                Inside GetDerivedStateFromProps__Component - currentValue : {this.state.currentValue} 
            </div>
        )
    }
}

export default GetDerivedStateFromProps__Component
