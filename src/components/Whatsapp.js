import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "+1234567890"; // Replace with your WhatsApp number
  const message = "Hello, I'm interested in your products!"; // Optional preset message

  const handleClick = () => {
    const phoneNumber = "+1234567890"; // Replace with your WhatsApp number
    const message = "Hello, I'm interested in your products!"; // Optional preset message
  
    const mobileLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    const webLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    // Attempt to open the WhatsApp app directly
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
      window.location.href = mobileLink;
    } else {
      // Fallback to the web version for non-mobile devices or if the app is not installed
      window.open(webLink, '_blank');
    }
  };
  

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-6 h-6"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.11 1.61 5.92L.04 24l6.3-1.65C8.56 23.45 10.24 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm6.03 17.94c-.28.79-1.6 1.54-2.23 1.63-.6.09-1.09.28-3.65-.78-3.09-1.29-5.06-4.46-5.22-4.67-.15-.21-1.24-1.63-1.24-3.11s.79-2.19 1.08-2.5c.28-.31.62-.39.82-.39.2 0 .4.01.57.02.18.01.44-.07.69.53.25.6.86 2.07.93 2.22.08.14.13.3.03.49-.1.19-.15.3-.28.45-.14.14-.29.32-.41.43-.14.14-.3.29-.13.57.17.28.75 1.24 1.6 2.01 1.1.98 2.03 1.29 2.31 1.43.29.14.46.12.63-.08.17-.21.73-.85.93-1.14.2-.28.39-.23.66-.14.27.09 1.72.81 2.02.95.3.14.5.21.57.33.07.12.07.76-.21 1.54z"/>
      </svg>
    </button>
  );
};

export default WhatsAppButton;
