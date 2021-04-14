import React from 'react';
import JavascriptFile from './javascript';
import './async'; 

class Javascript extends React.Component {


    constructor()
    {
        super()
        console.log(this);
    }





   state = {
       test : 1
   }


    testFunction  = () => {
        console.log(this);
    }

  

    normalFunction ()
    {
        console.log("im normal function");
        this.setState({
            test : 1
        });

    }





    render()
    {

        // this.normalFunction();

        var obj = {
            foo : () => {
                console.log(this === window);
            }
        }
        obj.foo();


        var boundfoo = obj.foo;

        console.log(boundfoo);









        return (
            <>
                <button className="btn btn-primary" onClick={this.normalFunction}>Javascript</button>
                <p>
                    {
                        this.state.test
                    }
                </p>
            </>
        )
    }
}

export default Javascript;
