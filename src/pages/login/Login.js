import React, { useRef } from "react";
import Helmet from "../../components/helmet/Helmet";
import CommonSection from "../../components/commonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const loginNameRef = useRef();
    const loginPasswordRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const serviceId = "service_pxkvloz";
        const templateId = "template_q7tocep";
        const publicKey = "1BovD2UqsBpuezqFr";

        const templateParams = {
            from_name: email,
            to_name: text,
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                alert("Email sent successfully!", response)
                setEmail("");
                setText("");
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });

        setEmail("");
        setText("");
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
                                        onChange={(e) => setEmail(e.target.value)}

                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="Number"
                                        placeholder="+91 0000000000"
                                        required
                                        ref={loginPasswordRef}
                                        onChange={(e) => setText(e.target.value)}
                                    />
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <Link to="/register"><button type="submit" className="addTOCart__btn" onClick={submitHandler}>
                                        Login
                                    </button></Link>

                                </div>
                            </form>
                            <h6>
                            Already have an account? <Link to="/register" style={{color:"#df2020"}}> Create a new one.</Link>
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;
