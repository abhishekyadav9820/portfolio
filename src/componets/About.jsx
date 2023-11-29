import React from "react";
import { Button } from "antd";
import aboutImage from "../assets/profile1.png";
import "../styles/About.css";
import CaretRightOutlined from "@ant-design/icons";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <h2 className="heading">
            <i className="fas fa-user-alt"></i> About <span>Me</span>
          </h2>
          <div className="row">
            <div className="col-lg-6 col-6 d-flex justify-content-end">
              <div className="image">
                <img draggable="false" class="tilt" src={aboutImage} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-6">
              <div className="content">
                <h3>I'm Abhishek Yadav</h3>
                <span className="tag">Full Stack Developer</span>

                <p>
                  I am a passionate Full Stack Developer with expertise in
                  React.js, Developer, web technologies, Bootstrap-5, PHP
                  Developer, MySQL, JQuery, Javascript, GitHub and AJAX. With
                  over 2 years of experience in Full stack developer, I have
                  successfully delivered several challenging projects and solved
                  complex dataset problems with clean code.
                </p>
                <div className="box-container">
                  <div className="box">
                    <p>
                      <span> email : </span> ay321999@gmail.com
                    </p>
                    <p>
                      <span> place : </span> Mumbai, India - 400079
                    </p>
                  </div>
                </div>

                <Button
                  className="mt-4"
                  type="primary"
                  icon={<CaretRightOutlined />}
                  size="large"
                >
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
