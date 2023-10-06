import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import emailjs from "@emailjs/browser";
import CommonSection from "../../components/commonSection/CommonSection";
import Helmet from "../../components/helmet/Helmet";

import "./checkout.css";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterStreet] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    // console.log(shippingInfo);

    if (enterName.length > 1 && enterEmail.length > 1 && enterEmail.length > 1 && enterCountry.length > 1 && enterCity.length > 1 && postalCode.length > 1) {
      const serviceId = "service_pxkvloz"
      const templateId = "template_608wyya"
      const publicKey = "1BovD2UqsBpuezqFr"

      const templateParams = {
        from_name: enterName,
        from_email: enterEmail,
        from_mobileNumber: enterNumber,
        from_street: enterCountry,
        from_city: enterCity,
        from_pinCode: postalCode

      };

      // Send the email using EmailJS
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          alert("Your details have been successfully submitted", response)
          setEnterName("");
          setEnterEmail("");
          setEnterNumber("");
          setEnterStreet("");
          setEnterCity("");
          setPostalCode("")
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    } else {
      alert("Please provide your complete and accurate information for further processing.");
      setEnterName("");
      setEnterEmail("");
      setEnterNumber("");
      setEnterStreet("");
      setEnterCity("");
      setPostalCode("");
    }



  };



  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section style={{ padding: "30px 0px" }}>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Street"
                    required
                    onChange={(e) => setEnterStreet(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn" onClick={submitHandler}>
                  Payment
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
