
import React, { useState } from 'react';
import Constr from '../videos/Constr.mp4';
import '../css/EnquiryForm.css'
import { Card } from 'react-bootstrap';
import Popup from "./Popup";

function EnquiryForm() {
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        phone: '', 
        address: '',
        message: '', 
    });

    const [validationErrors, setValidationErrors] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '', 
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const validateForm = () => {
        const errors = {};

        if (inputValues.name.trim() === '') {
            errors.name = 'Name is required.';
        }

        if (inputValues.email.trim() === '') {
            errors.email = 'Email is required.';
        }

        if (inputValues.phone.trim() === '') {
            errors.phone = 'Contact Number is required.';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };
   


    const handleButtonClick = () => {
        const isValid = validateForm();

        if (isValid) {
            fetch('http://localhost:3001/enquiryform/submitForm', {
                //     fetch('https://matoshreewebsite.lissomtech.in/APIMatoshree/enquiryform/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputValues),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('Form submitted:', inputValues);
                    setInputValues({
                        name: '',
                        email: '',
                        phone: '', 
                        address: '',
                        message: '',
                    });

                    openPopup(); // Open the popup

                } else {
                    console.error('Error submitting form:', data.message);
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
        }
    };

    return (
        <Card style={{ backgroundColor: 'rgba(220, 220, 220, 0.5)' ,marginTop :'30px'}}>
             <Popup isOpen={showPopup} onRequestClose={closePopup} message="Your form has been submitted successfully!" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 p-4">
                        <h3 className="card-title text-center">Enquiry Form</h3>
                        <form>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}
                                    placeholder="Your Name"
                                    name="name"
                                    value={inputValues.name}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.name && (
                                    <div className="invalid-feedback">{validationErrors.name}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                                    placeholder="Your Email"
                                    name="email"
                                    value={inputValues.email}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.email && (
                                    <div className="invalid-feedback">{validationErrors.email}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${validationErrors.phone ? 'is-invalid' : ''}`}
                                    placeholder="Your Contact Number"
                                    name="phone"
                                    value={inputValues.phone}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.phone && (
                                    <div className="invalid-feedback">{validationErrors.phone}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Address"
                                    name="address"
                                    value={inputValues.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className={`form-control ${validationErrors.comment ? 'is-invalid' : ''}`}
                                    rows="3"
                                    placeholder="Message"
                                    name="message"
                                    value={inputValues.message}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.message && (
                                    <div className="invalid-feedback">{validationErrors.message}</div>
                                )}
                            </div>
                            <div className="mb-6">
                                <button
                                    className="btn btn-dark btn-block"
                                    type="button" 
                                    onClick={handleButtonClick}
                                    style={{ width: '100%' }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'33px' }}>
                        <video autoPlay muted loop width="100%" height="100%" controls={false}>
                            <source src={Constr} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default EnquiryForm;
