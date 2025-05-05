import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './Components/headercomponent';
import Footer from './Components/footer';
import ImageGallery from './Components/ImageGallery';
import Map from './Components/Map';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Location from './Pages/Location';
import Quartos from './Pages/Quartos';
import Services from './Pages/Services';
import LandingPage  from './Pages/LandingPage';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
    </Routes>
  </Router>
  );
}
export default App;
