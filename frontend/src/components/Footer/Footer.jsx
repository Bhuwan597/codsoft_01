import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-yellow-200 font-bold">
      <div class="flex flex-col items-center gap-6 md:flex-row md:justify-between mx-10 min-h-32">
        <div className="mt-4 md:mt-0">&copy; 2024 - All rights reserved</div>
        <div class="flex gap-4 p-2 rounded-md social-wrapper">
          <a className="text-2xl text-blue-500" href=""><FaFacebook/></a>
          <a className="text-2xl text-red-500" href=""><FaInstagram/></a>
          <a className="text-2xl text-green-500" href=""><FaWhatsapp/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
