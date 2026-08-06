import { Beef, MapPin, ShieldCheck, Wheat } from "lucide-react";

const reasons = [
  { icon: Wheat, title: "British recipes", text: "The familiar flavours of a proper British butcher." },
  { icon: Beef, title: "Premium pork", text: "Carefully selected cuts, made with care." },
  { icon: MapPin, title: "Made in Malaysia", text: "A local craft with a taste of home." },
  { icon: ShieldCheck, title: "Quality first", text: "A tradition built around doing things properly." },
];

export default function WhyRawlins() {
  return (
    <section id="our-story" className="bg-[#f4efe5] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-[#8c2732]">Why Rawlins</p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight text-[#16253d] sm:text-5xl">British favourites, made with real care.</h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-[#16253d]/15 bg-[#16253d]/15 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article key={title} className="bg-[#f9f6f0] p-8 sm:p-9">
              <Icon size={27} strokeWidth={1.5} className="text-[#8c2732]" />
              <h3 className="mt-9 font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#16253d]">{title}</h3>
              <p className="mt-3 leading-7 text-[#4d555e]">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 border border-[#16253d]/15 bg-white px-7 py-10 sm:px-10 sm:py-12">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-[#8c2732] sm:text-base">Nitrites &amp; artificial colourings</p>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#354250]">Our sausages are made for the people who matter most to us—our own family and friends. That&apos;s why we choose not to use nitrites or artificial colourings and aim to keep fat levels as low as possible, without compromising the flavour and texture that define a great sausage.</p>
          <p className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#16253d]">Rawlins – A Tradition of Quality.</p>
        </div>

        <div className="mt-5 border border-[#16253d]/15 bg-white px-7 py-10 sm:px-10 sm:py-12">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-[#8c2732] sm:text-base">Original recipes</p>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#354250]">Every Rawlins recipe is our own. We make our sausages from scratch using carefully chosen ingredients and original seasonings—not ready-made premixes—so every product carries the flavour, texture and character we are proud to put our name to.</p>
        </div>

        <div className="mt-5 grid gap-8 border border-[#16253d]/15 bg-white px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#8c2732] sm:text-base">Our heritage</p>
            <h3 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight text-[#16253d]">From Dorset to Malaysia.</h3>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#354250]">
            <p>Originally from Dorset, England, the Rawlins family settled in Malaya in the early 1950s. In those days, many of the familiar foods from home were difficult to find, so our family made its own sausages for the table using traditional British recipes and techniques.</p>
            <p>Generations later, that same appreciation for quality ingredients, honest food and great flavour remains at the heart of Rawlins. Inspired by both our British heritage and our long connection with Malaysia, we create sausages that blend tradition, craftsmanship and local influence in every bite.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
