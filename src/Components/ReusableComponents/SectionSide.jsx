import React from 'react';

const SectionSide = ({ section }) => {
  return (
    <div className='section-container'>
      {section.map((element, index) => (
        <section key={index}>
          <image>
            <img src={element.image} alt={element.title} />
          </image>
          <div>
            <h3>{element.title}</h3>
            <p>{element.content}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SectionSide;
