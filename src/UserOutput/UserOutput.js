import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Hello, men!</p>
      <p>Are you {props.val}?</p>
    </div>
  );
}

export default userOutput;