import Nav from '../src/Components/Nav/Nav.jsx';
import Home from './Components/Home/Home.jsx';
import Information from './Components/Information/Information.jsx';
import FeatureOne from './Components/Features/FeatureOne.jsx';
import FeatureTwo from './Components/Features/FeatureTwo.jsx';
import Solution from './Components/Solution/Solution.jsx';
import About from './Components/About/About.jsx';
import Links from './Components/Links/Links.jsx';
import Footer from './Components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <Information />
      <FeatureOne />
      <FeatureTwo />
      <Solution />
      <About />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
