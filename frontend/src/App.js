import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import Features from './components/Features/Features';
function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Features />
    </Router>
  );
}

export default App;
