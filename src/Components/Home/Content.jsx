const Content = ({ img1, img2 }) => {
  return (
    <div className='content'>
      <button className='discount-content'>
        <img src={img1} alt='discountLogo' />
        <p>
          <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
        </p>
      </button>
      <div className='generation'>
        <h2>
          The Next <br />
          <span>Generation</span> <br />
          Payment Method.
        </h2>
        <p>
          Get <img src={img2} alt='arrow' />
          <br />
          Started
        </p>
      </div>
      <div>
        <p>
          Our team of experts uses a methodology to identify <br />
          the credit cards most likely to fit your needs. <br />
          We examine annual percentage rates, annual fees.
        </p>
      </div>
    </div>
  );
};

export default Content;
