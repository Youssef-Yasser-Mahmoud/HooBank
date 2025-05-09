import './Home.css';
import discount from '../../assets/Discount.svg';
import robot from '../../assets/robot.png';
import arrowUp from '../../assets/arrow-up.svg';
import Image from './Image';
import Content from './Content';

const Home = () => {
  return (
    <div className='home-container' id='Home'>
      <Content img1={discount} img2={arrowUp} />
      <Image src={robot} alt='robotCart' />
    </div>
  );
};

export default Home;

// width: 669px;
// height: 674px;
