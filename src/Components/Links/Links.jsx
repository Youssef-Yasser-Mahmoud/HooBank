import React from 'react';
import './Links.css';
import { airbnb, binance, coinbase, dropbox } from '../../assets';

const Links = () => {
  const links = [airbnb, binance, coinbase, dropbox];
  return (
    <div className='links'>
      <image>
        {links.map((link, index) => (
          <img key={index} src={link} alt='company-logo' />
        ))}
      </image>
    </div>
  );
};

export default Links;
