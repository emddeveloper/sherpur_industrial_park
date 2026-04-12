import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#002046] w-full border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full blueprint-grid"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 px-12 py-20 max-w-[1440px] mx-auto relative z-10">
        <div className="max-w-sm">
          <div className="text-xl font-black text-white mb-4 uppercase tracking-tighter font-headline">
            SHERPUR INDUSTRIAL PARK
          </div>
          <p className="font-['Inter'] text-xs font-medium tracking-widest uppercase text-slate-400 leading-relaxed">
            © 2026 SHERPUR INDUSTRIAL PARK. PRECISION ENGINEERED INFRASTRUCTURE.
          </p>
          <p className="font-['Inter'] text-[9px] font-bold tracking-[0.2em] uppercase text-slate-500 mt-2">
            Designed & Maintained by <a href="https://saypinfotech.com" target="_blank" rel="noopener noreferrer" className="text-[#ff7627] hover:underline">SAYP INFOTECH</a>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex flex-col gap-4">
            <span className="font-['Inter'] text-xs font-black tracking-widest uppercase text-white">Legal</span>
            <a className="font-['Inter'] text-xs font-medium tracking-widest uppercase text-slate-400 hover:text-white underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100" href="#">Leasing Terms</a>
            <a className="font-['Inter'] text-xs font-medium tracking-widest uppercase text-slate-400 hover:text-white underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-['Inter'] text-xs font-black tracking-widest uppercase text-white">Compliance</span>
            <a className="font-['Inter'] text-xs font-medium tracking-widest uppercase text-slate-400 hover:text-white underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100" href="#">Environmental Compliance</a>
            <a className="font-['Inter'] text-xs font-medium tracking-widest uppercase text-slate-400 hover:text-white underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100" href="#">Site Map</a>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#ff7627] hover:border-[#ff7627] transition-all cursor-pointer">
            <span className="material-symbols-outlined text-sm" data-icon="public">public</span>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#ff7627] hover:border-[#ff7627] transition-all cursor-pointer">
            <span className="material-symbols-outlined text-sm" data-icon="mail">mail</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
