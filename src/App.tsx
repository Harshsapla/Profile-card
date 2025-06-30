import React, { useState } from 'react';
import { Moon, Sun, MapPin, Mail, Github, Linkedin } from 'lucide-react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 flex items-center justify-center p-4 ${
      isDarkTheme 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      <div className={`profile-card max-w-md w-full transform transition-all duration-500 hover:scale-105 ${
        isDarkTheme ? 'dark-theme' : ''
      }`}>
        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto relative">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
            <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-4 transition-colors duration-300 ${
              isDarkTheme 
                ? 'bg-green-400 border-gray-800' 
                : 'bg-green-500 border-white'
            }`}></div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="text-center mb-6">
          <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
            isDarkTheme ? 'text-white' : 'text-gray-800'
          }`}>
            Alexandra Chen
          </h2>
          
          <div className={`flex items-center justify-center gap-1 mb-4 transition-colors duration-300 ${
            isDarkTheme ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <MapPin size={16} />
            <span className="text-sm">San Francisco, CA</span>
          </div>

          <p className={`leading-relaxed transition-colors duration-300 ${
            isDarkTheme ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Senior Product Designer with a passion for creating beautiful, user-centered digital experiences. 
            I love turning complex problems into simple, elegant solutions that delight users.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isDarkTheme 
              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
          }`}>
            <Mail size={20} />
          </a>
          <a href="#" className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isDarkTheme 
              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
          }`}>
            <Github size={20} />
          </a>
          <a href="#" className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isDarkTheme 
              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
          }`}>
            <Linkedin size={20} />
          </a>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 ${
            isDarkTheme
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
          }`}
        >
          {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default App;