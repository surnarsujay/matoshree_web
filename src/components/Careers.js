import React, { useState ,useEffect} from 'react';
import Popup from "./Popup";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Career from '../images/career.jpg';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import { FaEnvelope } from 'react-icons/fa'; 
import axios from 'axios';

function Careers() {

  const [careerData, setCareerData] = useState([]);

  useEffect(() => {

      axios.get('http://localhost:3001/api/career_head_img')
          //axios.get('https://matoshreewebsite.lissomtech.in/APIMatoshree/api/events')
          .then(response => {
              console.log('Fetched Data:', response.data);
              setCareerData(response.data);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }, []);


  const [hrPolicies, setHrPolicies] = useState('');
  useEffect(() => {
 
    fetchHrPolicies();
  }, []);

  const fetchHrPolicies = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/hrpolicies');
      if (response.ok) {
        const data = await response.json();
        setHrPolicies(data.message);
      } else {
        console.error('Error fetching HR policies');
      }
    } catch (error) {
      console.error('Error fetching HR policies:', error);
    }
  };



  const containerStyles = {
    padding: '0',
    margin: '0', 
    overflowX: 'hidden', 
    position: 'relative',
  };

  const cardStyles = {
    marginLeft: '10px',
    width: '100%',
 
  };
  const imageStyles = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    marginTop:'100px'
  };

  const centerTextStyles = {
    position: 'absolute',
    fontFamily: 'Courgette',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const hrPolicy = {
    fontFamily: 'Montserrat',
    fontWeight: 200,
    fontSize: '30px',
    lineHeight: 1.7,
    color: 'black',
    marginLeft: '0px',
    marginRight: '0px'

  };

  const hrText = {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: '15px',
    lineHeight: '1.7',
    // marginLeft: '55px',
    color: 'black',
textAlign:'justify',
    display: 'block',

  };

  const hrPText = {
    fontFamily: 'Montserrat',
    // fontWeight: '400',
    fontSize: '18px',
    lineHeight: '1.7',
    color: 'black',
    fontWeight: 'bold',
    // marginRight: '450px'
  };


  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectedPost: '',
    currentLocation: '',
    currentEmployer: '',
    experience: '',
    qualification: '',
    resume: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectedPost: '',
    currentLocation: '',
    currentEmployer: '',
    experience: '',
    qualification: '',
    resume: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        [name]: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
  
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      valid = false;
    } else {
      newErrors.firstName = "";
    }
  
    if (formData.middleName.trim() === "") {
      newErrors.middleName = "Middle name is required";
      valid = false;
    } else {
      newErrors.middleName = "";
    }
  
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
      valid = false;
    } else {
      newErrors.lastName = "";
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is required";
      valid = false;
    } else {
      newErrors.email = "";
    }
  
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else {
      newErrors.phoneNumber = "";
    }
  
    setErrors(newErrors);
    console.log(newErrors); // Add this line to log errors
    return valid;
  };
  

  const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const formDataToSend = new FormData();

        for (const key in formData) {
          formDataToSend.append(key, formData[key]);
        }

        const response = await fetch('http://localhost:3001/careers/submitForm', {
          method: 'POST',
          body: formDataToSend,
        });

        const data = await response.json();

        if (data.success) {
          console.log("Form submitted successfully:", formData);
          // Reset form data
          setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            selectedPost: '',
            currentLocation: '',
            currentEmployer: '',
            experience: '',
            qualification: '',
            resume: '',
          });
          document.getElementById('formFile').value = '';
          openPopup(); // Open the popup
        } else {
          console.error("Form submission failed:", data.message);
       
        }
      } catch (error) {
        console.error("Error submitting form:", error);
     
      }
    } else {
      console.log("Form has errors");
     
    }
  };

  return (
    <Container fluid style={containerStyles}>
       <Popup isOpen={showPopup} onRequestClose={closePopup} message="Your form has been submitted successfully!" />
      <Row>
        {/* <Col sm={12}>
          <Image src={Career} style={imageStyles} fluid />
        </Col> */}
        {
    careerData.map((data, index) => (
        <Col sm={12} key={index}>
        <Image src={`data:image/jpeg;base64,${data.Image}`} style={imageStyles} fluid />
      </Col>
    ))
}

      </Row>
      <hr style={{ marginTop: '30px' }} />
      <Row>
        <Col sm={6} style={{ marginTop: '80px', marginLeft: '0px' }}>
          <div style={{ marginLeft: '20px' }}>
            <h1 style={hrPolicy}>Our HR Philosophy</h1>
            <p style={hrText}>
            {hrPolicies}
            </p>
          </div>
          <div >
            <p style={hrPText}>We believe that:</p>
            <ul style={{ textAlign: 'left', fontFamily: 'Montserrat', }}>
              <li>We believe that our employees are our most valuable asset</li>
              <li>Each Individual makes a difference in the working Environment</li>
              <li>Building human competencies and capabilities is critical to our continued growth and success</li>
              <li>Employees are intellectually and emotionally engaged</li>
              <li>Fair and lawful treatment of all employees and Concern for the individual</li>
              <li>Alignment of organizational goals with Individual goals</li>
              <li>Recognize each individuals contribution to the growth and development of the Company</li>
              <li>Treat all Matoshree Group employees with respect and dignity</li>
            </ul>
          </div>
          <div>
            <div style={{ marginTop: '40px' }}>
              <Card style={cardStyles}>
                <Card.Body>
                  If the position you want is not mentioned, you may send us your resume with the position applied for written in the subject line of your email to
                  {' '}
                  <a href="mailto:info@matoshreeinteriors.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                    {' '}
                    info@matoshreeinteriors.com
                  </a>
                </Card.Body>
              </Card>

            </div>
          </div>
        </Col>

        <Col sm style={{ marginTop: '80px', marginLeft: '0px' }}>
          <div >
            <h1 style={{ fontFamily: 'Montserrat', fontWeight: 400, fontSize: '30px', lineHeight: 1.7, color: 'black', marginLeft: '60px',}}>Apply Now</h1>
            <div style={{ marginTop: '50px' }}>
              <Card body style={{ backgroundColor: 'whitesmoke', marginTop: '-30px' }}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row">

                    <div className="col">
                      <input type="text"
                        className="form-control"
                        placeholder="First name"
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange} />
                    </div>

                    <div className="col">
                      <input type="text"
                        className="form-control"
                        placeholder="Middle name"
                        name='middleName'
                        value={formData.middleName}
                        onChange={handleChange} />
                    </div>

                    <div className="col">
                      <input type="text
                      " className="form-control"
                        placeholder="Last name"
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>

                  </div>

                  <br />

                  <div className="mb-3">
                    <input type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      name='email'
                      value={formData.email}
                      onChange={handleChange} />
                  </div>

                  <br />

                  <div className="mb-3">
                    <input type="number"
                      className="form-control"
                      placeholder="Your Phone/Mobile Number"
                      name='phoneNumber'
                      value={formData.phoneNumber}
                      onChange={handleChange} />
                  </div>

                  <br />

                  <div className="mb-3">
                    <input type="text"
                      className="form-control"
                      placeholder="Post Applied For"
                      name='selectedPost'
                      value={formData.selectedPost}
                      onChange={handleChange}
                    />

