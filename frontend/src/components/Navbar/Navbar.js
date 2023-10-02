// Navbar.js

import {useState, useEffect, React} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import './Navbar.css'
import Logo from '../images/Logo.svg'
import SearchBar from '../SearchBar/SearchBar';
import Login from '../Login/Login';

function Navbar() {
  // const [isVisible, setIsVisible] = useState(false);
  // const [height, setHeight] = useState(0)
  
  // useEffect(() => {   
  //   window.addEventListener("scroll", listenToScroll);
  //   return () => 
  //      window.removeEventListener("scroll", listenToScroll); 
  // }, [])
  
  // const listenToScroll = () => {
  //   let heightToShowFrom = 300;
  //   const winScroll = document.body.scrollTop || 
  //       document.documentElement.scrollTop;
  //   setHeight(winScroll);

  //   if (winScroll > heightToShowFrom) {  
  //        !isVisible && setIsVisible(true);
  //   } else {
  //        setIsVisible(false);
  //   }  
  // };
  // console.log(height)
  const [display, setDisplay] = useState("none")
  function handleClick(){
    display=="none"? setDisplay("flex") : setDisplay("none")
    
  }
  return (
    <>
      <div className="navbar">
      <div className="navbar-container">
        <div className='nav-list' >
            <Link to="/" className="navbar-logo">
            <img src={Logo} alt='logo' />
            </Link>
            <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/home" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Dropdown>
                <Dropdown.Toggle variant="success" className='category-dropdown'>
                    Shop
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/fashion">Fashion</Dropdown.Item>
                    <Dropdown.Item href="/electronics">Electronics</Dropdown.Item>
                    <Dropdown.Item href="/home-appliances">Home Appliances</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </li>
         
            </ul>
        </div>
        {/* {
        isVisible 
         && 
        <SearchBar id='hide'/>
        } */}
        <Link to="/register">
          
                  <button className='primary-btn' onClick={handleClick}>
                      Login/Sign Up
                  </button>
          
        </Link>
      </div>
      
    </div>
    <Login display={display} />
    </>
  );
}

export default Navbar;
