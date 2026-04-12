import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const propertiesData = [
    {
        id: 1,
        title: "Heavy Engineering Shed A-12",
        location: "Sherpur Zone 4, Plot 882",
        price: "12.5 Cr",
        size: "45,000 sq ft",
        details: "32 ft Clear",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        status: "Available",
        type: "Shed",
        icon1: "square_foot",
        icon2: "height"
    },
    {
        id: 2,
        title: "Prime Industrial Land - Plot 44",
        location: "Logistics Corridor South",
        price: "4.5 Cr / Acre",
        size: "12.5 Acres",
        details: "11kV Ready",
        image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2109&auto=format&fit=crop",
        status: "Available",
        type: "Land",
        icon1: "landscape",
        icon2: "bolt"
    },
    {
        id: 3,
        title: "Smart Warehousing Unit 09",
        location: "Tech-Manufacturing Hub",
        price: "18 Cr",
        size: "22,000 sq ft",
        details: "4 Loading Bays",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1935&auto=format&fit=crop",
        status: "Sold",
        type: "Shed",
        icon1: "square_foot",
        icon2: "dock"
    },
    {
        id: 4,
        title: "Cold Storage Ready Site",
        location: "Food Grade Industrial Zone",
        price: "12 Lakh / Mo",
        size: "3.2 Acres",
        details: "Cold Storage Ready",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        status: "Available",
        type: "Land",
        icon1: "landscape",
        icon2: "ac_unit"
    },
    {
        id: 5,
        title: "Logistics Hub East",
        location: "Sherpur East Cluster",
        price: "25 Cr",
        size: "85,000 sq ft",
        details: "Multi-level loading",
        image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
        status: "Available",
        type: "Shed",
        icon1: "square_foot",
        icon2: "dock"
    },
    {
        id: 6,
        title: "Micro-Fabrication Unit B-4",
        location: "SME Innovation Zone",
        price: "3.5 Cr",
        size: "12,000 sq ft",
        details: "Clean Room Facility",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        status: "Available",
        type: "Shed",
        icon1: "square_foot",
        icon2: "biotech"
    },
    {
        id: 7,
        title: "Energy Intensive Zone Plot",
        location: "Power Corridor West",
        price: "6.2 Cr / Acre",
        size: "8 Acres",
        details: "33kV Substation Access",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
        status: "Available",
        type: "Land",
        icon1: "landscape",
        icon2: "bolt"
    },
    {
        id: 8,
        title: "FMCG Processing Center",
        location: "Agro-Industrial Belt",
        price: "15 Cr",
        size: "40,000 sq ft",
        details: "Automatic Drainage",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop",
        status: "Available",
        type: "Shed",
        icon1: "square_foot",
        icon2: "water_drop"
    },
    {
        id: 9,
        title: "Auto-Ancillary Park Lot",
        location: "Automobile Hub",
        price: "8 Cr",
        size: "5 Acres",
        details: "Corner Plot",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        status: "Available",
        type: "Land",
        icon1: "landscape",
        icon2: "straighten"
    },
    {
        id: 10,
        title: "E-Commerce Fulfillment Center",
        location: "Express Logistics Zone",
        price: "22 Cr",
        size: "110,000 sq ft",
        details: "Cross Docking",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop",
        status: "Sold",
        type: "Shed",
        icon1: "square_foot",
        icon2: "local_shipping"
    },
    {
        id: 11,
        title: "Pharma Grade Shed P-1",
        location: "Life Sciences Park",
        price: "9.5 Cr",
        size: "30,000 sq ft",
        details: "Temp Controlled",
        image: "https://plus.unsplash.com/premium_photo-1661882352848-f8007361e38b?q=80&w=2069&auto=format&fit=crop",
        status: "Available",
        type: "Shed",
        icon1: "square_foot",
        icon2: "thermostat"
    },
    {
        id: 12,
        title: "Textile Manufacturing Unit",
        location: "Export Processing Zone",
        price: "7 Cr",
        size: "25,000 sq ft",
        details: "High Power Load",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop",
        status: "Available",
        type: "Shed",
        icon1: "square_foot",
        icon2: "bolt"
    }
];

