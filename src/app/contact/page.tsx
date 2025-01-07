import React from 'react';
import Navbar from '../components/Navbar';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <section className="text-center p-10">
          <p className="text-lg text-gray-700">Have any questions? Feel free to reach out to us!</p>
          
          <form className="max-w-md mx-auto mt-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            ></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;

