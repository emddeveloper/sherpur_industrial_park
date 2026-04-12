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
      <header className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 border-b ${isScrolled ? 'bg-white shadow-lg border-slate-200' : 'bg-white/90 backdrop-blur-md border-slate-100'}`}>
        <nav className={`flex justify-between items-center w-full px-8 max-w-[1440px] mx-auto transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ff7627]/20 blur-lg rounded-full group-hover:bg-[#ff7627]/40 transition-all"></div>
              <img 
                src="/logo_sherpur.jpg" 
                alt="Logo" 
                className={`relative z-10 transition-all duration-500 object-contain rounded-lg shadow-sm ${isScrolled ? 'h-9' : 'h-12'}`} 
              />
            </div>
            <span className={`font-black tracking-tighter transition-all duration-500 ${isScrolled ? 'text-lg text-[#002046]' : 'text-2xl text-[#002046] dark:text-white'} group-hover:text-[#ff7627]`}>
              SHERPUR <span className="hidden sm:inline">INDUSTRIAL PARK</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                className={`font-['Manrope'] font-black tracking-widest uppercase transition-all duration-300 relative group ${isScrolled ? 'text-[11px] text-[#002046]' : 'text-[12px] text-[#002046] dark:text-slate-300'} hover:text-[#ff7627] dark:hover:text-[#ff7627]`} 
                to={link.path}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#ff7627] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://wa.me/919831177236?text=Hello%2C%20I%20am%20interested%20in%20enquiring%20about%20Sherpur%20Industrial%20Park." target="_blank" rel="noopener noreferrer" className={`hidden md:block bg-[#ff7627] text-white rounded-xl font-headline font-black uppercase tracking-widest shadow-lg shadow-[#ff7627]/20 hover:scale-105 active:scale-95 transition-all ${isScrolled ? 'px-6 py-3 text-[10px]' : 'px-8 py-4 text-[11px]'}`}>
              Enquire Now
            </a>
          </div>
        </nav>
      </header>

      {/* Hamburger Icon */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed right-8 transition-all duration-500 z-50 flex items-center justify-center text-[#002046] dark:text-white hover:scale-110 active:scale-90 ${isScrolled ? 'top-3' : 'top-6'}`}
      >
        <span className="material-symbols-outlined text-4xl leading-none">{isOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Drawer - Premium Glass Design */}
      <div className={`fixed inset-0 z-50 transition-all duration-700 md:hidden ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-[#002046]/40 backdrop-blur-sm transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Content Container */}
        <div className={`absolute top-0 left-0 bottom-0 w-[85%] max-w-xs bg-white/60 dark:bg-[#002046]/60 backdrop-blur-3xl border-r border-white/10 shadow-2xl transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col p-10 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center gap-3 mb-16 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ff7627]/20 blur-md rounded-full"></div>
              <img src="/logo_sherpur.jpg" alt="Logo" className="relative z-10 h-10 object-contain rounded-lg" />
            </div>
            <span className="text-xl font-black text-[#002046] dark:text-white tracking-tighter leading-tight italic">SHERPUR <br/>INDUSTRIAL PARK</span>
          </div>
          
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                onClick={() => setIsOpen(false)}
                className="font-headline font-bold text-2xl text-[#53606e] dark:text-slate-200 hover:text-[#ff7627] transition-all flex items-center justify-between group" 
                to={link.path}
              >
                {link.name}
                <span className="material-symbols-outlined text-[#ff7627] opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0">arrow_forward</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-6">
            <div className="h-0.5 w-full bg-gradient-to-r from-[#ff7627]/40 to-transparent"></div>
            <a 
              href="https://wa.me/919831177236?text=Hello%2C%20I%20am%20interested%20in%20enquiring%20about%20Sherpur%20Industrial%20Park." 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#ff7627] text-white py-5 rounded-2xl font-headline font-bold uppercase tracking-widest text-sm shadow-2xl shadow-[#ff7627]/40 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}


