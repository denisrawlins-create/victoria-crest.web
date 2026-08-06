"use client";

import Image from "next/image";
import { ArrowRight, Check, Menu, ShieldCheck, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const SHOP = "https://victoriacrest.oddle.me/en_MY";
const FACEBOOK = "https://www.facebook.com/victoriacrest";
const INSTAGRAM = "https://www.instagram.com/victoriacrest_my/";
const GOOGLE_PROFILE = "https://www.google.com/search?q=victoria+crest";

const ranges = [
  { name: "Premium sausages", copy: "British-style recipes, prime meat and satisfying texture.", image: "/victoria/editorial/lamb-sausages.jpg" },
  { name: "Deep-filled pies", copy: "Buttery pastry and generous savoury fillings.", image: "/victoria/editorial/chicken-pie.jpg" },
  { name: "Chicken burgers", copy: "Tender, versatile patties for quick family meals.", image: "/victoria/editorial/chicken-burger.jpg" },
  { name: "Beef burgers", copy: "Full-flavoured premium burgers made for the grill.", image: "/victoria/editorial/beef-burger.jpg" },
  { name: "Chicken streaky", copy: "A lighter breakfast favourite made from pure chicken breast.", image: "/victoria/editorial/hero-streaky-focused.png" },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return <span className={footer ? "footer-logo" : "main-logo"}><Image src="/victoria/vc-logo-transparent-cropped.png" alt="Victoria Crest — Premium Halal Foods" fill priority={!footer} sizes={footer ? "230px" : "270px"} className="logo-image object-contain" /></span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner"><a href="#top" aria-label="Victoria Crest home"><Logo /></a><nav className="desktop-nav"><a href="#range">Our range</a><a href="#quality">Our promise</a><a href={SHOP} target="_blank" rel="noopener noreferrer" className="nav-shop"><ShoppingBag size={16} /> Shop online</a><a href="#top" className="crest-button" aria-label="Victoria Crest home"><Image src="/victoria/crest.png" alt="Victoria Crest crest" fill sizes="46px" className="object-cover" /></a></nav><div className="mobile-actions"><a href="#top" className="crest-button" aria-label="Victoria Crest home"><Image src="/victoria/crest.png" alt="Victoria Crest crest" fill sizes="42px" className="object-cover" /></a><button onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div></div>{open && <nav className="mobile-nav"><a href="#range" onClick={() => setOpen(false)}>Our range</a><a href="#quality" onClick={() => setOpen(false)}>Our promise</a><a href={SHOP} target="_blank" rel="noopener noreferrer">Shop online →</a></nav>}</header>;
}

function ShopButton({ children, pale = false }: { children: React.ReactNode; pale?: boolean }) {
  return <a href={SHOP} target="_blank" rel="noopener noreferrer" className={pale ? "button button-pale" : "button button-gold"}>{children}<ArrowRight size={18} /></a>;
}

export default function Home() {
  return <><Header /><main id="top">
    <section className="hero-clean"><div className="hero-copy"><div className="hero-copy-inner"><p className="kicker"><ShieldCheck size={17} /> Premium halal foods</p><h1>Comfort food,<br /><em>made properly.</em></h1><p className="hero-intro">European-inspired sausages, burgers, pies and chicken favourites, crafted in Malaysia with quality ingredients.</p><div className="hero-actions"><ShopButton>Order online</ShopButton><a href="#range" className="text-link">Explore our range <ArrowRight size={17} /></a></div></div></div><div className="hero-photo"><Image src="/victoria/editorial/hero-streaky-focused.png" alt="Victoria Crest Chicken Streaky served with egg and beans" fill priority sizes="(max-width: 900px) 100vw, 56vw" className="object-cover" /></div></section>

    <section className="trust-strip"><div><Check /> Halal certified</div><div><Check /> Quality ingredients</div><div><Check /> Made in Malaysia</div><div><Check /> Delivered to your door</div></section>

    <section id="range" className="section cream"><div className="container"><div className="section-intro"><p className="kicker dark">Shop the favourites</p><h2>Good food for<br />real life.</h2><p>Reliable freezer favourites for breakfasts, family dinners, weekend grills and easy entertaining.</p></div><div className="range-grid">{ranges.map(item => <a key={item.name} href={SHOP} target="_blank" rel="noopener noreferrer" className="range-card"><div className="range-photo"><Image src={item.image} alt={item.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" className="object-cover" /></div><div className="range-copy"><h3>{item.name}</h3><p>{item.copy}</p><span>Shop now <ArrowRight size={15} /></span></div></a>)}</div><div className="center"><ShopButton>View the full range</ShopButton></div></div></section>

    <section id="quality" className="split-story"><div className="story-photo"><Image src="/victoria/editorial/dynamite.jpg" alt="Victoria Crest dynamite chicken sausages" fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" /></div><div className="story-copy"><div><p className="kicker">The Victoria Crest promise</p><h2>Premium flavour.<br />No fuss.</h2><p>Victoria Crest brings European comfort-food traditions to Malaysian homes. Our focus is simple: dependable quality, satisfying flavour and food the whole table can enjoy.</p><ul><li><Check /> Halal-certified production</li><li><Check /> Carefully developed recipes</li><li><Check /> Convenient frozen favourites</li></ul><ShopButton>Fill your freezer</ShopButton></div></div></section>

    <section className="section white"><div className="container meal-grid"><div className="meal-copy"><p className="kicker dark">From freezer to table</p><h2>Easy to cook.<br />Easy to love.</h2><p>Keep dinner simple without settling for ordinary. Cook from frozen, add your favourite sides and serve something everyone will look forward to.</p><ShopButton>Shop Victoria Crest</ShopButton></div><div className="meal-images"><div><Image src="/victoria/editorial/beef-pie.jpg" alt="Victoria Crest deep-filled beef pie" fill sizes="(max-width: 900px) 50vw, 28vw" className="object-cover" /></div><div><Image src="/victoria/editorial/pies-tray.jpg" alt="Freshly baked Victoria Crest pies" fill sizes="(max-width: 900px) 50vw, 28vw" className="object-cover" /></div></div></div></section>

    <section className="final-simple"><div><p className="kicker">Ready when you are</p><h2>Bring home<br />the good stuff.</h2><p>Browse the complete range and order directly from our Oddle shop.</p></div><ShopButton pale>Order online now</ShopButton></section>
  </main><footer><div className="footer-inner"><div><Logo footer /><p>© {new Date().getFullYear()} Victoria Crest. All rights reserved.</p></div><div className="footer-nav"><div className="footer-links"><a href="#range">Our range</a><a href="#quality">Our promise</a><a href={SHOP} target="_blank" rel="noopener noreferrer">Order online</a></div><div className="social-links" aria-label="Victoria Crest social profiles"><a href={FACEBOOK} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">f</span> Facebook</a><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">◎</span> Instagram</a><a href={GOOGLE_PROFILE} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">G</span> Google Profile</a><span className="crest-button"><Image src="/victoria/crest.png" alt="Victoria Crest crest" fill sizes="46px" className="object-cover" /></span></div></div></div></footer></>;
}
