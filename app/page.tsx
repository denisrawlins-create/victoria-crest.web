"use client";

import Image from "next/image";
import { ArrowRight, Check, ChevronRight, Menu, ShieldCheck, ShoppingBag, Sparkles, Truck, X } from "lucide-react";
import { useState } from "react";

const SHOP = "https://victoriacrest.oddle.me/en_MY";

const products = [
  { name: "British-style sausages", detail: "Coarse textured, deeply seasoned and made with prime meat.", image: "/victoria/chicken-herb.jpg", tag: "Sausages" },
  { name: "Premium burgers", detail: "Juicy, full-flavoured patties made for easy family favourites.", image: "/victoria/beef-burger.jpg", tag: "Burgers" },
  { name: "Deep-filled pies", detail: "Buttery pastry wrapped around generous, savoury fillings.", image: "/victoria/chicken-pie.jpg", tag: "Pies" },
  { name: "Chicken streaky", detail: "Pure chicken breast with no added nitrites, nitrates or artificial colouring.", image: "/victoria/chicken-streaky.jpg", tag: "Breakfast" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="logo-card" aria-label="Victoria Crest home">
          <Image src="/victoria/brand-a.jpg" alt="Victoria Crest" fill priority sizes="220px" className="object-cover object-center" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-white lg:flex">
          <a href="#range">Our range</a><a href="#why">Why Victoria Crest</a>
          <a href={SHOP} target="_blank" rel="noopener noreferrer" className="order-button"><ShoppingBag size={16} /> Shop online</a>
          <a href="#top" className="crest-button" aria-label="Victoria Crest home"><Image src="/victoria/crest.png" alt="Victoria Crest V crest" fill sizes="48px" className="object-cover" /></a>
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <a href="#top" className="crest-button" aria-label="Victoria Crest home"><Image src="/victoria/crest.png" alt="Victoria Crest V crest" fill sizes="44px" className="object-cover" /></a>
          <button onClick={() => setOpen(!open)} className="grid size-11 place-items-center border border-white/40 bg-black/20 text-white" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav className="mx-5 flex flex-col gap-5 border border-white/15 bg-[#370c03]/95 p-6 text-sm font-semibold text-white shadow-2xl lg:hidden"><a href="#range" onClick={() => setOpen(false)}>Our range</a><a href="#why" onClick={() => setOpen(false)}>Why Victoria Crest</a><a href={SHOP} target="_blank" rel="noopener noreferrer" className="text-[#e6ad2f]">Shop online →</a></nav>}
    </header>
  );
}

function ShopLink({ children, light = false, className = "" }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return <a href={SHOP} target="_blank" rel="noopener noreferrer" className={`${light ? "cta-light" : "cta-gold"} ${className}`}>{children}<ArrowRight size={18} /></a>;
}

