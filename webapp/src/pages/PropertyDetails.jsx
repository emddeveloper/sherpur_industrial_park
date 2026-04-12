import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
        icon2: "height",
        power: "15 MVA",
        road: "30 Meters",
        water: "24/7 Direct",
        totalArea: "50,000 SQM"
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
        icon2: "bolt",
        power: "11 kV",
        road: "25 Meters",
        water: "Borewell",
        totalArea: "12.5 Acres"
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
        icon2: "dock",
        power: "8 MVA",
        road: "20 Meters",
        water: "24/7 Direct",
        totalArea: "22,000 sq ft"
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
        icon2: "ac_unit",
        power: "5 MVA",
        road: "15 Meters",
        water: "Industrial Grade",
        totalArea: "3.2 Acres"
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
        icon2: "dock",
        power: "20 MVA",
        road: "40 Meters",
        water: "Dedicated Line",
        totalArea: "85,000 sq ft"
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
        icon2: "biotech",
        power: "3 MVA",
        road: "12 Meters",
        water: "Filtered",
        totalArea: "12,000 sq ft"
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
        icon2: "bolt",
        power: "33 kV",
        road: "30 Meters",
        water: "High Capacity",
        totalArea: "8 Acres"
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
        icon2: "water_drop",
        power: "10 MVA",
        road: "20 Meters",
        water: "Food Grade",
        totalArea: "40,000 sq ft"
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
        icon2: "straighten",
        power: "5 MVA",
        road: "18 Meters",
        water: "Direct",
        totalArea: "5 Acres"
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
        icon2: "local_shipping",
        power: "15 MVA",
        road: "45 Meters",
        water: "24/7",
        totalArea: "110,000 sq ft"
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
        icon2: "thermostat",
        power: "12 MVA",
        road: "20 Meters",
        water: "Ultra Pure",
        totalArea: "30,000 sq ft"
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
        icon2: "bolt",
        power: "18 MVA",
        road: "20 Meters",
        water: "Direct",
        totalArea: "25,000 sq ft"
    }
];

