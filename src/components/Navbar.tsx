import LOGO from '../assets/logo.png';

import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={LOGO} alt="logo" className="mx-2 w-16 rounded-xl" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaTelegram />
        <FaGithub />
      </div>
    </nav>
  );
};

export default Navbar;
