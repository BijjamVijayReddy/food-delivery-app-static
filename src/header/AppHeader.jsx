import React, { useRef, useState, useEffect } from "react";
import "./AppHeader.css";


const navtitles = [
    {
        display: "Home",
        id: 0,
    },
    {
        display: "About",
        id: 1,
    },
    {
        display: "Foods",
        id: 2,
    },
    {
        display: "Services",
        id: 3,
    },
   
];

const AppHeader = () => {

    const [scrollTop, setScrollTop] = useState(0);
    const headerRef = useRef(null);

    // Sticky AppHeader
    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);

            if (window.scrollY > 70) {
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

    return (
        <div>
            <div className={`nav-Header ${scrollTop > 70 ? "fixed" : ""}`} ref={headerRef}>
                {navtitles.map((ele, key) => (
                    <p key={ele.id} className="nav-Header-name">
                        {ele.display}
                    </p>
                ))}
            </div>
            <div className="data-section">
                <h2>Welcome to Our Website</h2>
                <ul>
                    <li>John Doe</li>
                    <li>Jane Smith</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>
                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                    <li>Michael Johnson</li>

                </ul>
            </div>
        </div>
    );
};

export default AppHeader;

