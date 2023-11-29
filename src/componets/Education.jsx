import React from "react";
import "../styles/Education.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Education = () => {
  return (
    <div>
      <section className="education" id="education">
        <h1 className="heading">
          <i className="fas fa-graduation-cap"></i> My <span>Education</span>
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src="https://ycmou.ac.in/media/front/images/main-slider/slide4.jpg" />
                <Card.Body>
                  <Card.Title>YCMOU University</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Chandrabhan Sharma College in Powai</Card.Subtitle>
               
                  <Card.Text>
                   MCA -<span> 2021- 2023</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src="https://mum.digitaluniversity.ac/user/pages/images/slides/slide1.jpg" />
                <Card.Body>
                  <Card.Title>Mumbai University</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Chandrabhan Sharma College in Powai</Card.Subtitle>
               
                  <Card.Text>
                   Bsc IT -<span> 2017- 2020</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src="https://www.collegebatch.com/static/clg-gallery/chandrabhan-sharma-college-of-arts-science-commerce-mumbai-223327.jpg" />
                <Card.Body>
                <Card.Title>Maharashtra Board</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Chandrabhan Sharma College in Powai</Card.Subtitle>
               
                  <Card.Text>
                   HSC -<span> 2015- 2017</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