export default function Home() {
  return (
    <><Header /><main id="top">
      <section className="hero">
        <Image src="/victoria/banner-1.jpg" alt="Victoria Crest premium halal burgers and sausages" fill priority sizes="100vw" className="object-cover object-[68%_center]" />
        <div className="hero-overlay" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-20 pt-36 sm:px-8 md:items-center md:pb-0">
          <div className="max-w-2xl text-white">
            <p className="eyebrow"><ShieldCheck size={17} /> Premium halal meat products</p>
            <h1>Great food.<br /><span>Properly made.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/78 sm:text-lg">European-inspired comfort food, crafted in Malaysia with prime ingredients and made for effortless, delicious meals at home.</p>
            <div className="mt-9 flex flex-wrap gap-4"><ShopLink>Order from our shop</ShopLink><a href="#range" className="cta-outline">Explore the range <ChevronRight size={18} /></a></div>
          </div>
        </div>
        <div className="hero-points"><span><Check /> Halal certified</span><span><Check /> Premium meat</span><span><Check /> Quality assured</span></div>
      </section>

      <section id="range" className="section-shell bg-[#fbf6ed]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="section-heading"><div><p className="eyebrow dark">The favourites</p><h2>Something good<br />for every table.</h2></div><p>From hearty British-style sausages to golden pies and everyday staples, discover premium halal favourites made for sharing.</p></div>
          <div className="product-grid">{products.map((product) => <a key={product.name} href={SHOP} target="_blank" rel="noopener noreferrer" className="product-card"><div className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" /><span>{product.tag}</span></div><div className="p-6"><h3>{product.name}</h3><p>{product.detail}</p><strong>Shop the range <ArrowRight size={16} /></strong></div></a>)}</div>
          <div className="mt-12 text-center"><ShopLink className="inline-flex">See the full range</ShopLink></div>
        </div>
      </section>

      <section id="why" className="grid lg:grid-cols-2">
        <div className="relative min-h-[540px]"><Image src="/victoria/banner-5.jpg" alt="Victoria Crest smoked chicken and premium burger" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[68%_center]" /></div>
        <div className="flex items-center bg-[#370c03] px-6 py-20 text-white sm:px-12 lg:px-16"><div className="max-w-xl"><p className="eyebrow">Why Victoria Crest</p><h2>Premium by tradition.<br />Made for today.</h2><p className="mt-6 leading-7 text-white/70">Victoria Crest brings the pleasure of European comfort food to Malaysian homes. Every product is built around flavour, quality and the confidence of halal-certified production.</p><div className="promise-grid"><div><Sparkles /><h3>Crafted with care</h3><p>Thoughtful recipes and quality ingredients in every bite.</p></div><div><ShieldCheck /><h3>Halal certified</h3><p>Made for everyone to enjoy with confidence.</p></div><div><Truck /><h3>Delivered chilled</h3><p>Order online and have favourites sent to your door.</p></div></div><ShopLink>Fill your freezer</ShopLink></div></div>
      </section>

      <section className="section-shell bg-white"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr]"><div><p className="eyebrow dark">Easy meals, memorable flavour</p><h2>Breakfast to barbecue,<br />sorted.</h2><p className="mt-6 max-w-xl leading-7 text-[#5d514d]">Keep Victoria Crest on hand for quick breakfasts, family dinners, weekend grills and last-minute gatherings. Less prep. More flavour. Happier tables.</p><ShopLink className="mt-8 inline-flex">Shop Victoria Crest</ShopLink></div><div className="relative aspect-[16/9] overflow-hidden shadow-2xl"><Image src="/victoria/banner-4.jpg" alt="Victoria Crest premium halal range" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div></div></section>

      <section className="final-cta"><Image src="/victoria/banner-2.jpg" alt="Victoria Crest premium pies" fill sizes="100vw" className="object-cover object-[70%_center]" /><div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/15" /><div className="relative mx-auto max-w-7xl px-5 py-24 text-white sm:px-8"><div className="max-w-xl"><p className="eyebrow">Your next meal starts here</p><h2>Bring home<br />the good stuff.</h2><p className="mt-5 max-w-lg text-lg text-white/75">Browse the complete Victoria Crest range and order online for delivery across the Klang Valley.</p><ShopLink light className="mt-8 inline-flex">Order online now</ShopLink></div></div></section>
    </main><footer className="bg-[#1e0703] px-5 py-12 text-white sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end"><div><div className="flex items-center gap-4"><div className="relative h-20 w-48 overflow-hidden rounded bg-white"><Image src="/victoria/brand-a.jpg" alt="Victoria Crest" fill sizes="192px" className="object-cover" /></div><div className="crest-button size-12"><Image src="/victoria/crest.png" alt="Victoria Crest V crest" fill sizes="48px" className="object-cover" /></div></div><p className="mt-5 text-xs text-white/45">© {new Date().getFullYear()} Victoria Crest. All rights reserved.</p></div><div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70"><a href="#range">Our range</a><a href="#why">Why Victoria Crest</a><a href={SHOP} target="_blank" rel="noopener noreferrer">Order online</a></div></div></footer></>
  );
}
