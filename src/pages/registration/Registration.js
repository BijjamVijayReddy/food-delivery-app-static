import React, { useRef } from "react";
import Helmet from "../../components/helmet/Helmet";
import CommonSection from "../../components/commonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";


const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section style={{ padding: "25px" }}>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" >
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn" onClick={submitHandler}>
                  Sign Up
                </button>
              </form>
              <h6> Already have an account? <Link to="/login" style={{ color: "#df2020" }}>Login</Link></h6>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
