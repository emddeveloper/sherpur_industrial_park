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
            <section className="mb-16 relative overflow-hidden bg-primary-container rounded-xl p-12 lg:p-20 flex flex-col md:flex-row items-center gap-12">
                <div className="relative z-10 w-full md:w-1/2">
                    <span className="inline-block py-1 px-3 bg-on-tertiary-container/10 text-on-tertiary-container font-label text-xs font-bold uppercase tracking-widest mb-6">Industrial Portfolio</span>
                    <h1 className="text-white text-5xl lg:text-7xl font-headline font-extrabold tracking-tight mb-6 leading-tight">
                        Browse Industrial <br/><span className="text-on-primary-container">Opportunities</span>
                    </h1>
                    <p className="text-on-primary-container text-lg max-w-md font-body leading-relaxed">
                        Precision-engineered plots and industrial sheds designed for large-scale manufacturing and global logistics hubs.
                    </p>
                </div>
                <div className="w-full md:w-1/2 h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl relative">
                    <img className="w-full h-full object-cover" data-alt="Modern high-tech industrial park facility" src="/hero2.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
            </section>

            <div className="flex flex-col lg:flex-row gap-12">
                <aside className="w-full lg:w-72 shrink-0">
                    <div className="bg-surface-container rounded-xl p-8 sticky top-32">
                        <div className="flex items-center gap-2 mb-8">
                            <span className="material-symbols-outlined text-primary" data-icon="filter_list">filter_list</span>
                            <h2 className="font-headline font-bold text-lg text-primary uppercase tracking-tight">Refine Search</h2>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <label className="block font-label text-xs font-bold text-secondary uppercase tracking-widest mb-4">Transaction Type</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button className="py-2 px-4 text-xs font-bold border-2 border-primary bg-primary text-white rounded-lg">Buy</button>
                                    <button className="py-2 px-4 text-xs font-bold border-2 border-outline-variant text-secondary hover:border-primary transition-colors rounded-lg">Rent</button>
                                </div>
                            </div>
                            <div>
                                <label className="block font-label text-xs font-bold text-secondary uppercase tracking-widest mb-4">Property Type</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                                        <span className="font-body text-sm text-on-surface group-hover:text-primary transition-colors">Industrial Shed</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                                        <span className="font-body text-sm text-on-surface group-hover:text-primary transition-colors">Open Land</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block font-label text-xs font-bold text-secondary uppercase tracking-widest mb-4">Size Range</label>
                                <select className="w-full bg-surface border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-sm font-body py-2">
                                    <option>All Sizes</option>
                                    <option>10,000 - 50,000 sq ft</option>
                                    <option>50,000 - 100,000 sq ft</option>
                                    <option>2 - 5 Acres</option>
                                    <option>5+ Acres</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-label text-xs font-bold text-secondary uppercase tracking-widest mb-4">Budget Range</label>
                                <div className="flex items-center gap-2">
                                    <input className="w-full bg-surface border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-sm font-body py-2" placeholder="Min" type="text" />
                                    <span className="text-outline">—</span>
                                    <input className="w-full bg-surface border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-sm font-body py-2" placeholder="Max" type="text" />
                                </div>
                            </div>
                            <button className="w-full bg-primary text-white py-4 rounded-lg font-headline font-bold text-xs uppercase tracking-[0.2em] mt-4 hover:shadow-xl transition-all">
                                Apply Filters
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {currentProperties.map((property) => (
                            <div key={property.id} className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-[0px_20px_40px_rgba(25,28,29,0.06)] transition-all duration-500 border border-transparent hover:border-outline-variant/10">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${property.status === 'Sold' ? 'opacity-80' : ''}`} src={property.image} alt={property.title} />
                                    {property.status === 'Sold' && <div className="absolute inset-0 bg-primary/20 backdrop-grayscale"></div>}
                                    <div className="absolute top-4 left-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${property.status === 'Available' ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
                                            {property.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-headline font-extrabold text-xl text-primary leading-tight mb-1">{property.title}</h3>
                                            <p className="font-body text-sm text-secondary">{property.location}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-label text-xs font-bold text-on-tertiary-container uppercase tracking-widest">{property.status === 'Sold' ? 'Closed at' : 'Pricing'}</p>
                                            <p className={`font-headline font-bold text-lg ${property.status === 'Available' ? 'text-primary' : 'text-secondary'}`}>₹{property.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 mb-8 py-4 border-y border-outline-variant/10">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-secondary text-lg">{property.icon1}</span>
                                            <span className="font-body text-sm font-semibold">{property.size}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-secondary text-lg">{property.icon2}</span>
                                            <span className="font-body text-sm font-semibold">{property.details}</span>
                                        </div>
                                    </div>
                                    {property.status === 'Available' ? (
                                        <Link to={`/properties/${property.id}`} className="block w-full text-center py-4 border-2 border-outline-variant/20 hover:border-primary hover:bg-primary hover:text-white text-primary font-headline font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-lg">
                                            View Details
                                        </Link>
                                    ) : (
                                        <button className="w-full py-4 bg-surface-container text-secondary font-headline font-bold text-xs uppercase tracking-widest rounded-lg cursor-not-allowed" disabled>
                                            Property Unavailable
                                        </button>
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

