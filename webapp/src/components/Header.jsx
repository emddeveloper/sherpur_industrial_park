import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Logistics', path: '/location' },
    { name: 'Success Stories', path: '/stories' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full bg-white/95 dark:bg-[#002046]/95 backdrop-blur-md shadow-lg border-b border-gray-200/10 transition-all duration-300">
        <nav className={`flex justify-between items-center w-full px-8 max-w-[1440px] mx-auto transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/logo_sherpur.jpg" 
              alt="Logo" 
              className={`transition-all duration-300 object-contain rounded ${isScrolled ? 'h-8' : 'h-10'}`} 
            />
            <span className={`font-black text-[#002046] dark:text-white tracking-tighter transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'} group-hover:text-[#ff7627]`}>
              SHERPUR INDUSTRIAL PARK
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                className={`font-['Manrope'] font-bold tracking-tight uppercase text-[#53606e] dark:text-slate-200 hover:text-[#ff7627] dark:hover:text-[#ff7627] transition-all duration-300 ${isScrolled ? 'text-[10px]' : 'text-[11px]'}`} 
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link to="/contact" className={`hidden md:block bg-[#ff7627] text-white rounded-lg font-headline font-bold uppercase tracking-wider hover:scale-105 active:scale-90 transition-all ${isScrolled ? 'px-4 py-1.5 text-[9px]' : 'px-5 py-2 text-[10px]'}`}>
            Enquire Now
          </Link>
        </nav>
      </header>

      {/* Hamburger Icon - Fixed at top right with transparent background */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed right-8 transition-all duration-300 z-50 flex items-center justify-center text-[#002046] dark:text-white ${isScrolled ? 'top-4' : 'top-7'}`}
      >
        <span className="material-symbols-outlined text-4xl">{isOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Drawer - Left to Right */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 md:hidden ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Content Container */}
        <div className={`absolute top-0 left-0 bottom-0 w-[85%] max-w-xs bg-white dark:bg-[#002046] shadow-2xl transition-transform duration-500 ease-out flex flex-col p-10 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center gap-2 mb-12">
            <img src="/logo_sherpur.jpg" alt="Logo" className="h-10 object-contain rounded" />
            <span className="text-xl font-black text-[#002046] dark:text-white tracking-tighter">SHERPUR INDUSTRIAL PARK</span>
          </div>
          
          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                onClick={() => setIsOpen(false)}
                className="font-headline font-bold text-xl text-[#53606e] dark:text-slate-300 hover:text-[#ff7627] transition-colors" 
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#ff7627] text-white py-5 rounded-2xl font-headline font-bold uppercase tracking-widest text-sm shadow-xl shadow-[#ff7627]/30"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


