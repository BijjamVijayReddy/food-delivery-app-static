import React, { useRef } from "react";
import Helmet from "../../components/helmet/Helmet";
import CommonSection from "../../components/commonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
    const loginNameRef = useRef();
    const loginPasswordRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <Helmet title="Login">
            <CommonSection title="Login" />
            <section style={{ padding: "30px 0px" }}>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form className="form mb-5" onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input
                                        type="email"
                                        placeholder="bijjamvijayreddy@gmail.com"
                                        required
                                        ref={loginNameRef}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="Number"
                                        placeholder="+91 0000000000"
                                        required
                                        ref={loginPasswordRef}
                                    />
                                </div>
                                <div  style={{display:"flex",justifyContent:"space-evenly"}}>
                                   <Link to="/register"><button type="submit" className="addTOCart__btn">
                                        Login
                                    </button></Link> 
                                    <button type="submit" className="addTOCart__btn">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                            <h6>
                                Subscribe now to stay updated and receive valuable information.
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;
