
import React from 'react';
import "./Category.css"
import { Container, Row, Col } from "reactstrap";
import category01Img from "../../assests/images/category-01.png";
import category02Img from "../../assests/images/category-02.png";
import category03Img from "../../assests/images/category-03.png";
import category04Img from "../../assests/images/category-04.png"


const categoryData = [
    {
        display: "FastFoods",
        imgUrl: category01Img
    },
    {
        display: "Pizza",
        imgUrl: category02Img
    },
    {
        display: "Asian Food",
        imgUrl: category03Img
    },
    {
        display: "Raw Meat",
        imgUrl: category04Img
    },

]

const Category = () => {
    return (
        <Container>
            <Row>
                {categoryData.map((item, index) => (
                    <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
                        <div className="category__item d-flex align-items-center gap-3">
                            <div className="category__img">
                                <img src={item.imgUrl} alt="category__item" />
                            </div>
                            <h6>{item.display}</h6>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Category
