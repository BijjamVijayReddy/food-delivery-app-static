
import React, { useEffect, useState } from 'react';
import "./Home.css"
import Helmet from '../../components/helmet/Helmet';
import "../../styles/Home-section.css"
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import heroImg from "../../assests/images/hero.png";
import { GoShieldCheck } from "react-icons/go";
import { AiFillCar } from "react-icons/ai";
import Category from '../../components/category/Category';
import featureImg01 from "../../assests/images/service-01.png";
import featureImg02 from "../../assests/images/service-02.png";
import featureImg03 from "../../assests/images/service-03.png";
import trackImg from  "../../assests/images/location.png";
import networkImg from "../../assests/images/network.png"
import SliderData from '../../components/UI/slider/SliderData';
import products from "../../assests/fakeData/Product";
import foodCategoryImg01 from "../../assests/images/bread.png";
import foodCategoryImg02 from "../../assests/images/pizza.png";
import foodCategoryImg03 from "../../assests/images/hamburger.png";
import { Link, json } from 'react-router-dom';
import ProductCard from '../../components/product-cart/ProductCart';


const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Quick delivery ensures that products or services reach customers promptly, enhancing satisfaction and efficiency.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Super Dine In offers a modern and interactive dining experience, combining exquisite cuisine with cutting-edge technology in a stylish setting.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Easy Pick Up simplifies the process, making it effortless and quick to grab what you need.",
  },
]


const Home = () => {
  const [category , setCategory] = useState();
  const [allProducts , setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);;

  // console.log("pRODUCTSS"  + allProducts) 

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);;
      // console.log("Products "  + products)
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Your cravings, our mission. Taste the speed of satisfaction with every bite delivered to your door, made just for you.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"><AiFillCar /></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"> <GoShieldCheck /></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span style={{color: "#df2020"}}>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                "Just sit back at home, we will take care" is a reassuring and inviting phrase that emphasizes the idea of relaxation and trust. It implies that someone or a service provider is ready to handle responsibilities or tasks on your behalf, allowing you to unwind and have peace of mind while staying at home. It conveys a sense of assurance that things will be managed efficiently without your direct involvement, promoting comfort and confidence in the support being offered.
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={trackImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span style={{color: "#df2020"}}>Tasty Treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                Tasty Treat is a culinary delight, blending flavors that captivate the taste buds. With carefully curated ingredients, it offers a gastronomic adventure that leaves a lasting impression. Each bite is a fusion of innovation and tradition, delivering an unforgettable dining experience. Indulge in Tasty Treat for a symphony of flavors that redefine culinary excellence.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 " style={{fontFamily: "RocknRoll One, sans-serif"}}>
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                     * Indulge in a delightful array of fresh and flavorsome dishes that tantalize your taste buds and invigorate your senses.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 " style={{fontFamily: "RocknRoll One, sans-serif"}}>
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                     * Quality support ensures timely and effective assistance, meeting customer needs with excellence and dedication.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0" >
                    <p className="choose__us-title d-flex align-items-center gap-2 "  style={{fontFamily: "RocknRoll One, sans-serif"}}>
                      <i class="ri-checkbox-circle-line"></i> <span></span>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                   * Effortlessly place orders from wherever you are.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                {/* <h5 className="testimonial__subtitle mb-4">Testimonial</h5> */}
                <h2 className="testimonial__title mb-4">
                  What our <span style={{color: "#df2020"}}>customers</span> are saying :
                </h2>
                <p className="testimonial__desc">
                Our customers rave about Tasty Treat's delightful array of flavors and exceptional quality. They appreciate the fresh and unique taste experiences, often highlighting the delectable balance of sweetness and savory notes. The consistent positive feedback underscores Tasty Treat's commitment to delivering a satisfying culinary journey. Many customers emphasize the brand's ability to make every occasion special with their delicious offerings.
                </p>

                <SliderData />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home
