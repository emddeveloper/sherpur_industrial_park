import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
<header className="bg-[#f8f9fa]/80 dark:bg-[#002046]/80 backdrop-blur-xl docked full-width top-0 sticky z-50 tonal-shift-surface-container-low flat-no-shadows">
<nav className="flex justify-between items-center w-full px-8 py-6 max-w-[1440px] mx-auto">
<div className="text-2xl font-black text-[#002046] dark:text-white tracking-tighter">SHERPUR INDUSTRIAL</div>
<div className="hidden md:flex items-center space-x-8">
<Link className="font-['Manrope'] font-bold tracking-tight uppercase text-sm text-[#ff7627] font-extrabold border-b-2 border-[#ff7627] pb-1 hover:scale-105 active:scale-95 transition-transform" to="/properties">Properties</Link>
<Link className="font-['Manrope'] font-bold tracking-tight uppercase text-sm text-[#53606e] dark:text-slate-400 hover:text-[#002046] dark:hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 transition-transform" to="/about">Infrastructure</Link>
<Link className="font-['Manrope'] font-bold tracking-tight uppercase text-sm text-[#53606e] dark:text-slate-400 hover:text-[#002046] dark:hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 transition-transform" to="/location">Logistics</Link>
<Link className="font-['Manrope'] font-bold tracking-tight uppercase text-sm text-[#53606e] dark:text-slate-400 hover:text-[#002046] dark:hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 transition-transform" to="/about">About Us</Link>
</div>
<Link to="/contact" className="bg-[#ff7627] text-white px-6 py-2 rounded-lg font-headline font-bold uppercase tracking-wider text-xs hover:scale-105 active:scale-95 transition-transform">Enquire Now</Link>
</nav>
</header>
  );
}
