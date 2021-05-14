import React, { useContext } from 'react';
import { UserProvider, UserConsumer } from './userContext';
import UserContext from './userContext';
import { Link } from 'react-router-dom';

const Context = () => {

  const userName = 'shamseer';

  return (
    <>
      <UserProvider value={userName}>
        <ComponentA />
      </UserProvider>
      <hr />
      <Link to="/to-do-context">Context App</Link>
    </>
  );
};

export default Context;

const ComponentA = () => {

  if(true)
  {
    const data = 1;
  }
  return (
    <ComponentB />
  );
};

const ComponentB = () => {
  return (
    <>
      <ComponentC />
      <ComponentCUseContext />
    </>
  );
};

const ComponentC = () => {
  return (
    <UserConsumer>
      {
        (someData) => {
          return (
            <>
              <p>Hello {someData} - comes using normal way</p>

            </>

          );
        }
      }
    </UserConsumer>
  );
};

const ComponentCUseContext = () => {
  const userName = useContext(UserContext);  // if using useContext hook this no need to wrap everything with UserConsumer.
  return (
    <>
      {userName} - comes using usecontext
    </>
  );
};
