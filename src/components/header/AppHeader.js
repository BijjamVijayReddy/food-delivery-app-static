import React, { useRef, useEffect } from "react";
import "./AppHeader.css"

import { Container } from "reactstrap";
import logo from "../../assests/images/res-logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { FaAlignJustify } from "react-icons/fa"
import { FaPowerOff } from "react-icons/fa6";

// RxHamburgerMenu
import { NavLink, Link } from "react-router-dom";


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

const Header = () => {
  const [scrollTop, setScrollTop] = React.useState(0);
  console.log("Scroll " + scrollTop)

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

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
  }, [])

  return (
    <div className={` ${scrollTop < 64 ? "" : "header__shrink"}`}>
      <header className="header" ref={headerRef}>
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
            </div>


            {/* Menu */}
            {/* ======= menu ======= */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <div
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    {item.display}
                  </div>
                ))}
              </div>
            </div>

            {/* ======== nav right icons ========= */}

            <div className="nav__right d-flex align-items-center gap-4">

              <span className="cart__icon" >
                <i class="ri-shopping-basket-line"><CiShoppingCart /></i>
                <span className="cart__badge">25</span>
              </span>

              {screenWidth < 984 ? (<span className="user">
                <i class="ri-user-line" onClick={toggleMenu}><FaAlignJustify /></i>
              </span>) : null}


              <span className="user">
                <i class="ri-user-line"><FaPowerOff /></i>
              </span>

            </div>
          </div>
        </Container>

      </header>

      
    </div>

  )

};

export default Header;
