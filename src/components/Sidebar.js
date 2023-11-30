import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../css/Sidebar.css';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/Logo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <Offcanvas show={isOpen} onHide={toggleSidebar} placement="end" >
            <Offcanvas.Header closeButton> </Offcanvas.Header>
            <Offcanvas.Body>
                <div style={{margin: 'auto' }}>
                    <nav className="flex-column mysidebar">
                        <Navbar.Brand >
                            <img
                                src={Logo}
                                alt="Left Image"
                                width="180"
                                height="100"
                                className="mysidebarImg"
                            />
                        </Navbar.Brand>
                        <NavLink to="/" className="sidebar-link">
                            HOME
                        </NavLink>
                        <NavLink to="/aboutus" className="sidebar-link">
                            ABOUT US
                        </NavLink>
                        <NavLink to="/services" className="sidebar-link">
                            SERVICES
                        </NavLink>
                        <NavLink to="/projects" className="sidebar-link">
                            PROJECTS
                        </NavLink>
                        <NavLink to="/career" className="sidebar-link" >
                            CAREERS
                        </NavLink>

                        <NavLink to="/contactus" className="sidebar-link">
                            CONTACT
                        </NavLink>
                        <div className='container mapdiv' style={{textAlign:'center'}}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964949.8807945634!2d73.06287049658415!3d19.13678722376451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc5b341c661eab%3A0xf1c3e0b61632e754!2sMatoshree%20Interiors!5e0!3m2!1sen!2sin!4v1696334589064!5m2!1sen!2sin"
                                width="350"
                                height="300"
                                title="Map"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                
                            ></iframe>
                        </div>


                       
                    </nav>
                </div>
            </Offcanvas.Body>
         
        </Offcanvas>


    );
};

export default Sidebar;
