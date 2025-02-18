import React from 'react';
import { useState } from 'react';
import { useContent } from '../utils';

import LOGO from '../assets/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';

import { motion } from 'framer-motion';

const languages: Array<{ code: string; name: string; flag: string }> =
  [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uz', name: "O'zbek", flag: '🇺🇿' },
    { code: 'sp', name: 'Español', flag: '🇪🇸' },
  ];

const Navbar: React.FC = () => {
  const { selectedLang, changeLanguage } = useContent();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={LOGO} alt="logo" className="mx-2 w-16 rounded-xl" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="hover:text-blue-300" />
        <FaTelegram className="hover:text-blue-300" />
        <FaGithub className="hover:text-blue-300" />

        <div className="relative">
          <button
            className="flex items-center gap-2 text-lg font-semibold border rounded-lg px-3 py-1 hover:bg-blue-200"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>
              {
                languages.find((lang) => lang.code === selectedLang)
                  ?.flag
              }
            </span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-24 rounded-lg border bg-white shadow-lg">
              {languages.map((lang) => (
                <motion.button
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.3 },
                  }}
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsDropdownOpen(false);
                  }}
                  className="flex w-full items-center justify-center px-4 py-2 hover:rounded-lg hover:bg-gray-100"
                >
                  <span>{lang.flag}</span>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
