import React from 'react';
import './Footer.css';
import TextSide from '../ReusableComponents/TextSide';
import { buttonStyle } from '../Features/FeatureOne';
import FooterLinks from '../ReusableComponents/FooterLinks';
import { logo, facebook, instagram, twitter, linkedin } from '../../assets';

const Footer = () => {
  const usefullLinks = ['Content', 'How it Works', 'Create', 'Explore', 'Terms & Services'];
  const communityLinks = ['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletters'];
  const partnerLinks = ['Our Partner', 'Become a Partner'];
  const socialMediaIcons = [instagram, facebook, twitter, linkedin];
  return (
    <div className='footer'>
      <div className='top-side'>
        <TextSide
          headerOne='Let’s try our service now!'
          paragraphOne='Everything you need to accept card payments'
          paragraphTwo='and grow your business anywhere on the planet.'
        />
        <button style={buttonStyle}>Get Started</button>
      </div>

      <div className='bottom-side'>
        <div className='high'>
          <div>
            <img src={logo} alt='logo' />
            <p>
              A new way to make the payments <br />
              easy, reliable and secure.
            </p>
          </div>
          <FooterLinks header='Usefull Links' links={usefullLinks} />
          <FooterLinks header='Community' links={communityLinks} />
          <FooterLinks header='Partner' links={partnerLinks} />
        </div>
        <div className='low'>
          <div className='left'>
            <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
          </div>
          <div className='right'>
            {socialMediaIcons.map((icon, index) => (
              <img src={icon} key={index} alt='icons' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
