import React, { useEffect, useState } from 'react'
import ComponentDidMountHook from './componentDidMountHook.component';
import UseMemo from './use-memo';
import HooksApiTest from './HooksAPITest.component';


const Hooks = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('')


    // function inside useeffect only runs when count changes
    useEffect(()=>{
        document.title = `You clicked ${count} times`
        console.log('useEffect - Updating document title');
    },[count]);






    function test()
    {
        console.log("wow");
    }










    return (
        <div className="container">
            {/* <div className="row">
                <div className="col-md-6">
                    <input className="form-control" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <button className="btn btn-primary" onClick={()=>{setCount( count+1 )}}> click {count} times </button>
                </div>
            </div> */}
            {/* <ComponentDidMountHook/> */}
            <UseMemo/>
        </div>
    )
}

export default Hooks;
