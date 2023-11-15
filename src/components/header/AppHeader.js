import React, { useRef, useEffect, useState } from "react";
import "./AppHeader.css"

import { Container } from "reactstrap";
import logo from "../../assests/images/res-logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { FaAlignJustify } from "react-icons/fa"
import { FaPowerOff, FaLanguage } from "react-icons/fa6";
import { cartUiActions } from "../../store/shippingCart/cartUISlice";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/shippingCart/cartSlice";


const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const lanSelction = [
  {
    value: "en",
    text: "English",
    letter: "english"
  },
  {
    value: "hn",
    text: "हिन्दी",
    letter: "hindi",
  },
]

const Header = () => {
  const [scrollTop, setScrollTop] = React.useState(0);


  // console.log("Scroll " + scrollTop)

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const lanSelctor = useRef(null)
  const dispatch = useDispatch()
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const lanSlider = () => lanSelctor.current.classList.toggle("lan__menu")

  const screenWidth = window.screen.availWidth;

  React.useEffect(() => {

    const handleScroll = () => {
      setScrollTop(window.scrollY);

      if (window.scrollY > 60) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const languageHandler = (e) => {
    // console.log("first " + e.target.value);
    // const stringValue = JSON.stringify(e.target.value);
    sessionStorage.setItem('selectedLanguage', e.target.value);
    dispatch(cartActions.setLangaugeAction(e.target.value))
  }

  return (
    <div className={` ${scrollTop < 64 ? "" : "header__shrink"}`}>
      <header className="header" ref={headerRef}>
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to="/home"><img src={logo} alt="logo" /></Link>
              <h5>Tasty Treat</h5>
            </div>


            {/* Menu */}
            {/* ======= menu ======= */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>


            {/* Lanaguage Selctor */}

            <div className="navigation" ref={lanSelctor} onClick={lanSlider}>
              <div className="menu d-flex align-items-center gap-5">
                {lanSelction.map((item, index) => (
                  <button
                    style={{ border: "none", background: "none" }}
                    value={item.value}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                    onClick={languageHandler}
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </div>





            {/* ======== nav right icons ========= */}

            <div className="nav__right d-flex align-items-center gap-4">

              <span className="cart__icon" onClick={toggleCart}>
                <Link to="/cart">  <i class="ri-shopping-basket-line"><CiShoppingCart /></i></Link>
                <span className="cart__badge">{totalQuantity}</span>
              </span>

              {screenWidth < 984 ? (<span className="cart__icon" onClick={lanSlider}>
                <i class="ri-shopping-basket-line" ><FaLanguage /></i>
              </span>) : null}
                    
              {screenWidth < 984 ? (<span className="user">
                <i class="ri-user-line" onClick={toggleMenu}><FaAlignJustify /></i>
              </span>) : null}


              <span className="user">
                <Link to="/login"><i class="ri-user-line"><FaPowerOff /></i></Link>
              </span>

            </div>
          </div>
        </Container>

      </header>


    </div>

  )

};

export default Header;
