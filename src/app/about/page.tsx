import React from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl text-center">
          At Pizza Paradise, we are passionate about delivering the best pizza experience. Our pizzas are made with fresh ingredients and a lot of love.
        </p>
      </div>
    </div>
  );
};

export default About;
