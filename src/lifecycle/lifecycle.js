import React from 'react'


import GetDerivedStateFromProps__Component from './getDerivedStateFromProps__Component';







class DummyComponent extends React.Component 
{

    constructor()
    {
        super()
        console.log("child constructor");
    }

    UNSAFE_componentWillMount()
    {
        console.log("child componentWillMount");
        
    }

    componentDidMount()
    {
        console.log("child componentDidMount");
    }

    
    componentWillReceiveProps()
    {
        console.log("child componentWillReceiveProps");
    }

    render()
    {
        console.log("child render");
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}












 class LifeCycleMethods extends React.Component 
{


    state = {
        innerWidth : null,
        name : "shamseer",
        getDerivedStateFromProps__data : 0,
        getSnapshotBeforeUpdate__data : 0
    }

    constructor()
    {
        super()
        // console.log("constructor");
    }

    // UNSAFE_componentWillMount()
    // {
    //     console.log("componentWillMount");
    //     this.setState({
    //         innerWidth : window.innerWidth
    //     })
    // }

    // componentDidMount()
    // {
    //     console.log("componentDidMount");
    // }



    // componentWillReceiveProps()
    // {
    //     console.log("componentWillReceiveProps");
    // }



    componentDidUpdate(prevProps) {
        if (this.props.userID !== prevProps.userID) {
          this.fetchData(this.props.userID);
        }
    }




    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log("componentDidUpdate - snapshot",snapshot);
        console.log('componentDidUpdate - prevProps',prevProps);
        console.log('componentDidUpdate - prevState',prevState);
    }


    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        // chat thread example can be solved with this

        console.log("getSnapshotBeforeUpdate - prevProps",prevProps);
        console.log("getSnapshotBeforeUpdate - prevState",prevState);
        return 1;
    }

    // ------------------------------

    changeState = () => {
        this.setState({
            getSnapshotBeforeUpdate__data : this.state.getSnapshotBeforeUpdate__data+1
        })
    }

    render()
    {
        // console.log("render");
        return (
            <>
                <div>
                    lifecyclemethods
                    <p> {this.state.innerWidth}</p>
                    {/* <DummyComponent name={this.state.name}/> */}
                    {this.state.getSnapshotBeforeUpdate__data}

                    <button onClick={this.changeState}> Change state : </button>
                </div>






                {/* getDerivedStateFromProps */}
                {/* <div>
                    <strong>getDerivedStateFromProps : {this.state.getDerivedStateFromProps__data}</strong>
                    <GetDerivedStateFromProps__Component data={this.state.getDerivedStateFromProps__data}/>
                    <button 
                        onClick={()=>{this.setState({
                            getDerivedStateFromProps__data : this.state.getDerivedStateFromProps__data + 1 })
                        }}
                    > 
                        make ++  
                    </button>
                </div> */}

                {/* getSnapshotBeforeUpdate */}
                <div>


                </div>



            </>
            
        )
    }
}


export default LifeCycleMethods;