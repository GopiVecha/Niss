import React from 'react';
import { Link } from 'react-router-dom';

const SideNavBar = () => {
  return (
    <nav className="bg-gray-800 text-white w-64 p-4">
      <ul>
        <li className="mb-4">
          <Link to="/" className="hover:text-gray-300">Single</Link>
        </li>
        <li className="mb-4">
          <Link to="/multi" className="hover:text-gray-300">Multi</Link>
        </li>
        <li className="mb-4">
          <Link to="/admin" className="hover:text-gray-300">Admin Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavBar;
