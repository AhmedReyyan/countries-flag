'use client'

import React, { useState, useEffect } from 'react';
import { Copy, Check, Moon, Sun, Zap, Image, Globe, Code } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [copied, setCopied] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const exampleURL = 'https://countries-flag-pi.vercel.app/US.svg';
  const exampleHTML = '<img src="https://countries-flag-pi.vercel.app/US.svg" width="32" height="20" alt="US Flag">';

  const flags = [
    { code: 'US', name: 'United States', color: '/us.svg' },
    { code: 'PK', name: 'Pakistan', color: '/pk.svg' },
    { code: 'IN', name: 'India', color: '/in.svg' }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant load times',
      description: 'Lightning-fast CDN delivery with global edge locations for optimal performance.'
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Crisp SVG quality at any size',
      description: 'Vector-based flags that look perfect at any resolution, from favicons to banners.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'No API keys or auth needed',
      description: 'Simple, direct URLs with no registration, rate limits, or authentication required.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Works in HTML, CSS, React, Vue, etc',
      description: 'Universal compatibility with any framework, library, or plain HTML/CSS.'
    }
  ];

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

      {/* Hero Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${
        darkMode ? 'from-gray-900 via-gray-800 to-gray-900' : 'from-white via-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent leading-tight">
              Countries Flag CDN — Free high-quality flags for any project
            </h1>
            <p className={`text-xl sm:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Serve crisp SVG country flags directly from our CDN. No keys, no limits, no CORS issues.
            </p>
          </div>

            {/* Flag Showcase */}

             <div 
              key={'ps'}
              className="flex flex-col items-center group my-4 mb-6 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${3 * 200}ms` }}
              >
              <div className="relative">
                <div 
                className={`w-40 h-25  rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 ${
                  darkMode ? 'border-gray-600' : 'border-gray-200'
                }`} 
                style={{ 
                  backgroundImage: `url(/ps.svg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-lg"></div>
                {/* <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                  {flag.code}
                </div> */}
                </div>
              </div>
              <span className={`mt-2 text-sm font-medium ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {'Palestine'}
              </span>
              </div>
            <div className={`flex justify-center items-center gap-8 mb-12 flex-wrap transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>


            {flags.map((flag, index) => (
              <div 
              key={flag.code}
              className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
              >
              <div className="relative">
                <div 
                className={`w-20 h-14 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 ${
                  darkMode ? 'border-gray-600' : 'border-gray-200'
                }`} 
                style={{ 
                  backgroundImage: `url(/${flag.code.toLowerCase()}.svg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-lg"></div>
                {/* <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                  {flag.code}
                </div> */}
                </div>
              </div>
              <span className={`mt-2 text-sm font-medium ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {flag.name}
              </span>
              </div>
            ))}
            </div>
          </div>
          </section>

          {/* How to Use Section */}
            <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center`}
            style={{
              backgroundImage: 'url(/world-map.svg)',
              backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
              // backgroundBlendMode: 'overlay',
            }}
            >
              <div className="max-w-4xl mx-auto">
                <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${
              darkMode ? 'text-white' : 'text-gray-900'
                }`}>
              How to use
                </h2>
                
                <div className={`rounded-2xl p-8 shadow-xl border transition-all duration-300 ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
              <div className="space-y-6">
                {/* URL Example */}
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  Example URL:
                </h3>
                <div className="relative">
                  <div className={`p-4 rounded-lg font-mono text-sm border-2 transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-900 border-gray-600 text-blue-400' 
                      : 'bg-gray-100 border-gray-300 text-blue-600'
                  }`}>
                    {exampleURL}
                  </div>
                  <button
                    onClick={() => copyToClipboard(exampleURL, 'url')}
                    className={`absolute right-2 top-2 p-2 rounded-md transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                    }`}
                  >
                    {copied === 'url' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* HTML Example */}
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  Example HTML code:
                </h3>
                <div className="relative">
                  <div className={`p-4 rounded-lg font-mono text-sm border-2 transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-900 border-gray-600 text-gray-300' 
                      : 'bg-gray-100 border-gray-300 text-gray-700'
                  }`}>
                    <pre className="whitespace-pre-wrap break-all">{exampleHTML}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(exampleHTML, 'html')}
                    className={`absolute right-2 top-2 p-2 rounded-md transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                    }`}
                  >
                    {copied === 'html' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-16 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Why choose our CDN?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
                    : 'bg-gray-50 border-gray-200 hover:bg-white hover:shadow-lg'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-full text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
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