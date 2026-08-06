import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const ODDLE_URL = "https://rawlins.oddle.me/en_MY";
const products = [
  { title: "Sausages", description: "Traditional British recipes, made for breakfast and beyond.", image: "/images/sausages.jpg" },
  { title: "Back bacon", description: "A breakfast classic, naturally full of flavour.", image: "/images/bacon.jpg" },
  { title: "Burgers", description: "Juicy, satisfying favourites for the grill.", image: "/images/burgers.jpg" },
  { title: "BBQ ribs", description: "Slow-cooked tenderness for easy entertaining.", image: "/images/ribs.jpg" },
  { title: "Sausage rolls", description: "Golden, flaky pastry wrapped around a proper British favourite.", image: "/images/rolls.png" },
  { title: "Pork chops", description: "A versatile, flavourful cut for everyday cooking and weekend grills.", image: "/images/chops.jpg" },
];
export default function ProductGrid() {
  return <section id="our-range" className="bg-[#fbfaf7] px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 border-b border-[#16253d]/20 pb-10 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-[#8c2732]">The Rawlins collection</p><h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold text-[#16253d] sm:text-5xl">Made for good food moments.</h2></div><a href={ODDLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-[.12em] text-[#16253d] md:self-auto">View the whole range <ArrowUpRight size={18} /></a></div><div className="mt-10 grid gap-5 sm:grid-cols-2">{products.map((product) => <a key={product.title} href={ODDLE_URL} target="_blank" rel="noopener noreferrer" className="group relative isolate min-h-[385px] overflow-hidden bg-[#16253d] sm:min-h-[470px]"><Image src={product.image} alt={product.title} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#101e32]/90 via-[#101e32]/15 to-transparent" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-7 text-white sm:p-9"><div><h3 className="font-[family-name:var(--font-heading)] text-4xl font-semibold sm:text-5xl">{product.title}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-white/85">{product.description}</p></div><span className="mb-1 grid size-11 shrink-0 place-items-center rounded-full border border-white/60 transition group-hover:bg-white group-hover:text-[#16253d]"><ArrowUpRight size={20} /></span></div></a>)}</div></div></section>;
}
