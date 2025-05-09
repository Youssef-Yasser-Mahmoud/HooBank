import React from 'react';
import './Solution.css';
import TextSide from '../ReusableComponents/TextSide';
import { buttonStyle } from '../Features/FeatureOne';
import card from '../../assets/card.png';

const Solution = () => {
  const headerOne = 'Find a better card deal';
  const headerTwo = 'in few easy steps.';
  const paragraphOne = 'Arcu tortor, purus in mattis at sed integer faucibus.';
  const paragraphTwo = 'Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.';
  return (
    <div className='solution' id='Solution'>
      <div>
        <TextSide headerOne={headerOne} headerTwo={headerTwo} paragraphOne={paragraphOne} paragraphTwo={paragraphTwo} />
        <button style={buttonStyle}>Get Started</button>
      </div>
      <image>
        <img src={card} alt='card' />
      </image>
    </div>
  );
};

export default Solution;