export default function PropertyDetails() {
    const { id } = useParams();
    const property = propertiesData.find(p => p.id === parseInt(id)) || propertiesData[0];

    return (
        <main>
            <div className="mb-8">
                <div className="flex items-center gap-2 text-on-secondary-container text-xs font-medium uppercase tracking-widest mb-4">
                    <Link to="/properties">Properties</Link>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-on-tertiary-container">{property.title}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-2">{property.title}</h1>
                        <div className="flex items-center gap-2 text-secondary">
                            <span className="material-symbols-outlined text-on-tertiary-container">location_on</span>
                            <span className="font-medium">{property.location}</span>
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl border-b-4 border-on-tertiary-container shadow-sm flex flex-col items-end">
                        <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">Starting From</span>
                        <span className="font-headline text-3xl font-black text-primary">₹{property.price}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <div className="md:col-span-3 aspect-[16/9] relative overflow-hidden rounded-xl">
                    <img className="w-full h-full object-cover" src={property.image} alt={property.title} />
                    <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-primary text-white text-[10px] font-bold uppercase px-3 py-1 rounded tracking-widest">{property.status}</span>
                        <span className="bg-white/90 backdrop-blur text-primary text-[10px] font-bold uppercase px-3 py-1 rounded tracking-widest">Premium Lot</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                    <div className="aspect-square rounded-xl overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="alt" />
                    </div>
                    <div className="aspect-square rounded-xl overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop" alt="alt" />
                    </div>
                    <div className="hidden md:block aspect-square rounded-xl overflow-hidden relative">
                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" alt="alt" />
                        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center cursor-pointer group">
                            <span className="text-white font-bold text-sm uppercase tracking-widest group-hover:scale-110 transition-transform">+12 Photos</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-primary mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-on-tertiary-container"></span>
                            Key Specifications
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-outline-variant/20 rounded-xl overflow-hidden border border-outline-variant/10">
                            <div className="bg-surface-container-lowest p-6 flex flex-col gap-2">
                                <span className="material-symbols-outlined text-on-tertiary-container">square_foot</span>
                                <span className="text-[10px] uppercase font-bold text-secondary tracking-widest">Total Area</span>
                                <span className="font-headline font-bold text-lg text-primary">{property.totalArea}</span>
                            </div>
                            <div className="bg-surface-container-lowest p-6 flex flex-col gap-2">
                                <span className="material-symbols-outlined text-on-tertiary-container">bolt</span>
                                <span className="text-[10px] uppercase font-bold text-secondary tracking-widest">Power Capacity</span>
                                <span className="font-headline font-bold text-lg text-primary">{property.power}</span>
                            </div>
                            <div className="bg-surface-container-lowest p-6 flex flex-col gap-2">
                                <span className="material-symbols-outlined text-on-tertiary-container">add_road</span>
                                <span className="text-[10px] uppercase font-bold text-secondary tracking-widest">Road Width</span>
                                <span className="font-headline font-bold text-lg text-primary">{property.road}</span>
                            </div>
                            <div className="bg-surface-container-lowest p-6 flex flex-col gap-2">
                                <span className="material-symbols-outlined text-on-tertiary-container">water_drop</span>
                                <span className="text-[10px] uppercase font-bold text-secondary tracking-widest">Water Supply</span>
                                <span className="font-headline font-bold text-lg text-primary">{property.water}</span>
                            </div>
                        </div>
                    </section>

                    <section className="blueprint-grid p-8 rounded-2xl bg-surface-container-low">
                        <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-primary mb-8">Industrial Infrastructure</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {[
                                { title: "Pre-Leveled Soil", desc: "Grade A compaction ready for heavy machinery foundations." },
                                { title: "Fiber Optic Ready", desc: "High-speed redundant data lines pre-installed to plot boundary." },
                                { title: "Effluent Treatment", desc: "Centralized ETP connection for industrial chemical waste." },
                                { title: "24/7 Security", desc: "Gated perimeter with biometric access and drone surveillance." }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    <div>
                                        <p className="font-bold text-primary text-sm uppercase mb-1">{item.title}</p>
                                        <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="flex justify-between items-end mb-6">
                            <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-primary">Strategic Location</h3>
                            <span className="text-xs font-bold text-on-tertiary-container uppercase tracking-widest underline decoration-2 underline-offset-4 cursor-pointer">Get Directions</span>
                        </div>
                        <div className="w-full h-[400px] bg-surface-container rounded-xl overflow-hidden relative shadow-inner">
                            <img className="w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2109&auto=format&fit=crop" alt="map" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-on-tertiary-container rounded-full animate-ping absolute opacity-20"></div>
                                    <div className="w-12 h-12 bg-on-tertiary-container rounded-full flex items-center justify-center relative shadow-lg">
                                        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="space-y-6">
                    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden sticky top-32">
                        <div className="bg-surface-container-high px-8 py-6">
                            <span className="text-[10px] font-black uppercase text-secondary tracking-widest">Leasing Consultant</span>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container">
                                    <img className="w-full h-full object-cover" src="/featureImages14.jpg" alt="Marcus" />
                                </div>
                                <div>
                                    <h4 className="font-headline font-bold text-primary">Marcus Thornton</h4>
                                    <p className="text-xs text-secondary font-medium">Head of Industrial Sales</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <a href="tel:+919831177236" className="w-full flex items-center justify-center gap-3 bg-white border border-outline-variant py-3 rounded text-sm font-bold text-primary hover:bg-surface-container-low transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">call</span>
                                    +91 98311 77236
                                </a>
                                <a href="https://wa.me/919831177236" className="w-full flex items-center justify-center gap-3 bg-[#25D366] py-3 rounded text-sm font-bold text-white hover:opacity-90 transition-opacity">
                                    <span className="material-symbols-outlined text-[20px]">chat</span>
                                    WhatsApp Chat
                                </a>
                                <div className="pt-4 border-t border-outline-variant/30">
                                    <Link to="/contact" className="block w-full text-center bg-on-tertiary-container py-4 rounded text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-on-tertiary-container/20 hover:translate-y-[-2px] transition-transform">
                                        Schedule Site Visit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

