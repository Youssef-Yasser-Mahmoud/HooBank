import React from 'react';
import './About.css';
import TextSide from '../ReusableComponents/TextSide';
import { quotes, people01, people02, people03 } from '../../assets';

const About = () => {
  // Texts of top-side
  const headerOne = 'What people are';
  const headerTwo = 'saying about us';
  const paragraphOne = 'Everything you need to accept card payments';
  const paragraphTwo = 'and grow your business anywhere on the planet.';

  //quotes of bottom-side
  const data = [
    {
      quoteImage: quotes,
      quote: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      name: 'Herman Jensen',
      position: 'Founder & Leader',
      photoPerson: people01,
    },
    {
      quoteImage: quotes,
      quote: "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: 'Steve Mark',
      position: 'Founder & Leader',
      photoPerson: people02,
    },
    {
      quoteImage: quotes,
      quote: 'It is usually people in the money business, finance, and international trade that are really rich.',
      name: 'Kenn Gallagher',
      position: 'Founder & Leader',
      photoPerson: people03,
    },
  ];

  return (
    <div className='about' id='About Us'>
      <TextSide headerOne={headerOne} headerTwo={headerTwo} paragraphOne={paragraphOne} paragraphTwo={paragraphTwo} />
      <div className='quote-container'>
        {data.map((data, index) => (
          <div className='quote' key={index}>
            <img src={data.quoteImage} alt='Quote Image' />
            <p>{data.quote}</p>
            <div className='user'>
              <img src={data.photoPerson} alt="photo'sperson" />
              <div className='info'>
                <div className='user-name'>{data.name}</div>
                <p className='user-position'>{data.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
