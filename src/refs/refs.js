import React, { useCallback } from 'react'



// refs in class based component


// export class Refs extends React.Component 
// {

//     submitHandler = () => {
//         console.log(this.firstName.value); // gives the value types inside that input field
//     }
//     onkeyUpHandler = (value) => {
//         console.log(value);
//     }
//     render()
//     {
//         return (
//             <>
//                     <div>
//                         <span>First Name :</span>
//                         <input ref={(input)=>{ this.firstName = input }} type="text"/>
//                     </div>
//                     <div>
//                         <span>Last Name :</span>
//                         {/* 
//                             bind is used to pass value as argument to function
//                             if this format was used  -> onKeyUp={this.onkeyUpHandler("myvalue") 
//                             then it will execute that function imeediatly on load so it cant be used thats why bind was 
//                             used.
//                         */}
//                         <input type="text" onKeyUp={this.onkeyUpHandler.bind(this,"myvalue")}/>
//                     </div>
//                     <div>
//                         <span>Age :</span>
//                         <input type="text"/>
//                     </div>
//                     <div>
//                         <input type="submit" onClick={this.submitHandler}/>
//                     </div>
//             </>
//         )
//     }
// }

// export default Refs



// refs in functional based component


const MyInput = ({lastName}) => {
    return (
        <input ref={lastName} type="text" name="lastname"/>
    )
}


const Refs = () => {
    let inputRef = null;
    let place = null;
    let lastName = null;


    const onClickHandler = useCallback(() => {
        // inputRef.focus()
        console.log(inputRef.value);
        console.log(place.value);
        console.log(lastName.value);
    }, [inputRef,place,lastName]);



    // using this method redefined function everytime component is rendered so this has to be avoided
    // const onClickHandler = () => {
    //     console.log(inputRef.value);
    // }

    return (
        <>
            <div>
                <div>
                    <span>First Name :</span>
                    <input ref={(input)=>{ inputRef = input }} type="text" name="firstname"/>
                </div>
                <div>
                    <span>Place :</span>
                    <input ref={(input)=>{ place = input }} type="text" name="place"/>
                </div>
                <div>
                    <span>Last Name :</span>
                    {/* refs with custom component example */}
                    <MyInput lastName={(input)=>{ lastName = input }} />
                </div>
                <div>
                    <input type="submit" onClick={onClickHandler}/>
                </div>
            </div>
        </>
    )
}

export default Refs
