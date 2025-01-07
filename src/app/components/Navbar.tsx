import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 shadow p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/" className="text-blue-500 hover:underline">Home
          </Link>
        </li>
        <li>
          <Link href="/menu" className="text-blue-500 hover:underline">Menu
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-blue-500 hover:underline">About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-blue-500 hover:underline">Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
