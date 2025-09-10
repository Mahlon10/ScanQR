'use client';

import React, { useState } from 'react';
import ThemeToggle from '../components/button';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function HeroBanner() {
  const [isDark, setIsDark] = useState(false); // <- moved here

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: 'url("https://i.postimg.cc/kGRpc9kL/site-professional-mobile.jpg")' }}
    >
      {/*contact info */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-left text-white text-sm space-y-1">
        <div className="flex items-center space-x-2">
          <MdEmail className="text-lg" />
          <span>{isDark ? 'info@acquaproperties.com' : 'acquahdennis5@gmail.com'}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MdPhone className="text-lg" />
          <span>{isDark ? '+233504766580' : '+233554598131'}</span>
        </div>
      </div>

      {/* Theme toggle */}
      <div className="flex flex-col items-center justify-center">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
      <div className="absolute bottom-22 left-1/2 transform -translate-x-1/2 text-center text-white">
        <div className="font-bold text-xl">Dennis Acquah</div>
        <div className="text-base">Acquah Properties</div>
      </div>
    </div>
  );
}
