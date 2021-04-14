import React from 'react'
import { Route, useParams } from 'react-router-dom';
import ChildTwoParams from './child2params';

const ChildTwo = () => {
    return (
        <div>
            <Route exact path="/childtwo">
                ChildTwo
            </Route>
            <Route path="/childtwo/:childId">
                <ChildTwoParams/>
            </Route>
        </div>
    )
}

export default ChildTwo
