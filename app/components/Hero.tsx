import Image from "next/image";
import { ArrowRight, ShoppingBag } from "lucide-react";

const ODDLE_URL = "https://rawlins.oddle.me/en_MY";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#14233a] sm:min-h-[780px]">
      <Image src="/images/hero.png" alt="A full British breakfast made with Rawlins favourites" fill priority sizes="100vw" className="object-cover object-[62%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,22,39,.9)_0%,rgba(10,22,39,.74)_37%,rgba(10,22,39,.18)_75%,rgba(10,22,39,.1)_100%)]" />
      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-5 pb-20 pt-36 sm:min-h-[780px] sm:px-8 sm:pb-28"><div className="max-w-2xl text-white">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[.24em] text-[#e5c87c] sm:text-sm">British pork specialists</p>
        <h1 className="font-[family-name:var(--font-heading)] text-5xl font-semibold leading-[.95] tracking-[-.035em] text-white sm:text-6xl lg:text-8xl">A proper taste of Britain.</h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">Handcrafted sausages, bacon, burgers and traditional favourites, made in Malaysia with recipes worth coming back to.</p>
        <a href={ODDLE_URL} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-3 border border-white/35 bg-[#16253d] px-6 py-4 text-sm font-bold uppercase tracking-[.12em] text-white transition hover:-translate-y-0.5 hover:bg-[#0e1a2b]"><ShoppingBag size={18} />Order online<ArrowRight size={18} /></a>
      </div></div>
    </section>
  );
}
