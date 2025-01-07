
import React from 'react';
import Navbar from '../components/Navbar';

const Menu: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <img src="/pizza1.jpg" alt="Margherita" className="w-full mb-2" />
            <h2 className="text-xl font-semibold">Margherita</h2>
            <p>Classic cheese and tomato pizza.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img src="/pizza2.jpg" alt="Pepperoni" className="w-full mb-2" />
            <h2 className="text-xl font-semibold">Pepperoni</h2>
            <p>Spicy pepperoni with mozzarella cheese.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img src="/pizza3.jpg" alt="Veggie" className="w-full mb-2" />
            <h2 className="text-xl font-semibold">Veggie</h2>
            <p>Loaded with fresh vegetables and mozzarella.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img src="/pizza4.jpg" alt="BBQ Chicken" className="w-full mb-2" />
            <h2 className="text-xl font-semibold">BBQ Chicken</h2>
            <p>Grilled chicken with BBQ sauce and onions.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img src="/pizza5.jpg" alt="Hawaiian" className="w-full mb-2" />
            <h2 className="text-xl font-semibold">Hawaiian</h2>
            <p>Ham and pineapple with mozzarella cheese.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img src="/pizza6.jpg" alt="Meat Lovers" className="w-full mb-2" />
            <h2 className="text-xl font-semibold">Meat Lovers</h2>
            <p>A hearty mix of pepperoni, sausage, and bacon.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
