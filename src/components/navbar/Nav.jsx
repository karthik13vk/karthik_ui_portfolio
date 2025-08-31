"use Client";
// import React from 'react'
import * as React from "react";
import { usePathname } from "next/navigation";

import "./navbar.scss"


const items = ["home","about","project", "services","contact",
    // {
    //     name: "home",
    //     path: "/"
    // },
    // {
    //     name: "about",
    //     path: "/about"
    // },
    // {
    //     name: "project",
    //     path: "/project"
    // },
    // {
    //     name: "services",
    //     path: "/services"
    // },
    // {
    //     name: "contact",
    //     path: "/contact"
    // },
]

const Nav = () => {
    const pathname = usePathname();
    // console.log(pathname)
    return (
        <div className="right-nav ">
            <div className="hidden-md1">
                <nav className="navlink">
                    {items.map((item) => {
                        {/* return ( */ }
                        <a
                            href={`#${item}`} // Corrected here
                            key={item}

                        >
                            {item}
                            {/* {link.name} */}
                        </a>
                        {/* ); */ }
                    })}
                </nav>

            </div>
            {/* <div className="hidden-lg">
                <a href="/contact">
                    <button>Tab</button>
                </a>
                <a href="#">
                    Services
                </a>
                <a href="#">
                    Project
                </a>
                <a href="#">
                    Contact Us
                </a>
            </div> */}
        </div>
    )
}

export default Nav