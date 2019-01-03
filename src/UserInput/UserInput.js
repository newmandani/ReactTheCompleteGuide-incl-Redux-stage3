import React from 'react';

import './UserInput.css';

const userInput = (props) => {
  const styles = {
    margin: '15px 0',
    padding: '5px',
    fontSize: '1.3em',
    fontWeight: '700',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: 'inset 0 0 2px 2px rgba(0,0,50,.1)'
  }

  return (
    <div className="UserInput">
      <input style={styles} type="text" onChange={props.change} value={props.input} />
    </div>
  );
}

export default userInput;