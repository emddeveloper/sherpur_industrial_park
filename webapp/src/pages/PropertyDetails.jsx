import React from 'react';
import { Link } from 'react-router-dom';

export default function PropertyDetails() {
    return (
        <main>
            

<div className="mb-8">
<div className="flex items-center gap-2 text-on-secondary-container text-xs font-medium uppercase tracking-widest mb-4">
<span>Properties</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-tertiary-container">Plot 42-B Manufacturing Zone</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-2">Plot 42-B Manufacturing Zone</h1>
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-on-tertiary-container">location_on</span>
<span className="font-medium">Sector 4, Sherpur Industrial Park, Northern Corridor</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border-b-4 border-on-tertiary-container shadow-sm flex flex-col items-end">
<span className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">Starting From</span>
<span className="font-headline text-3xl font-black text-primary">$4.2M <span className="text-sm font-normal text-secondary">USD</span></span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
<div className="md:col-span-3 aspect-[16/9] relative overflow-hidden rounded-xl">
<img className="w-full h-full object-cover" data-alt="Wide shot of a modern clean industrial manufacturing facility with steel structural beams and expansive concrete flooring under bright daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd9z2iCkwwAyDWLOy0Z6eynQj5LrKzGJlpB6Ko5D39IX1Ky1Jmd1s_UepRXH6dxw-Tmrgo2HfR0TpIhutow5g2DUyZJ0iTTEz8Rj4vY77cgVo9X0R_CATWbM6GUWF2SJPMB-SFXRYmd0kkoQeVzxxgtpfjE_D0m6_QFd3LDD3LS7lWV3n4TzjfUW-v33skfvaBkVYTp59JhKitZxWQBdrpgUe_oMb3R2E7nSarxYm2cofigGI5T1cRiJpVIOIBJApMyJ09DcNVvn4" />
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-primary text-white text-[10px] font-bold uppercase px-3 py-1 rounded tracking-widest">Available</span>
<span className="bg-white/90 backdrop-blur text-primary text-[10px] font-bold uppercase px-3 py-1 rounded tracking-widest">Premium Lot</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-1 gap-4">
<div className="aspect-square rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="High angle view of organized industrial zone layout with wide paved roads and modern warehousing structures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpdNF4XNxeTa2XXOrBpBEIksgyg4jC8Nhkrch-Elww2bTMLfXvNIsIWvXCQj3bpR_92QC8fPr5ZM8IY_SIecFf8odgfkfc3CW5H3GW908hfmTfj699-X-fESRPVl6GDluCTUufzO58Cei1bSFosE-agRvw-PPI86_BfbnRIHH-Ai6lcSXivRa5-tB4cawlqb775t2yMztX0WhBxm4azp4NnVWl6Y0fkdElCcgrTs1fGieOzwAIkvAxDfmRF-QkOVtMFxin2o6XmTc" />
</div>
<div className="aspect-square rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up of high voltage electricity transformer and industrial power distribution infrastructure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4wKv7xIOoFwu_XvAjS-4zKaK6HBl9SnxD4fYIHFSATuIStXPyLcySdFJ1gczF25r6rVQo0DwTy4T8B6Ew_AW-Z7alDQzvNFT8GNscX7hkA48csc9pqX4_UZgXwM-Af7bUr4vLrPq6tTC9zgv6SWbTfnou_NPt1Jqla3rsvwRfdA9-N91CYr0TcR5CQHcQiRHrQ8OyV41c1d95ccPfR0aPNFjjCQHjOfpWKBW0W-Uhs0wCIKL2xS5zA2VMgJerf8ygLuOnxizGC1I" />
</div>
<div className="hidden md:block aspect-square rounded-xl overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Sunset view over an industrial park with heavy machinery and architectural steel frames" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYt6WJdaocMNHxBbL-FOrfF33Vx0QQXh1js4IR9IO5thStQvSxrLkB5iKySQgdcrUW2t1pGtZQ33fLgY5Jp1MHnAycTwBkh3uEWO0hm4ko1Ai4y5NiG2sFzYf2XITJNwc94d3kRwwv4nhEvFTkZRmiBVA8WztanAjWZUbRoCqb5r5RJQKLzS76bLZDzT6XnbcrahtbUQtS58OyT65k5DO5F83KzQJa7qgEVFGGFF0JjDJBu52PNcr2DSeqsVpntQZGkytgIYmDONQ" />
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
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="square_foot"></span>
<span className="text-[10px] uppercase font-bold text-secondary tracking-widest">Total Area</span>
<span className="font-headline font-bold text-lg text-primary">50,000 SQM</span>
</div>
<div className="bg-surface-container-lowest p-6 flex flex-col gap-2">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="bolt"></span>
<span className="text-[10px] uppercase font-bold text-secondary tracking-widest">Power Capacity</span>
<span className="font-headline font-bold text-lg text-primary">15 MVA</span>
</div>
<div className="bg-surface-container-lowest p-6 flex flex-col gap-2">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="add_road"></span>
<span className="text-[10px] uppercase font-bold text-secondary tracking-widest">Road Width</span>
<span className="font-headline font-bold text-lg text-primary">30 Meters</span>
</div>
<div className="bg-surface-container-lowest p-6 flex flex-col gap-2">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="water_drop"></span>
<span className="text-[10px] uppercase font-bold text-secondary tracking-widest">Water Supply</span>
<span className="font-headline font-bold text-lg text-primary">24/7 Direct</span>
</div>
</div>
</section>

<section className="blueprint-grid p-8 rounded-2xl bg-surface-container-low">
<h3 className="font-headline text-xl font-bold uppercase tracking-tight text-primary mb-8">Industrial Infrastructure</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary text-xl" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}></span>
<div>
<p className="font-bold text-primary text-sm uppercase mb-1">Pre-Leveled Soil</p>
<p className="text-secondary text-sm leading-relaxed">Grade A compaction ready for heavy machinery foundations.</p>
</div>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary text-xl" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}></span>
<div>
<p className="font-bold text-primary text-sm uppercase mb-1">Fiber Optic Ready</p>
<p className="text-secondary text-sm leading-relaxed">High-speed redundant data lines pre-installed to plot boundary.</p>
</div>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary text-xl" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}></span>
<div>
<p className="font-bold text-primary text-sm uppercase mb-1">Effluent Treatment</p>
<p className="text-secondary text-sm leading-relaxed">Centralized ETP connection for industrial chemical waste.</p>
</div>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary text-xl" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}></span>
<div>
<p className="font-bold text-primary text-sm uppercase mb-1">24/7 Security</p>
<p className="text-secondary text-sm leading-relaxed">Gated perimeter with biometric access and drone surveillance.</p>
</div>
</div>
</div>
</section>

<section>
<div className="flex justify-between items-end mb-6">
<h3 className="font-headline text-xl font-bold uppercase tracking-tight text-primary">Strategic Location</h3>
<span className="text-xs font-bold text-on-tertiary-container uppercase tracking-widest underline decoration-2 underline-offset-4">Get Directions</span>
</div>
<div className="w-full h-[400px] bg-surface-container rounded-xl overflow-hidden relative shadow-inner">
<img className="w-full h-full object-cover grayscale opacity-60" data-alt="Stylized overhead satellite view map of an industrial development zone with highlighted plot boundaries and main road access" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuuM5-az8CssGk9vYf0FJ_6LPqHe1vcGHM8xQ9H6hp3ZEEkn0oxu52d5ObvPbtOyCZ9yW8DFsDh9Bwl--WQJxAtmkKAEWiMQDgj2NLBpjLxCr3Ca6AKILNYJSknv3aLMIKyfneotEnQAd8ensFJnRGt_zldznAvRLqjOgAAPxYtw3Gm-1OyrskVqpixP2QgLOWRuLbqnEt8HJFBRtFIIG7Wzp8zRmzLSlQuTbocyDEJUNUtPGtxOo8Y3-Uf8XDhGE1Md1YkJAkuxY" />
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="w-12 h-12 bg-on-tertiary-container rounded-full animate-ping absolute opacity-20"></div>
<div className="w-12 h-12 bg-on-tertiary-container rounded-full flex items-center justify-center relative shadow-lg">
<span className="material-symbols-outlined text-white" data-icon="location_on" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}></span>
</div>
</div>
</div>
<div className="absolute bottom-6 left-6 bg-white p-4 rounded shadow-2xl border-l-4 border-primary max-w-xs">
<p className="text-[10px] font-black uppercase text-secondary mb-1">Logistics Hub Distance</p>
<p className="text-sm font-bold text-primary">12km to Port Authority</p>
<p className="text-sm font-bold text-primary">5km to Highway Interchange</p>
</div>
</div>
</section>

<section className="bg-primary p-10 rounded-2xl text-white">
<div className="max-w-xl">
<h3 className="font-headline text-2xl font-extrabold uppercase tracking-tight mb-2">Reserve Your Inspection</h3>
<p className="text-on-primary-container text-sm mb-8 leading-relaxed">Our technical consultants are available for site tours from Monday to Saturday. Provide your details for a priority briefing.</p>
<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest font-bold text-on-primary-container">Full Name</label>
<input className="w-full bg-transparent border-0 border-b-2 border-on-primary-container/30 focus:ring-0 focus:border-on-tertiary-container text-white placeholder:text-white/20 px-0 py-2" placeholder="John Doe" type="text" />
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest font-bold text-on-primary-container">Company Email</label>
<input className="w-full bg-transparent border-0 border-b-2 border-on-primary-container/30 focus:ring-0 focus:border-on-tertiary-container text-white placeholder:text-white/20 px-0 py-2" placeholder="j.doe@enterprise.com" type="email" />
</div>
<div className="space-y-1 md:col-span-2">
<label className="text-[10px] uppercase tracking-widest font-bold text-on-primary-container">Inquiry Details</label>
<textarea className="w-full bg-transparent border-0 border-b-2 border-on-primary-container/30 focus:ring-0 focus:border-on-tertiary-container text-white placeholder:text-white/20 px-0 py-2 h-20 resize-none" placeholder="Specific requirements or questions..."></textarea>
</div>
<button className="md:col-span-2 bg-on-tertiary-container text-white font-headline font-black uppercase text-sm py-4 rounded hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-2">
                                Request Digital Brochure
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</form>
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
<img className="w-full h-full object-cover" data-alt="Professional portrait of a male real estate consultant in a sharp suit with industrial background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJZSEkG4bk97Et3xqEh7ceFvY_BHrR2zyLlvZSEpIYMXXDkEDwdRPjY32k6rrucgQAdHYgnG5c5IBCHBcCTYZoDARiCnr0zlh7nPI0H2qZdi4_YvwSOJTY7HuMBR5qPoEVfyllGdFGiQe0v5EDpAblesihyDMvxPjQe2BR9Oycf3ftMkgBLAilT_aGta6KeAv9w-TP_r4EQ8hBI1bIBvRUGneT788xfQpkKfq-IQM-qNuxRo8p4qkgqULPqOfIz34NgA_61u5V6tI" />
</div>
<div>
<h4 className="font-headline font-bold text-primary">Marcus Thornton</h4>
<p className="text-xs text-secondary font-medium">Head of Industrial Sales</p>
</div>
</div>
<div className="space-y-4">
<button className="w-full flex items-center justify-center gap-3 bg-white border border-outline-variant py-3 rounded text-sm font-bold text-primary hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[20px]">call</span>
                                +1 (555) 012-3456
                            </button>
<button className="w-full flex items-center justify-center gap-3 bg-[#25D366] py-3 rounded text-sm font-bold text-white hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[20px]">chat</span>
                                WhatsApp Chat
                            </button>
<div className="pt-4 border-t border-outline-variant/30">
<button className="w-full bg-on-tertiary-container py-4 rounded text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-on-tertiary-container/20 hover:translate-y-[-2px] transition-transform">
                                    Schedule Site Visit
                                </button>
</div>
</div>
<div className="mt-8 p-4 bg-surface-container-low rounded border-l-4 border-on-tertiary-container">
<p className="text-[11px] leading-relaxed text-secondary italic">"Plot 42-B is currently our most high-demand zone due to its direct proximity to the main power substation. Highly recommended for heavy manufacturing."</p>
</div>
</div>
</div>

<div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/20">
<h5 className="text-xs font-black uppercase tracking-widest text-primary mb-6">Technical Resources</h5>
<ul className="space-y-4">
<li className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="description"></span>
<span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">Zoning Regulations.pdf</span>
</div>
<span className="material-symbols-outlined text-xs text-on-tertiary-container" data-icon="download"></span>
</li>
<li className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="architecture"></span>
<span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">Utility Map (CAD).dwg</span>
</div>
<span className="material-symbols-outlined text-xs text-on-tertiary-container" data-icon="download"></span>
</li>
<li className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="gavel"></span>
<span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">Master Lease Agreement</span>
</div>
<span className="material-symbols-outlined text-xs text-on-tertiary-container" data-icon="download"></span>
</li>
</ul>
</div>
</div>
</div>

        </main>
    );
}
