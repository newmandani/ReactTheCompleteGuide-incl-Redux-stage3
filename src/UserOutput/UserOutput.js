import React from 'react';

import './UserOutput.css';

const userOutput = ({val}) => {

  return (
    <div className="UserOutput">
      <p>Hello, men!</p>
      <p>Are you {val}?</p>
    </div>
  );
}

export default userOutput;