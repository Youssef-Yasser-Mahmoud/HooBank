import React from 'react';

const FooterLinks = ({ header, links }) => {
  return (
    <div style={{ color: 'white', fontFamily: 'Poppins', width: '150px' }}>
      <div style={{ marginBottom: '1.5rem', fontSize: '18px', fontWeight: '500', lineHeight: '27px' }}>
        <h4>{header}</h4>
      </div>
      <div>
        {links.map((link, index) => (
          <p
            key={index}
            style={{
              marginBottom: '0.4rem',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '24px',
              color: '#FFFFFFB2',
            }}
          >
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
