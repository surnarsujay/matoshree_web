import React, { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/Logo.png';
import { SlList } from "react-icons/sl";
import '../css/Navbar.css';
import axios  from 'axios';
import { NavLink } from 'react-router-dom';

import Sidebar from './Sidebar';
const Navbars = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [logoData, setLogoData] = useState([]);

  useEffect(() => {

      axios.get('http://localhost:3001/api/getlogo')
          //axios.get('https://matoshreewebsite.lissomtech.in/APIMatoshree/api/events')
          .then(response => {
              console.log('Fetched Data:', response.data);
              setLogoData(response.data);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }, []);

  return (
    <div>

      <Navbar expand="lg" bg="light" variant="light" fixed='top'>
        <Container>
          {/* <Navbar.Brand >
            <img
              src={Logo}
              alt="Header Logo"
              width="180"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand> */}

{
    logoData.map((data, index) => (


        <Navbar.Brand key={index}>
            <img
                src={`data:image/jpeg;base64,${data.logo}`}
                alt="Header Logo"
                width="180"
                height="100"
                className="d-inline-block align-top"
            />
        </Navbar.Brand>
    ))
}
          <Navbar.Toggle aria-controls="navbar-nav" className='abc'/>
          <Navbar.Collapse id="navbar-nav" className="custom-collapse" activeClassName="active">
            <nav>
              <ul className="mr-auto mynav">

                <li >
                  <NavLink
                    to="/"
                    exact
                    className='mylinktag'

                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/aboutus" className='mylinktag'>ABOUT US</NavLink>
                </li>
                <li>
                  <NavLink to="/services" className='mylinktag' >SERVICES WE OFFER</NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" className='mylinktag' >GALLERY</NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className='mylinktag'>PROJECTS</NavLink>
                </li>
                <li>
                  <NavLink to="/career" className='mylinktag' >CAREERS</NavLink>
                </li>
                <li>
                  <NavLink to="/events" className='mylinktag' >EVENTS</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/news" className='mylinktag' >NEWS</NavLink>
                </li> */}
                <li>
                  <NavLink to="/contactus" className='mylinktag' >CONTACT US</NavLink>
                </li>
              </ul>
            </nav>


            <Nav className="ml-auto" >
  
              <Nav.Link onClick={toggleSidebar} ><SlList size='2em' className='mylinktag1' /></Nav.Link>
            </Nav>

          </Navbar.Collapse>
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
