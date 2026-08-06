"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const ODDLE_URL = "https://rawlins.oddle.me/en_MY";
const links = [
  { label: "Our range", href: "#our-range" },
  { label: "Why Rawlins", href: "#our-story" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="relative block h-20 w-60 sm:h-24 sm:w-72">
          <Image src="/logos/rawlins-logo-white.png" alt="Rawlins — A tradition of quality" fill priority sizes="288px" className="object-contain" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="transition hover:text-[#e5c87c]">{link.label}</a>)}
          <a href={ODDLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/40 bg-[#16253d] px-5 py-3 text-xs font-bold uppercase tracking-[.12em] text-white transition hover:bg-[#0e1a2b]"><ShoppingBag size={16} />Order online</a>
          <Link href="/" aria-label="Rawlins home" className="size-11 overflow-hidden rounded-full border border-white/45 transition hover:scale-105"><Image src="/logo.png" alt="Rawlins R mark" width={44} height={44} className="size-full object-cover" /></Link>
        </nav>
        <div className="flex items-center gap-3 lg:hidden"><Link href="/" aria-label="Rawlins home" className="size-10 overflow-hidden rounded-full border border-white/45"><Image src="/logo.png" alt="Rawlins R mark" width={40} height={40} className="size-full object-cover" /></Link><button type="button" onClick={() => setOpen(!open)} className="grid size-11 place-items-center border border-white/40" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div>
      </div>
      {open && <div className="border-t border-white/15 bg-[#16253d] px-5 py-5 lg:hidden"><nav className="flex flex-col gap-5 text-sm font-medium">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a href={ODDLE_URL} target="_blank" rel="noopener noreferrer" className="font-bold uppercase tracking-[.12em] text-[#e5c87c]">Order online →</a></nav></div>}
    </header>
  );
}
