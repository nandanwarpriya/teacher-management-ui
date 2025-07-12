import React from 'react';
import { FaUserCircle, FaCog } from 'react-icons/fa';

const Header: React.FC = () => (
  <header className="bg-red-600 text-white px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
    {/* App Title */}
    <div className="text-lg sm:text-xl font-semibold text-center sm:text-left">
      MyTeacherAPP
    </div>

    {/* User Info */}
    <div className="flex items-center gap-3 text-sm sm:text-base">
      <span className="hidden xs:inline">Richmond Hill</span>
      <FaUserCircle className="text-xl sm:text-2xl" />
      <FaCog className="text-xl sm:text-2xl" />
    </div>
  </header>
);

export default Header;
