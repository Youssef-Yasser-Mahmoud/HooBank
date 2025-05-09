import React from 'react';

const TextSide = ({ headerOne, headerTwo, paragraphOne, paragraphTwo, paragraphThree }) => {
  return (
    <div className='text-container'>
      <header>
        <h3>{headerOne}</h3>
        <h3>{headerTwo}</h3>
      </header>
      <div>
        <p>{paragraphOne}</p>
        <p>{paragraphTwo}</p>
        <p>{paragraphThree}</p>
      </div>
    </div>
  );
};

export default TextSide;
