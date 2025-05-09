import React from 'react';
import './FeatureOne.css';
import TextSide from '../ReusableComponents/TextSide';
import Send from '../../assets/Send.svg';
import Shield from '../../assets/Shield.svg';
import Star from '../../assets/Star.svg';
import SectionSide from '../ReusableComponents/SectionSide';
// css styles for 'Get Started Button'
export const buttonStyle = {
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '27px',
  letterSpacing: '0em',
  textAlign: 'left',
  backgroundColor: 'aqua',
  borderRadius: ' 0.6rem',
  border: 'none',
  padding: '1.1rem 1.6rem',
  cursor: 'pointer',
};

const FeatureOne = () => {
  // texts in Textside (headers and paragraphs)
  const headerOne = 'You do the business,';
  const headerTwo = 'we’ll handle the money.';
  const paragraphOne = 'With the right credit card, you can improve your financial life by';
  const paragraphTwo = 'building credit, earning rewards and saving money. But with';
  const paragraphThree = 'hundreds of credit cards on the market.';
  // rewards , 100%secured and balance transfer section
  const section = [
    {
      title: 'Rewards',
      content: 'The best credit cards offer some tantalizing combinations of promotions and prizes',
      image: Star,
    },
    {
      title: '100% Secured',
      content: 'We take proactive steps make sure your information and transactions are secure.',
      image: Shield,
    },
    {
      title: 'Balance Transfer',
      content: 'A balance transfer credit card can save you a lot of money in interest charges.',
      image: Send,
    },
  ];
  return (
    <div className='feature-container' id='Features'>
      <div className='text-side'>
        <TextSide
          headerOne={headerOne}
          headerTwo={headerTwo}
          paragraphOne={paragraphOne}
          paragraphTwo={paragraphTwo}
          paragraphThree={paragraphThree}
        />
        <button style={buttonStyle}>Get Started</button>
      </div>
      <div className='tips-side'>
        <SectionSide section={section} />
      </div>
    </div>
  );
};

export default FeatureOne;
