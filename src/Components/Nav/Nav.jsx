import { useState } from 'react';
import './Nav.css';
import { logo } from '../../assets';
import { IoIosMenu } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

const Nav = () => {
  const constantValues = ['Home', 'About Us', 'Features', 'Solution'];
  const [show, setShow] = useState(true);
  return (
    <>
      <div className='nav'>
        <img src={logo} alt='logo' />
        <ul className='show'>
          {show ? (
            <IoIosMenu className='menu' onClick={() => setShow(false)} />
          ) : (
            <MdClose className='close' onClick={() => setShow(true)} />
          )}
          {show === false ? (
            <ul className='small-ul'>
              {constantValues.map((constantValue, number) => (
                <li key={number} className={'a' + number}>
                  <a href={'#' + constantValue}>{constantValue}</a>
                </li>
              ))}
            </ul>
          ) : (
            ''
          )}
        </ul>
        <ul className='big-ul'>
          {constantValues.map((constantValue, number) => (
            <li key={number} className={'a' + number}>
              <a href={'#' + constantValue}>{constantValue}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
