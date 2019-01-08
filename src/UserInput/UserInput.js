import React from 'react';

import './UserInput.css';

const userInput = ({ change, input }) => (
  <div className="UserInput">
    <input type="text" onChange={change} value={input} />
  </div>
);

export default userInput;