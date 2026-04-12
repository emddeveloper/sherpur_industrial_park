import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <main>
            

<section className="relative h-[400px] flex items-center overflow-hidden bg-primary-container">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-30 mix-blend-overlay" data-alt="Wide shot of a modern industrial park" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1iCLn2coegA6RBZy6anubyX30YKG76cTXAcyAlXx5xTk-mrVnuYl5ZngF7qtJCcLh5-AEnyO-UMPQPzclLiW_ba9TvOeE93VnG-P56tAr_IByBMaXZGYl9SQH6pNv0tMjAv8lcjjMqZ_zq6MPRk9ijhC727CiaiCMv7c-vaYQ_lVoGFZk6X_oWvp5Zr-N0LvXLtS-zN0BH3qigfdbUWJr0LzvLxjjQC8Un5jAAXIf_vKIbFQkR_L5iob9wU69eJVprlLQagoEqnI" />
<div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-container/40"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
<div className="max-w-3xl">
<span className="inline-block px-3 py-1 bg-on-tertiary-container/10 border border-on-tertiary-container/20 rounded text-on-tertiary-container font-label text-xs font-bold tracking-widest uppercase mb-6">
                        Contact Support &amp; Sales
                    </span>
<h1 className="text-5xl md:text-6xl font-headline font-extrabold text-white tracking-tighter leading-none mb-6">
                        Get in <span className="text-on-tertiary-container">Touch</span>
</h1>
<p className="text-lg text-on-primary-container font-body leading-relaxed max-w-xl">
                        Connect with our strategic advisors to discuss land acquisition, custom shed leasing, and infrastructure integration for your enterprise.
                    </p>
</div>
</div>
</section>

<section className="max-w-screen-2xl mx-auto px-8 -mt-24 relative z-20 mb-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-10 rounded-xl shadow-xl shadow-primary/5">
<div className="flex items-center gap-4 mb-8">
<div className="h-10 w-1 bg-on-tertiary-container"></div>
<div>
<h2 className="text-2xl font-headline font-bold text-primary">Industrial Inquiry Form</h2>
<p className="text-secondary text-sm">Detailed specifications help us route your request to the right technical lead.</p>
</div>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
<div className="relative">
<label className="block font-label text-xs font-bold text-secondary uppercase tracking-wider mb-1">Full Name</label>
<input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-on-surface" placeholder="John Doe" type="text" />
</div>
<div className="relative">
<label className="block font-label text-xs font-bold text-secondary uppercase tracking-wider mb-1">Company Name</label>
<input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-on-surface" placeholder="Industrial Solutions Ltd." type="text" />
</div>
<div className="relative">
<label className="block font-label text-xs font-bold text-secondary uppercase tracking-wider mb-1">Corporate Email</label>
<input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-on-surface" placeholder="john@company.com" type="email" />
</div>
<div className="relative">
<label className="block font-label text-xs font-bold text-secondary uppercase tracking-wider mb-1">Phone Number</label>
<input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-on-surface" placeholder="+880 1XXX-XXXXXX" type="tel" />
</div>
</div>
<div className="relative">
<label className="block font-label text-xs font-bold text-secondary uppercase tracking-wider mb-1">Nature of Interest</label>
<select className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-on-surface appearance-none">
<option>Select an option</option>
<option>Land Purchase</option>
<option>Shed Lease</option>
<option>Logistics Hub Setup</option>
<option>General Inquiry</option>
</select>
</div>
<div className="relative">
<label className="block font-label text-xs font-bold text-secondary uppercase tracking-wider mb-1">Project Brief / Message</label>
<textarea className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 outline-none text-on-surface resize-none" placeholder="Briefly describe your industrial requirements..." rows="3"></textarea>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
<div className="flex items-center gap-3 text-secondary-container bg-primary-container px-4 py-2 rounded-lg">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="verified">verified</span>
<span className="text-xs font-medium">Guaranteed response within 24 business hours</span>
</div>
<button className="bg-[#ff7627] text-white px-10 py-3.5 rounded-lg font-headline font-extrabold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-transform shadow-lg shadow-orange-500/20" type="submit">
                                Send Inquiry
                                <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</form>
