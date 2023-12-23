import React from "react";
import "../styles/Contact.css";
import Card from "antd/es/card/Card";
import { Button } from "antd";
import Contacts from "../assets/contact1.png";
import SendOutlined from "@ant-design/icons";

const Contact = () => {
  return (
    <div>
      <section class="contact" id="contact">
        <h2 class="heading">
          <i class="fas fa-headset"></i> Get in <span>Touch</span>
        </h2>
        <div className="container">
          <Card>
            <div className="row">
              <div className="col-lg-6">
                <div class="image-box">
                  <img draggable="false" src={Contacts} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <form>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required=""
                          data-error="Please enter your name"
                          placeholder="Name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required=""
                          data-error="Please enter your email"
                          placeholder="Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          required=""
                          data-error="Please enter your number"
                          className="form-control"
                          placeholder="Phone"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="msg_subject"
                          id="msg_subject"
                          className="form-control"
                          required=""
                          data-error="Please enter your subject"
                          placeholder="Subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols={30}
                          rows={5}
                          required=""
                          data-error="Write your message"
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>

                    <div className="col-md-12 col-lg-12 d-flex justify-content-end">
                      <Button
                        className="mt-2"
                        type="primary"
                        icon={<SendOutlined />}
                        size="large"
                      >
                        Submit
                      </Button>
                      <div id="msgSubmit" className="h3 text-center hidden" />
                      <div className="clearfix" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
