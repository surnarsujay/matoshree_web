import React,{useState, useEffect } from "react";
import Gmailpng from '../images/Gmail.png';
import phone from '../images/phone.png';
import '../css/Floatingicon.css';
import whatsapp from '../images/whatsapp.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

function Floatingicon() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
   
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };



    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
    

      const openGmail = () => {
        window.open('https://www.google.com/intl/en_in/gmail/about/');
    };
    const openwhatsapp = () => {
        window.open('https://web.whatsapp.com/');
    };



    useEffect(() => {
        const handleScroll = () => {
            // Your scroll logic here
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

 

    return (
        <div className="call-gmail-buttons scroller" id="scrollable-container">
            <div className="image-container ">
            <img
                src={phone}
                className="rounded float-start1"
                alt="Image 1"
                style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50px",
                    transform: `translateY(${scrollPosition}px)`,
                }}
                onClick={openModal}
                
            />
            <br />
         
            <img
                src={Gmailpng}
                className="rounded float-start2"
                alt="Image 2"
                style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50px",
                    transform: `translateY(${scrollPosition}px)`,
                    paddingTop:"10px",
                    
                }}
                onClick={openGmail}

            />
            <br />
            <img
                src={whatsapp}
                className="rounded float-start3"
                alt="Image 3"
                style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50px",
                    transform: `translateY(${scrollPosition}px)`,
                    paddingTop:"10px"
                }}
                onClick={openwhatsapp}
            />

            <Modal show={showModal} onHide={closeModal} style={{heifht:"80px"}}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontFamily: "Montserrat",fontWeight:"400",fontSize:"30px"}}>open pick an app</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{fontFamily: "Montserrat",fontWeight:"400",fontSize:"15px",color:"#666666"}}>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>https://www.matoshreeinteriors.com/</Form.Label>

                        </Form.Group>

                        <Form.Group controlId="checkbox">
                            <Form.Check
                                type="checkbox"
                                label="Always allow Matoshree.com to open links of this type in the associated app"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                           
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" style={{ color: "blue", border: "1px solid #666666", fontWeight: "400",fontFamily:"Montserrat" }}>
                        Open pick an app
                    </Button>
                    <Button variant="primary" onClick={closeModal} style={{ border: "1px solid white",fontFamily:"Montserrat" }}>
                        Cancle
                    </Button>

                </Modal.Footer>
            </Modal>
            </div>
        </div>
    );
}

export default Floatingicon;