export default function Properties() {
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 4;
    
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = propertiesData.slice(indexOfFirstProperty, indexOfLastProperty);
    
    const totalPages = Math.ceil(propertiesData.length / propertiesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <main>
            <section className="relative min-h-[400px] md:h-[500px] flex items-center overflow-hidden bg-[#002046] rounded-[48px] mb-20">
<div className="absolute inset-0 z-0 opacity-40">
<img className="w-full h-full object-cover" data-alt="Modern high-tech industrial park facility" src="/hero2.jpg" />
</div>
<div className="absolute inset-0 bg-gradient-to-r from-[#002046] via-[#002046]/60 to-transparent"></div>
<div className="relative z-10 max-w-[1440px] mx-auto px-12 w-full">
<div className="max-w-3xl">
<span className="inline-block py-2 px-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-headline font-black text-[10px] tracking-[0.3em] uppercase mb-10 rounded-full">Inventory 2026</span>
<h1 className="text-white text-5xl md:text-8xl font-headline font-black tracking-tighter mb-8 leading-[0.9] italic uppercase">
                        Industrial <br/><span className="text-[#ff7627]">Portfolio</span>
                    </h1>
<p className="text-slate-300 text-xl font-body max-w-xl leading-relaxed">
                        Explore our audited inventory of 500 acres, featuring ready-to-build plots and Grade-A industrial sheds.
                    </p>
</div>
</div>
</section>

            <div className="flex flex-col lg:flex-row gap-12">
                <aside className="w-full lg:w-80 shrink-0">
<div className="bg-white/5 backdrop-blur-3xl rounded-[32px] p-10 sticky top-32 border border-white/10 shadow-2xl shadow-[#002046]/20">
<div className="flex items-center gap-4 mb-10">
<span className="material-symbols-outlined text-[#ff7627]" data-icon="filter_list">filter_list</span>
<h2 className="font-headline font-black text-xs text-primary uppercase tracking-[0.2em] italic">Refine Assets</h2>
</div>
<div className="space-y-10">
<div>
<label className="block font-headline font-black text-[10px] text-secondary uppercase tracking-[0.2em] mb-5">Asset Class</label>
<div className="grid grid-cols-2 gap-3">
<button className="py-3 px-4 text-[10px] font-black uppercase tracking-widest bg-[#ff7627] text-white rounded-xl shadow-lg shadow-[#ff7627]/20">Build</button>
<button className="py-3 px-4 text-[10px] font-black uppercase tracking-widest border border-white/10 bg-white/5 text-secondary rounded-xl hover:border-[#ff7627]/40 transition-all">Lease</button>
</div>
</div>
<div>
<label className="block font-headline font-black text-[10px] text-secondary uppercase tracking-[0.2em] mb-5">Facility Type</label>
<div className="space-y-3">
<label className="flex items-center gap-4 cursor-pointer group">
<div className="w-5 h-5 rounded border-2 border-white/10 bg-white/5 group-hover:border-[#ff7627] transition-all flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#ff7627] opacity-0 group-hover:opacity-100"></div>
</div>
<span className="font-black text-[10px] uppercase tracking-widest text-primary group-hover:text-[#ff7627] transition-colors">Industrial Shed</span>
</label>
<label className="flex items-center gap-4 cursor-pointer group">
<div className="w-5 h-5 rounded border-2 border-white/10 bg-white/5 group-hover:border-[#ff7627] transition-all flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#ff7627] opacity-0 group-hover:opacity-100"></div>
</div>
<span className="font-black text-[10px] uppercase tracking-widest text-primary group-hover:text-[#ff7627] transition-colors">Open Plot</span>
</label>
</div>
</div>
<button className="w-full bg-white/10 backdrop-blur-xl text-primary py-5 rounded-2xl font-headline font-black text-[10px] uppercase tracking-[0.3em] mt-6 border border-white/10 hover:bg-[#ff7627] hover:text-white hover:border-[#ff7627] transition-all">
                                Refresh Audit
                            </button>
</div>
</div>
</aside>

                <div className="flex-1">
                    <div className="flex justify-between items-center mb-10">
                        <p className="font-body text-sm text-secondary">Showing <span className="font-bold text-primary">{propertiesData.length} Industrial Assets</span></p>
                        <div className="flex gap-2">
                            <button className="p-2 bg-surface-container-high rounded-lg text-primary"><span className="material-symbols-outlined" data-icon="grid_view">grid_view</span></button>
                            <button className="p-2 text-secondary hover:bg-surface-container transition-colors rounded-lg"><span className="material-symbols-outlined" data-icon="list">list</span></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
{currentProperties.map((property) => (
<div key={property.id} className="group bg-white/5 backdrop-blur-xl rounded-[40px] overflow-hidden hover:shadow-2xl hover:shadow-[#002046]/20 transition-all duration-700 border border-white/10 hover:border-[#ff7627]/40 relative overflow-hidden">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ff7627]/5 blur-[80px] group-hover:bg-[#ff7627]/10 transition-all"></div>
<div className="relative aspect-[16/11] overflow-hidden">
<img className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${property.status === 'Sold' ? 'opacity-40 grayscale' : ''}`} src={property.image} alt={property.title} />
<div className="absolute top-6 left-6">
<span className={`text-[10px] font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full shadow-2xl ${property.status === 'Available' ? 'bg-[#ff7627] text-white' : 'bg-[#002046] text-slate-400'}`}>
{property.status}
</span>
</div>
</div>
<div className="p-10">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="font-headline font-black text-2xl text-primary leading-tight mb-2 uppercase italic tracking-tighter group-hover:text-[#ff7627] transition-colors">{property.title}</h3>
<p className="font-body text-[10px] font-black uppercase tracking-widest text-[#002046]/40">{property.location}</p>
</div>
<div className="text-right">
<p className="font-headline font-black text-xs text-secondary uppercase tracking-widest mb-1 italic">₹{property.price}</p>
</div>
</div>
<div className="flex items-center gap-8 mb-10 py-6 border-y border-white/10">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#ff7627] text-lg">{property.icon1}</span>
<span className="font-black text-[10px] uppercase tracking-widest text-primary">{property.size}</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#ff7627] text-lg">{property.icon2}</span>
<span className="font-black text-[10px] uppercase tracking-widest text-primary">{property.details}</span>
</div>
</div>
{property.status === 'Available' ? (
<Link to={`/properties/${property.id}`} className="flex items-center justify-between w-full py-6 border-t border-outline-variant/30 group/link">
<span className="font-headline font-black text-[10px] uppercase tracking-[0.2em] text-primary">Technical Specs</span>
<span className="material-symbols-outlined text-primary group-hover/link:translate-x-2 transition-transform">arrow_right_alt</span>
</Link>
) : (
<div className="py-6 border-t border-white/5 opacity-40">
<span className="font-headline font-black text-[10px] uppercase tracking-[0.2em] text-secondary">Asset Reserved</span>
</div>
)}
</div>
</div>
))}
</div>

                    {/* Pagination */}
                    <div className="mt-16 flex justify-center items-center gap-4">
                        <button 
                            onClick={() => paginate(Math.max(1, currentPage - 1))}
                            className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            disabled={currentPage === 1}
                        >
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button 
                                key={i + 1}
                                onClick={() => paginate(i + 1)}
                                className={`w-12 h-12 flex items-center justify-center rounded-lg font-headline font-bold transition-all ${currentPage === i + 1 ? 'bg-primary text-white' : 'border border-outline-variant text-secondary hover:border-primary hover:text-primary'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button 
                            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                            className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            disabled={currentPage === totalPages}
                        >
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

