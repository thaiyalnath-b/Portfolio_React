import React, { useState, useEffect } from 'react';
import Collapse from 'bootstrap/js/dist/collapse';
import './Navbar.css'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const closeMenu = () => {
        const navbar = document.getElementById("navbarNav");
        if (!navbar) return;

        let bsCollapse = Collapse.getInstance(navbar);

        if (!bsCollapse) {
            bsCollapse = new Collapse(navbar, { toggle: false });
        }

        bsCollapse.hide();
    };

    return (
        <nav className={`navbar navbar-expand-md fixed-top navbar-style ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container-fluid px-4 px-lg-5">
                <a className="navbar-brand logo" href="#home">
                    Thaiyalnath
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                            <li className="nav-item" key={item}>
                                <a className="nav-link nav-custom" href={`#${item}`} onClick={closeMenu}>
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;