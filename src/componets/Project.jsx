import React from "react";
import "../styles/Project.css";
import Projects from "../assets/project.png";
import Projects1 from "../assets/project_1.png";
import Project2 from "../assets/project_2.png";


const Project = () => {
  return (
    <div>
      <section class="work" id="work">
        <div className="container">
          <h2 class="heading">
            <i class="fas fa-laptop-code"></i> Projects <span>Made</span>
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="service-item">
                <div className="service-img">
                  <img src={Projects} alt="Abhishek Yadav Portfolio" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">My Portfolio</h3>
                  <p className="service-text">
                    Explore my portfolio to witness a journey shaped by a
                    passion for innovation and a commitment to academic
                    excellence. Through the lens of experience, discover a
                    narrative that intertwines education, skills, and a
                    dedication to pushing creative boundaries.
                  </p>
                  <div className="service-arrow">
                    <a href="#" className="service-btn" alt="Portfolio">
                      View More
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item">
                <div className="service-img">
                  <img src={Projects1} alt="Abhishek Yadav" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">Eera's Agro Resort</h3>
                  <p className="service-text">
                    Inspired by the design aesthetics of Eera's Agro Resort
                    website,visually appealing
                    layout and user-friendly features into add my portfolio,
                    striving to create an engaging and seamless user
                    experience.
                  </p>
                  <div className="service-arrow">
                    <a href="https://eerasagroresort.in/" target="_black" className="service-btn">
                      View More
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item">
                <div className="service-img">
                  <img src={Project2} alt="To do list" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">To Do List</h3>
                  <p className="service-text">
                    I developed a React.js to-do list website with robust CRUD
                    functionality, allowing users to effortlessly create, read,
                    update, and delete tasks. The addition of reminders elevates
                    task management, ensuring users stay organized and on top of
                    their priorities seamlessly.
                  </p>
                  <div className="service-arrow">
                    <a href="https://todolist-lovat-tau.vercel.app/" className="service-btn">
                      View More
                      <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
