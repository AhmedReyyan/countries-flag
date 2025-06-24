'use client'

import React, { useState, useEffect } from 'react';
import { Home, Search, Flag, AlertCircle, Moon, Sun, Globe, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigateHome = () => {
    // In a real app, this would use React Router or Next.js router
    window.location.href = '/';
  };

  const flagAnimations = Array.from({ length: 6 }, (_, i) => ({
    delay: i * 0.2,
    duration: 2 + (i * 0.3),
  }));

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent`}>
                Countries Flag CDN
              </span>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400' 
                  : 'border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main 404 Content */}
      <section className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${
        darkMode ? 'from-gray-900 via-gray-800 to-gray-900' : 'from-white via-gray-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Floating Flag Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {flagAnimations.map((anim, index) => (
              <div
                key={index}
                className="absolute animate-bounce opacity-20"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 60 + 10}%`,
                  animationDelay: `${anim.delay}s`,
                  animationDuration: `${anim.duration}s`,
                }}
              >
                <Flag className={`w-8 h-8 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`} />
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className={`relative z-10 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Large 404 */}
            <div className="mb-8">
              <div className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent leading-none">
                404
              </div>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                darkMode ? 'text-gray-700' : 'text-gray-200'
              } text-6xl sm:text-7xl lg:text-8xl font-bold opacity-30 -z-10`}>
                404
              </div>
            </div>

            {/* Error Icon */}
            <div className={`flex justify-center mb-6 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="p-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg">
                <AlertCircle className="w-12 h-12" />
              </div>
            </div>

            {/* Heading */}
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Oops! Flag not found
            </h1>

            {/* Description */}
            <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              The flag you're looking for seems to have sailed away. Don't worry though – we have plenty of other flags in our collection!
            </p>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button
                onClick={navigateHome}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Return Home</span>
              </button>
              
              <button
                onClick={() => window.history.back()}
                className={`group px-8 py-4 font-semibold rounded-full border-2 transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Go Back</span>
              </button>
            </div>

            {/* Helpful Links */}
            <div className={`mt-12 transform transition-all duration-1000 delay-1200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Or try one of these popular flags:
              </p>
              <div className="flex justify-center space-x-6 flex-wrap gap-y-4">
                {['US', 'GB', 'CA', 'AU', 'DE', 'FR'].map((code, index) => (
                  <button
                    key={code}
                    className={`group px-4 py-2 rounded-lg font-mono text-sm font-medium transition-all duration-300 hover:-translate-y-1 border ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400' 
                        : 'bg-gray-100 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                    }`}
                    style={{
                      animationDelay: `${1.4 + index * 0.1}s`
                    }}
                  >
                    <a href={`${code.toLocaleLowerCase()}.svg`}>
                    {code}.svg</a>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2025 Countries Flag CDN. Free for public use.
          </p>
        </div>
      </footer>
    </div>
  );
}