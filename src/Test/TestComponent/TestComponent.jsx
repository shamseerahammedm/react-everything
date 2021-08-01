import React from 'react';
import _ from 'lodash';
const TestComponent = () => {
  return (
    <div>
      asdasd
    </div>
  );
};

export default TestComponent;

const object1 = {
  firstname: 'firstname',
  lastname: 'lastname'
};
const object2 = {
  phone: '123412341234',
  address: 'some address'
};
const object3 = {
  firstname: 'gggggg',
  lastname: 'hhhh'
};
const combined = {
  ...object1,
  ...object2,
  ...object3
};
