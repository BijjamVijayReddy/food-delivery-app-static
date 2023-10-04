
import React from 'react';
import person1 from "../../../assests/images/ava-1.jpg";
import person2 from "../../../assests/images/ava-2.jpg";
import person3 from "../../../assests/images/ava-3.jpg";
import person4 from "../../../assests/images/Profile.png"
import Slider from "react-slick";
import "./SliderData.css"



function SliderData() {

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          John Deo raves about Tasty Treat, praising its delectable flavors and exceptional customer service. He highly recommends Tasty Treat for a delightful culinary experience that leaves customers coming back for more.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={person1} alt="avatar" className=" rounded" height="75px" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        Customers are raving about Tasty Treat, praising its delectable flavors and diverse range of options that cater to every palate. From savory to sweet, Tasty Treat has truly won the hearts of food enthusiasts, making it a go-to destination for culinary delights.
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={person2} alt="avatar" className=" rounded" height="75px" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        Our customers rave about Tasty Treat, praising its delectable flavors and top-notch quality. Many have dubbed it their go-to for a delightful culinary experience, leaving them coming back for more
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={person3} alt="avatar" className=" rounded" height="75px" />
          <h6>Steven Crock</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        Customers rave about Tasty Treat, praising its delightful flavors and top-notch quality. They appreciate the variety offered, making it their go-to choice for satisfying their taste buds        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={person4} alt="avatar" className=" rounded" height="75px" />
          <h6 style={{color: "#df2020"}}>VIJAY Vijju</h6>
        </div>
      </div>
    </Slider>
  )
}

export default SliderData