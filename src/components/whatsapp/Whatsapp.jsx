import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Whatsapp.scss'; // Opti

const Whatsapp = () => {
     const phoneNumber = "9944658008"; // Add your number with country code (no +)
  const message = "Hello, I'm Karthikeyan V this my portfolio";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
       <div className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp size={30} color="#fff" />
    </div>

  )
}

export default Whatsapp