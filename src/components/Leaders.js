import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leader1 from '../images/leader1.jpg';
import leader2 from '../images/leader2.jpg';

const imageStyle = {
  height: '400px',
  width: '400px', // Added width to maintain aspect ratio
};

const Leaders = () => {
  return (
    <Card style={{ marginTop: '20px' }}>
      <Card.Body>
        <Row className="align-items-center">
          <Col sm={4}>
            <img src={leader1} alt="Leader" style={imageStyle} />
          </Col>

          <Col sm={8}>
            <h5>Mahesh Dange</h5>
            <h6>Director & Founder</h6>
            <h6>ME Civil Construction & Management</h6>
            <p>
              The journey of a thousand miles begins with a single step. We
              also started in the same manner but the end is yet to achieve. In
              this journey, our clients are holding our hands and consistently
              showing faith in our work and providing us new opportunities. We
              are inspired by innovation, and yes, our design meets innovation.
            </p>
          </Col>




          <Col sm={8}>
            <h5>Deepak Kohak</h5>
            <h6>Director & Co Founder</h6>
            <h6>ME Civil Consrtuction & Managment</h6>
            <p>
            With the great vision and mission we founded "Matoshree Interiors" since then we are giving our best. The journey started with doing every single work and now it's a great honor to lead such a enthusiastic team. It's been great pleasure when our work gets admired by our clients. We are always committed to give best service to our valuable clients.
            </p>
          </Col>

          <Col sm={4}>
            <img src={leader2} alt="Leader 2" style={imageStyle} />
          </Col>

        </Row>
      </Card.Body>
    </Card>
  );
};

export default Leaders;