</div>

                  <br />

                  <div className="mb-3">
                    <input type="text"
                      className="form-control"
                      placeholder="Your Current Location"
                      name='currentLocation'
                      value={formData.currentLocation}
                      onChange={handleChange}
                    />

                  </div>

                  <br />

                  <div className="mb-3">
                    <input type="text"
                      className="form-control"
                      placeholder="Your Current Employer"
                      name='currentEmployer'
                      value={formData.currentEmployer}
                      onChange={handleChange} />
                  </div>

                  <br />

                  <div className="mb-3">
                    <input type="number"
                      className="form-control"
                      placeholder="Years of Experience"
                      name='experience'
                      value={formData.experience}
                      onChange={handleChange} />
                  </div>

                  <br />

                  <div className="mb-3">
                    <input type="text"
                      className="form-control"
                      placeholder="Your Qualification"
                      name='qualification'
                      value={formData.qualification}
                      onChange={handleChange} />
                  </div>

                  <br />

                  <div className="mb-3">

                    <label htmlFor="formFile" className="form-label"><p>Attach Your Resume (File Type: .doc/.docx/.pdf/.txt | Size:1MB)</p></label>
                    <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="resume"
                  onChange={handleChange}  
                />




                  </div>

                  <br />
                  <br />

                  <button type="submit" className="btn btn-dark" style={{ width: '100%' }}>Send</button>

                </form>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
      <hr style={{ marginTop: '50px' }} />
      <Footer />
    </Container>
  );
}

export default Careers;








