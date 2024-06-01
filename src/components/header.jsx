import { useState } from "react";
import React from "react";
import "./header.css";

const Header1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img className="logo" src={require('../images/logo.png')} alt="LOGO" />
                <div className="navbar-logo">SmartFields</div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
            <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Header1;
