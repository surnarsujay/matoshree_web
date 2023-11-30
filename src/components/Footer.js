import React,{useEffect,useState} from 'react';
import '../css/Footer.css';
import logo from '../images/Logo.png';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import axios from 'axios'
function Footer() {

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
        <div className="card main" style={{ marginTop: '30px' }}>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-12 col-lg-4">
                            <a className="d-inline-block" style={{ marginRight: "140px" }}>
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="img-fluid mx-auto"
                                    style={{ maxWidth: "250px", height: "auto", backgroundColor: "rgb(241, 238, 238)", marginBottom: '30px ', display: 'flex', justifyContent: 'left', alignItems: 'left', marginTop: '120px' }}
                                />
                            </a>
                        </div> */}






      {logoData.map((data, index) => (
        <div key={index} className="col-md-12 col-lg-4">
          <a className="d-inline-block" style={{ marginRight: "140px" }}>
            <img
              src={`data:image/jpeg;base64,${data.logo}`}
              alt="Logo"
              className="img-fluid mx-auto"
              style={{
                maxWidth: "250px",
                height: "auto",
                backgroundColor: "rgb(241, 238, 238)",
                marginBottom: '30px ',
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'left',
                marginTop: '120px'
              }}
            />
          </a>
        </div>
      ))}
  

                        {/* Column 1 */}
                        <div className="column col-md-6 col-lg-2">
                            <h3 className='Footertitle'>Services We Offer</h3>
                            <hr />
                            <ul className="list-unstyled">
                                <li>Interior Work Designs</li>
                                <li>Estimating & Costing For Interior</li>
                                <li>Interior Work Budgeting</li>
                                <li>Interior Items material Supply</li>
                                <li>On Site Carpentry Works</li>
                                <li>Modular Furniture Works</li>

                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="column  col-md-6 col-lg-2">
                            <h3 className='Footertitle'
                                style={{ color: "white" }}>.</h3>
                            <hr />
                            <ul className="list-unstyled">
                                <li>All Gypsum Works</li>
                                <li>All Painting Works</li>
                                <li>All Aluminium Works</li>
                                <li>All Glass Works</li>
                                <li>All Fabrication Works</li>
                                <li>Flooring Works</li>
                                <li>Corian Material Works</li>

                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="column col-md-6 col-lg-2">
                            <h3 className='Footertitle'>Corporate Address</h3>
                            <hr />
                            <address>
                                <strong>Matoshree Interiors - Nashik</strong><br />
                                Third Floor, Shanti Viraj Heights, Near<br />
                                GST Bhavan, Pathardi Phata, Nashik,<br />
                                Maharashtra, India<br />
                                Pincode 422010.<br />
                                <strong className='mail '>Email:</strong> info@matoshreeinteriors.com<br />
                                <strong className='contact'>Contact No:</strong> 9420950999
                            </address>
                        </div>
                        {/* Column 4 */}
                        <div className="column col-md-6 col-lg-2">
                            <h3 className='Footertitle'>Corporate Address</h3>
                            <hr />
                            <address>
                                <strong>Matoshree Interiors - Shirdi</strong><br />
                                Behind Kalasai Hotel, Opp. Police<br />
                                Station, Shirdi, Tal-Rahata, Dist-<br />
                                Ahmednagar, Maharashtra, India<br />
                                Pincode 423107.<br />
                                <strong className='mail '>Email:</strong> info@matoshreeinteriors.com<br />
                                <strong className='contact'>Contact No:</strong> 9420950999
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card botm'>
                <div className="row  rowmedia">
                    <div className="col-6">
                        <p className='pname'>© 2023 Matoshree Interiors <a href=" https://www.matoshreeinteriors.com" style={{ color: "black" }} >@LissomTechnologies</a></p>
                    </div>
                    <div className="col-6 media" style={{}}>
                        <a href="https://www.facebook.com/people/Matoshree-Interiors/pfbid028HYY3cteqHLqRKpbELRXE11J3A5Jb12dNVMLuDJnTx3AN3m7ovJJAqj6QER35w32l/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} color='black' />
                        </a>
                        <a href="https://wa.me/ 9420950999" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={24} color='black' />
                        </a>
                        <a href="https://www.instagram.com/matoshree_interiors_official/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} color='black' />
                        </a>
                        <a href="https://www.linkedin.com/in/matoshree-interiors-329461218/" target="_blank" rel="noopener noreferrer" >
                            <FaLinkedin size={24} color='black' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;