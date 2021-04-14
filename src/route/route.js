import React from 'react'
import ChildOne from './child1';
import ChildTwo from './child2';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <ChildOne />
            <ChildTwo />
        </>
    )
}








const RouteComponent = () => {
    return (
        <>


            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/childone">ChildOne</Link>
                    </li>
                    <li>
                        <Link to="/childtwo">ChildTwo</Link>
                    </li>
                </ul>


                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/childone">
                        <ChildOne />
                    </Route>
                    <Route path="/childtwo">
                        <ChildTwo />
                    </Route>
                </Switch>


             



            </BrowserRouter>
        </>
    )
}

export default RouteComponent
