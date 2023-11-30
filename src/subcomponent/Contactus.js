import React, { useState ,useEffect} from "react";
// import Contactpng from '../Img/contact.png'



import Popup from "../components/Popup";


import Contactpng from '../images/contact.png'

import '../css/Contactus.css'
import Footer from "../components/Footer";
import axios from "axios";
function Contactus() {

    const [contactData, setContactData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:3001/api/contactus_head')
            //axios.get('https://matoshreewebsite.lissomtech.in/APIMatoshree/api/events')
            .then(response => {
                console.log('Fetched Data:', response.data);
                setContactData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);







    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
            valid = false;
        } else {
            newErrors.name = "";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = " Email is required";
            valid = false;
        } else {
            newErrors.email = "";
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Phone number is required";
            valid = false;
        } else {
            newErrors.phone = "";
        }

        setErrors(newErrors);
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
       
                const response = await fetch('http://localhost:3001/contactus/submitForm', {
                    // const response = await fetch('https://matoshreewebsite.lissomtech.in/APIMatoshree/contactus/submitForm', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (data.success) {
                    console.log("Form submitted successfully:", formData);
                    // Reset form data
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: ""
                    });
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
        <div className="container-fluid mycontact">
            <Popup isOpen={showPopup} onRequestClose={closePopup} message="Your form has been submitted successfully!" />
            
            {/* <div className="image-container">
                <img src={Contactpng} className="card-img" alt="Image 2" style={{ height: "380px" }} />
                <div className="text-center contactus" style={{ color: "black" }}>Contact Us</div>
            </div> */}
            {
    contactData.map((data, index) => (
        <div className="image-container" key={index}>
        <img src={`data:image/jpeg;base64,${data.Image}`}className="card-img" alt="Image 2" style={{ height: "380px" }} />
        <div className="text-center contactus" style={{ color: "black" }}>Contact Us</div>
        </div>
    ))
}

            <br></br>
            <br></br>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 sendmsg">
                        <h2 style={{ color: "black", fontFamily: "Montserrat", fontWeight: "400", fontSize: "30px" }}>Send Us A Message</h2>
                        <br></br>
                        <p>Call or submit our online form to request or for general questions about our services.

                            We look forward to serving you!</p>
                        <form
                            className="wrap-form-reservation size22 m-l-r-auto"
                            onSubmit={handleSubmit}
                        >
                            <div className="row">
                                <div className="form-group">

                                    <input
                                        className="form-control"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <span className="error" style={{ color: "red", fontFamily: "Montserrat" }}>{errors.name}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group" style={{ paddingTop: "20px", fontFamily: "Montserrat" }}>

                                    <input
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <span className="error" style={{ color: "red" }}>{errors.email}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group" style={{ paddingTop: "20px", fontFamily: "Montserrat" }}>

                                    <input
                                        className="form-control"
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <span className="error" style={{ color: "red", fontFamily: "Montserrat" }}>{errors.phone}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12" style={{ paddingTop: "50px", fontFamily: "Montserrat" }}>
                                    <div className="form-group">

                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            placeholder="Message"
                                            style={{ height: "180px" }}
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="d-grid gap-2">
                                <button
                                    className=" btn btn-dark"
                                    type="submit"

                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <h2 style={{ color: "black", fontFamily: "Montserrat", fontWeight: "400", fontSize: "30px" }}>Corporate Address</h2>
                        <br></br>
                        <div className="row">
                            <div className="col-md-6 mts">
                                <h5 className="text" style={{ color: "black", fontSize: "20px", fontFamily: "Montserrat" }}>Matoshree Interiors - Nashik</h5>
                                <p>Third Floor, Shanti Viraj Heights, Near GST Bhavan, Pathardi Phata, Nashik, Maharashtra, India.
                                    Pincoce 422010.</p>
                                <br></br>
                                <h5 className="text" style={{ color: "black", fontSize: "20px", fontFamily: "Montserrat" }}>Matoshree Interiors - Shirdi</h5>
                                <p>Behind Kalasai Hotel, Opp. Police Station, Shirdi, Tal-Rahata Dist-Ahmednagar, Maharashtra, India.
                                    Pincode 423107.</p>
                            </div>
                            <div className="col-md-6">
                                <h5 className="text" style={{ color: "black", fontSize: "20px", fontFamily: "Montserrat" }}>Contact Info</h5>
                                <h6 style={{ fontFamily: "Montserrat" }}>Mail-info@matoshreeinteriors.com</h6>
                                <h6 style={{ fontFamily: "Montserrat" }} >Contact No -9420950999</h6>
                            </div>
                        </div>
                        <div className="card">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964949.8807945634!2d73.06287049658415!3d19.13678722376451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc5b341c661eab%3A0xf1c3e0b61632e754!2sMatoshree%20Interiors!5e0!3m2!1sen!2sin!4v1696334589064!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                title="Map"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );

}
export default Contactus;