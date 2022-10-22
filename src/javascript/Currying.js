import React from 'react';

const Currying = () => {
  return (
    <div>Currying</div>
  );
};

export default Currying;

const sum = (a) => {
  return (b) => {
    return (c) => {
      return a+b+c;
    };
  };
};

console.log(sum(1)(2)(3));