</div>

<div className="lg:col-span-5 space-y-6">

<div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary">
<h3 className="text-xs font-bold text-on-tertiary-container uppercase tracking-[0.2em] mb-4">Corporate Headquarters</h3>
<div className="space-y-6">
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
<div>
<p className="font-headline font-bold text-primary">Sherpur, Bangladesh</p>
<p className="text-secondary text-sm leading-relaxed mt-1">Plot 45-52, Industrial Zone A, Sherpur Main Road, Mymensingh Division.</p>
</div>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary" data-icon="call">call</span>
<div>
<p className="font-headline font-bold text-primary">+880 2 988 7766</p>
<p className="text-secondary text-sm">Sunday - Thursday, 9 AM - 6 PM</p>
</div>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary" data-icon="mail">mail</span>
<div>
<p className="font-headline font-bold text-primary">invest@sherpurpark.com</p>
<p className="text-secondary text-sm">For business &amp; leasing inquiries</p>
</div>
</div>
</div>
</div>

<div className="bg-[#25D366] p-6 rounded-xl text-white flex items-center justify-between group cursor-pointer overflow-hidden relative shadow-lg shadow-green-500/10">
<div className="relative z-10">
<h3 className="font-headline font-extrabold text-lg mb-1">WhatsApp Business</h3>
<p className="text-white/80 text-xs">Instant support for on-site visits.</p>
</div>
<span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform relative z-10" data-icon="chat">chat</span>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform">
<span className="material-symbols-outlined text-8xl" data-icon="forum">forum</span>
</div>
</div>

<div className="rounded-xl overflow-hidden h-[240px] relative bg-surface-variant group">
<img className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700" data-alt="Abstract map visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzenKSn3fe-LSsPb3yDJ2lKW8qDTRDvEkW4G1VTzIqSJrAeU76ts6Aoel1bx4uJe0h6sBazoZ0BBLydvivdcx42hWKfvIfFI-8EvSzg1T9nrzXMEc0X_XSyml6D9hdGnRFGTcjapcIW9O77d-3sFG9KgZ74GrCyqk6U0WdrcvLEU7M1RD_R_a9uf-oZrgkE-ZUMu4R9Podm3KAoBLkJtEkI2LRI7Rk0jbCj2tS2a9zsE4iNbePDq3AboAheRMq_50dWiq97869MjE" />
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-primary text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-2 hover:bg-primary/90 transition-colors cursor-pointer">
<span className="material-symbols-outlined text-sm" data-icon="near_me">near_me</span>
<span className="font-headline font-bold text-xs uppercase tracking-wider">View Location</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container py-16 border-t border-outline-variant/10">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="space-y-4">
<div className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-xl" data-icon="security">security</span>
</div>
<h4 className="text-lg font-headline font-bold text-primary">Data Privacy</h4>
<p className="text-secondary text-sm leading-relaxed">Your corporate information is protected under international ISO 27001 standards. We never share inquiry data with third parties.</p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-xl" data-icon="speed">speed</span>
</div>
<h4 className="text-lg font-headline font-bold text-primary">Rapid Processing</h4>
<p className="text-secondary text-sm leading-relaxed">Automated routing ensures your specific industry needs reach the subject-matter expert within minutes of submission.</p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 bg-surface-container-highest rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-xl" data-icon="eco">eco</span>
</div>
<h4 className="text-lg font-headline font-bold text-primary">Compliance Ready</h4>
<p className="text-secondary text-sm leading-relaxed">Inquiries regarding environmental standards are handled by our dedicated sustainability compliance team.</p>
</div>
</div>
</div>
</section>

        </main>
    );
}
