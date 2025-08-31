import React, { useState } from 'react'
// import { Connect } from 'react-redux'
import Container from 'react-bootstrap/Container';



import "./navbar.scss"
import Nav from './Nav';
import { changeTabActive } from '../redux/active';

const Navbar = ({activeTab}) => {
    alert(activeTab)
    const [listNav] = useState(['Home', 'About', 'Work', 'Project', 'Contact']);
    return (
        <div className='navbar'>
            {/* Sidebar */}
            <div className="logo">
                <a href="/karthik_portfolio/">
                    <span>Karthik</span>
                    <span className='navtitle'>.</span>
                </a>
            </div>
            <div className="navigation">
                {/* <Nav /> */}
                <nav>
                    {
                        listNav.map((value, key) => (
                            <span key={key} className=''>{value}</span>
                        ))
                    }
                </nav>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
})

export default Navbar