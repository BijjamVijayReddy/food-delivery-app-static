import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assests/images/res-logo.png";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "./Footer.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";


const Footer = () => {
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const serviceId = "service_pxkvloz";
    const templateId = "template_q7tocep";
    const publicKey = "1BovD2UqsBpuezqFr";

    const templateParams = {
      from_name: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Email sent successfully!", response)
        setEmail("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    setEmail("");
  }

  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Tasty Treat: Where Flavor Meets Delight, Every Bite is a Journey of Pure Enjoyment!
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Monday - Friday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Saturday - Sunday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p> Location: Silicon Valley, Bangalore</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Mobile:  +91-9491467216</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: bijjamvijayreddy@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
              <span>
                <i class="ri-send-plane-line" onClick={submitHandler}>Send</i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2023, website made by Vijay. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow:</p>

              <span>
                <i class="ri-github-line"><FaFacebookF /></i>
              </span>

              <span>
                <i class="ri-github-line"><FaInstagram /></i>
              </span>

              <span>
                <i class="ri-github-line"><FaGithub /></i>
              </span>

              <span>
                <i class="ri-github-line"><FaLinkedinIn /></i>
              </span>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
