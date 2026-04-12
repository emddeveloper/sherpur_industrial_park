import React from 'react';
import { Link } from 'react-router-dom';

export default function Properties() {
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
<img className="w-full h-full object-cover" data-alt="Modern high-tech industrial park facility with sleek metallic facades and clean asphalt roads under a bright daylight sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP9VeyvU6QKtOflAdnchcfe97-HCFdHSGOLqeU5jvM2xFBki59nGTRmULqIr1jOo3Yogm79yrmknD6auud4OLijTM-vPRY0lahK8et2ITl-X_NpJ17YAMitiVZsOe_7VTYAyqbMZ1dbSVHAH-MmnzIrpi3kbmsS29HAIdezfIT_wo1iAFJe5dfzXFBhySiVW5Y3s-HKjdQ1f0p2Bs6Cex5fDUgjBGQYJoiYTt_CoDoqhQrJynqxrAaxnD38yAXAQv7twOmaDLYijI" />
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
<p className="font-body text-sm text-secondary">Showing <span className="font-bold text-primary">12 Industrial Assets</span></p>
<div className="flex gap-2">
<button className="p-2 bg-surface-container-high rounded-lg text-primary"><span className="material-symbols-outlined" data-icon="grid_view">grid_view</span></button>
<button className="p-2 text-secondary hover:bg-surface-container transition-colors rounded-lg"><span className="material-symbols-outlined" data-icon="list">list</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-[0px_20px_40px_rgba(25,28,29,0.06)] transition-all duration-500 border border-transparent hover:border-outline-variant/10">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Interior of a massive modern industrial warehouse with high ceilings, steel beams, and natural light streaming through skylights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXZtqJGqaEaHyLQMYeARG_LT_7pPuguU9LKNLZunH-3MH0R5vfoqQoq8aOCkdR7TMoe8r2dRiPWZkq-0HmEDi2SBdRKVGtH2xP1yRvYR9EAa3Gnuwgo-S3YH0qePCXWPxmeyno0CkS2S6yTp_ZrVqihrBSXkNsE9txyYP_LWEp3_iR5kdVC2ZaQiAlPu-4jATABgApB-wChoHoI95_WUw3jwDC7wwbYxVIcGKC3w1h3Y2HNv_tWE4yxNUQaHwVZitkemDMNA7v8A0" />
<div className="absolute top-4 left-4">
<span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Available</span>
</div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline font-extrabold text-xl text-primary leading-tight mb-1">Heavy Engineering Shed A-12</h3>
<p className="font-body text-sm text-secondary">Sherpur Zone 4, Plot 882</p>
</div>
<div className="text-right">
<p className="font-label text-xs font-bold text-on-tertiary-container uppercase tracking-widest">Pricing</p>
<p className="font-headline font-bold text-lg text-primary">$4.2M</p>
</div>
</div>
<div className="flex items-center gap-6 mb-8 py-4 border-y border-outline-variant/10">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="square_foot">square_foot</span>
<span className="font-body text-sm font-semibold">45,000 sq ft</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="height">height</span>
<span className="font-body text-sm font-semibold">32 ft Clear</span>
</div>
</div>
<button className="w-full py-4 border-2 border-outline-variant/20 hover:border-primary hover:bg-primary hover:text-white text-primary font-headline font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-lg">
                                View Details
                            </button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-[0px_20px_40px_rgba(25,28,29,0.06)] transition-all duration-500 border border-transparent hover:border-outline-variant/10">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Wide aerial perspective of a leveled industrial land parcel ready for construction with boundary markers and clear utility access" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-81_bJr1E-TQFeZJagHL3XcOOVm2ndtL9THTa6KEjGP9CtlKZQQYiKjNtmhWi4trEkz2hVzNL_lJOPqqdEAgrQCTE6ZtOkPL1GaI_9EmGmtAoHFaMFDzEtRocdmNWdHKPd1tPYs_JKngoyPk4jYx09WKBxNXxvoUMYCfRMUk-CBadmtkdQivS1LmUE3Xo3n4CjV6enK0yTYzSd40oTiyBYhuStxvkWh2TjnOBpaK7uLU5Al8miSDE-hwTR7Ubx75iB1Vb4oLEmIU" />
<div className="absolute top-4 left-4">
<span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Available</span>
</div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline font-extrabold text-xl text-primary leading-tight mb-1">Prime Industrial Land - Plot 44</h3>
<p className="font-body text-sm text-secondary">Logistics Corridor South</p>
</div>
<div className="text-right">
<p className="font-label text-xs font-bold text-on-tertiary-container uppercase tracking-widest">Pricing</p>
<p className="font-headline font-bold text-lg text-primary">$1.8M / Acre</p>
</div>
</div>
<div className="flex items-center gap-6 mb-8 py-4 border-y border-outline-variant/10">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="landscape">landscape</span>
<span className="font-body text-sm font-semibold">12.5 Acres</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="bolt">bolt</span>
<span className="font-body text-sm font-semibold">11kV Ready</span>
</div>
</div>
<button className="w-full py-4 border-2 border-outline-variant/20 hover:border-primary hover:bg-primary hover:text-white text-primary font-headline font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-lg">
                                View Details
                            </button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-[0px_20px_40px_rgba(25,28,29,0.06)] transition-all duration-500 border border-transparent hover:border-outline-variant/10">
<div className="relative aspect-[4/3] overflow-hidden opacity-80">
<img className="w-full h-full object-cover" data-alt="Modern construction site of an industrial facility with steel framing and concrete foundation under a blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnQkl3KOr99NnXW7nC6Pha3-wcy2PBdxYNO9xDTmPdVgxaGL5CpSvnSQQXTSm1iiqc75NSIYdAKjEtS1U56EfsjMzzJaF_LNuPNLqSGINe91fJ_YJucDz0lsO2-t3OoQiij8eLT3qDItjxdHflmHHSwmYBsPVDkCiwZdjxYtkUW6UoHbWHc0P1rfSSfRVdYuG20FtzWzu_kusRVwlM9qNazvlSrFL9Oko1UQSc26j3XKTBkx44-VJlJ1l-nQu3B_IzsnoIbluEJGY" />
<div className="absolute inset-0 bg-primary/20 backdrop-grayscale"></div>
<div className="absolute top-4 left-4">
<span className="bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Sold</span>
</div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline font-extrabold text-xl text-primary leading-tight mb-1">Smart Warehousing Unit 09</h3>
<p className="font-body text-sm text-secondary">Tech-Manufacturing Hub</p>
</div>
<div className="text-right">
<p className="font-label text-xs font-bold text-secondary uppercase tracking-widest">Closed at</p>
<p className="font-headline font-bold text-lg text-secondary">$3.1M</p>
</div>
</div>
<div className="flex items-center gap-6 mb-8 py-4 border-y border-outline-variant/10">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="square_foot">square_foot</span>
<span className="font-body text-sm font-semibold">22,000 sq ft</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="dock">dock</span>
<span className="font-body text-sm font-semibold">4 Loading Bays</span>
</div>
</div>
<button className="w-full py-4 bg-surface-container text-secondary font-headline font-bold text-xs uppercase tracking-widest rounded-lg cursor-not-allowed" disabled="">
                                Property Unavailable
                            </button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-[0px_20px_40px_rgba(25,28,29,0.06)] transition-all duration-500 border border-transparent hover:border-outline-variant/10">
<div className="relative aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Large-scale logistical yard with modern paved surfaces and systematic drainage systems designed for heavy truck traffic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQzJeFk1azMi5Yedgrq8GRNXsag2tCbJW6UOhzLctzmSxQHxWi0Ztm3Z8YVGnQi2k7ZI4fDRnixwPcEvwmZR-rpMZzT8jh6xqhlKIz_ftNHlcgeJOxVxEoHWWIXuZiB4Ip_f5otr_3N4wS3EcPpho0QxeGoc1R4ft7wgU38qC1RwGI_xkI4Smi7C3K330nGQ6V3p6Y3o_3stgWOEhWJbZeqKTvGldMnE9QbRDTIntNo-dj6KZuzpF6OWeD62UJxMHT178hN9nzJZ0" />
<div className="absolute top-4 left-4">
<span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Available</span>
</div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline font-extrabold text-xl text-primary leading-tight mb-1">Cold Storage Ready Site</h3>
<p className="font-body text-sm text-secondary">Food Grade Industrial Zone</p>
</div>
<div className="text-right">
<p className="font-label text-xs font-bold text-on-tertiary-container uppercase tracking-widest">Lease/Mo</p>
<p className="font-headline font-bold text-lg text-primary">$18,500</p>
</div>
</div>
<div className="flex items-center gap-6 mb-8 py-4 border-y border-outline-variant/10">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="landscape">landscape</span>
<span className="font-body text-sm font-semibold">3.2 Acres</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="ac_unit">ac_unit</span>
<span className="font-body text-sm font-semibold">Cold Storage Ready</span>
</div>
</div>
<button className="w-full py-4 border-2 border-outline-variant/20 hover:border-primary hover:bg-primary hover:text-white text-primary font-headline font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-lg">
                                View Details
                            </button>
</div>
</div>
</div>

<div className="mt-16 flex justify-center items-center gap-4">
<button className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary text-white font-headline font-bold">1</button>
<button className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all font-headline font-bold">2</button>
<button className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all font-headline font-bold">3</button>
<button className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline-variant text-secondary hover:border-primary hover:text-primary transition-all">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>

        </main>
    );
}
