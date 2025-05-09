import React from 'react';
import './FeatureTwo.css';
import bill from '../../assets/bill.png';
import google from '../../assets/google.svg';
import apple from '../../assets/apple.svg';
import TextSide from '../ReusableComponents/TextSide';
const FeatureTwo = () => {
  const headerOne = 'Easily control your ';
  const headerTwo = 'billing & invoicing.';
  const paragraphOne = 'Elit enim sed massa etiam. Mauris eu adipiscing';
  const paragraphTwo = 'ultrices ametodio aenean neque. Fusce ipsum orci';
  const paragraphThree = 'rhoncus aliporttitor integer platea placerat.';
  return (
    <div className='featuretwo-container'>
      <div>
        <img src={bill} alt='Bill' />
      </div>
      <div className='text-side'>
        <TextSide
          headerOne={headerOne}
          headerTwo={headerTwo}
          paragraphOne={paragraphOne}
          paragraphTwo={paragraphTwo}
          paragraphThree={paragraphThree}
        />
        <div className='social-icons'>
          <img src={apple} alt='apple' />
          <img src={google} alt='google' />
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
