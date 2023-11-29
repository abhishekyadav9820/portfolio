import { React } from "react";
import { Button } from "antd";
import { DownCircleFilled } from "@ant-design/icons";
import Hero from "../assets/profile.jpeg";
import About from "../componets/About";
import Skill from "../componets/Skills";
import Education from "../componets/Education";
import Project from "../componets/Project";


import "../styles/Home.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <div>
      <div className="homeScroll">
        <div className="homeSection" id="home">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="homeText">
                  <h1>Hi There</h1>
                  <h1>
                    I'm <span>Abhishek Yadav</span>
                  </h1>
                  <p>I am Working as Full stack developer</p>
                </div>
                <Button
                  className="mt-3"
                  type="primary"
                  shape="round"
                  icon={<DownCircleFilled />}
                  size="large"
                >
                  About Me
                </Button>
                {/* <Icon type="down-circle" theme="filled" /> */}
              </div>
              <div className="col-lg-6 col-12">
                <div className="image">
                  <img draggable="false" className="tilt" src={Hero} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Skill/>
      <Education/>
      <Project/>
   
 
    </div>
  );
};

export default Home;
