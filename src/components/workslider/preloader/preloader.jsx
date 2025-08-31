import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';  // Ensure this is imported

import './preloader.scss'; // Assuming you have additional custom styles in this SCSS file

const Loader = () => {
    return (
        <div className="loader-container">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#1ed5e7"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}   // You can customize wrapper styles if needed
                wrapperClass=""     // You can add a class name here if needed
                visible={true}
            />
        </div>
    );
};

export default Loader;
