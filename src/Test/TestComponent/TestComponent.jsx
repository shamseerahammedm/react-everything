import React, { useState } from 'react';
import axios from 'axios';
import svg from '../Group 1.svg';
import './TestComponent.scss'; 

const TestComponent = () => {
  const [ toggle, setToggle ] = useState(false);
  const submitHandler = event => {
    event.preventDefault();
    const yourState = { somevalue : 11111, sotherValue : 22222 };
    axios('http://localhost:8080/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: yourState
    }).then(res => {
      console.log(res);
    })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="wrapper">
      {/* <button onClick={() => setToggle(prevState => !prevState)}> Click - {<pre>{JSON.stringify(toggle, null, 2)}</pre>} </button>
      <TestComponent1 toggle={toggle}/>
      <button onClick={(e)=>submitHandler(e)}>submitHandler</button> */}

      <svg className="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ><defs><filter id="a" filterUnits="userSpaceOnUse"><feOffset result="offset" dx="-14" in="SourceAlpha"/><feGaussianBlur result="blur" stdDeviation="1.414"/><feFlood result="flood" flood-opacity=".47"/><feComposite result="composite" operator="in" in2="blur"/><feBlend result="blend" in="SourceGraphic"/></filter><filter id="b" x="1202.34" y="908" width="740.22" height="395.41" filterUnits="userSpaceOnUse"><feImage preserveAspectRatio="none" x="1202.34" y="908" width="740.22" height="395.41" result="image" xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzQwLjIyIiBoZWlnaHQ9IjM5NS40MSIgdmlld0JveD0iMCAwIDc0MC4yMiAzOTUuNDEiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIG9wYWNpdHk6IDAuOTQ7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIzNzAuMTEiIHkxPSIzOTUuNDEiIHgyPSIzNzAuMTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjAyNSIgc3RvcC1jb2xvcj0iI2Q3ZDdkNyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuOTc1IiBzdG9wLWNvbG9yPSIjZTZlNmU2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSI3NDAuMjIiIGhlaWdodD0iMzk1LjQxIi8+Cjwvc3ZnPgo="/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter><filter id="c" x="1202.34" y="1177.47" width="740.22" height="395.53" filterUnits="userSpaceOnUse"><feImage preserveAspectRatio="none" x="1202.34" y="1177.47" width="740.22" height="395.53" result="image" xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzQwLjIyIiBoZWlnaHQ9IjM5NS41MyIgdmlld0JveD0iMCAwIDc0MC4yMiAzOTUuNTMiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjbGluZWFyLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMzcwLjExIiB5MT0iMzk1LjUzIiB4Mj0iMzcwLjExIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzg0ODQ4NCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9Ijc0MC4yMiIgaGVpZ2h0PSIzOTUuNTMiLz4KPC9zdmc+Cg=="/><feComposite result="composite" operator="in" in2="SourceGraphic"/><feBlend result="blend" in2="SourceGraphic"/></filter></defs><g data-name="a in name copy" filter="url(#a)" fill-rule="evenodd"><path d="m1942.55 1240.04-141.48 63.37-598.74-261.34.01-134.065Z" transform="translate(-944 -908)" filter="url(#b)"/><path data-name="Rectangle 1 copy" d="m1942.55 1240.86-141.48-63.4-598.74 261.43.01 134.1Z" transform="translate(-944 -908)" filter="url(#c)"/></g><g font-size="106.006" fill="#fff" text-anchor="middle" font-family="Montserrat"><text transform="matrix(2.463 0 0 2.46 810.277 412.786)" font-weight="700">SilverArrow.</text><text data-name="Our world is our bond" transform="matrix(.693 0 0 .693 1117.389 502.277)" font-weight="500">Our world is our bond</text></g></svg>

    </div>
  );
};

export default TestComponent;

const TestComponent1 = ({
  toggle
}) => {
  const [ number, setNumber ] = useState(1);
  return (
    <div>
      {number}
      {
        toggle
        &&
      <button onClick={() => setNumber(prevState => prevState + 1)}> Click </button>
      }
    </div>
  );
};
