import React, { useEffect, useState, useCallback } from 'react'

const ComponentDidMountHook = () => {

    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);



    const logMousePosition = e => {
        console.log("Mouse event ");
        setX(e.clientX)
        setY(e.clientY);
        // console.log(fileRef.files[0]);
    }

    


    // component did mount, an empty array 
    useEffect(()=>{
        console.log("useEffect called ");
        window.addEventListener('mousemove', logMousePosition )

        // component unmount or clean up
        return () => {
            window.removeEventListener('mousemove', logMousePosition )
        }
    },[])












    return (
        <div>
            Mouse x - {x} , Mouse y - {y}
        </div>

        

    )
}

export default ComponentDidMountHook;



// const logFile = useCallback((event)=>{
        
    //     console.log(event.target.files);
    //     console.log(event.target.result);

    //     if (event.target.files && event.target.files[0]) {
    //         let reader = new FileReader();
    //         reader.onload = (e) => {
    //             console.log(e);
    //             setFileUrl(e.target.result)
    //         };
    //         reader.readAsDataURL(event.target.files[0]);
    //       }


    // },[fileRef])


    // <div className="form-group">
    //             <input type="file" name="image" ref={fileRef} onChange={(e)=>logFile(e)}/>
    //             <button className="file-info btn btn-primary" onClick={(e)=>logFile(e)}>File info</button> */}
    //             {/* {/* <a href={fileUrl}  download={fileUrl}>download</a> */}
    //         </div>