import './App.css';
import Home from './components/home.js/Home';
import Navs from './components/navs/Navs';
import About from './components/about us/About';
import Explore from './components/Explore/Explore';
import Testimonials from './components/testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navs/>
    <Home/>
    <About/>
    <Explore/>
    <Testimonials/>
    <FAQ/>
    <Footer/>
    </>
  );
}

export default App;
