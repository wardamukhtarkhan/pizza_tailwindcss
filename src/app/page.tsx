import React from 'react';
import Navbar from './components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/pizza-bg.jpg')" }}>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to Pizza Paradise</h1>
        <p className="text-xl text-white">Delicious pizzas made with love.</p>
      </div>
    </div>
  );
};

export default Home;
