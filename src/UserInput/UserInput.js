import React from 'react';

import './UserInput.css';

const userInput = (props) => {
  return (
    <div className="UserInput">
      <input type="text" onChange={props.change} value={props.input} />
    </div>
  );
}

export default userInput;