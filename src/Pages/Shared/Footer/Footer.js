import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
        <footer className='my-5 text-center'>
             <h2> All Rights Reserved By &copy; Ahsan Habib {year}</h2>
        </footer>
      )
};

export default Footer;
