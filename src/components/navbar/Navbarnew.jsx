import React, { useState, useEffect, useRef } from 'react';
import { BsListNested } from 'react-icons/bs';
import "./navbar.scss";

const Navbarnew = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Effect to handle clicks outside the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <a href="/karthik_portfolio/">
                        <span>Karthik</span>
                        <span className='navtitle'>.</span>
                    </a>
                </div>
                <div className="navigation">
                    <nav ref={menuRef}>
                        <ul className={isOpen ? "nav-link active" : "nav-link"}>
                            <li>
                                <a onClick={closeMenu} href="#">Home</a>
                            </li>
                            <li>
                                <a onClick={closeMenu} href="#about">About</a>
                            </li>
                            <li>
                                <a onClick={closeMenu} href="#work">Work</a>
                            </li>
                            <li>
                                <a onClick={closeMenu} href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a onClick={closeMenu} href="#contact">Contact</a>
                            </li>
                        </ul>
                        <div className="icon" onClick={toggleMenu}>
                            <BsListNested />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbarnew;
