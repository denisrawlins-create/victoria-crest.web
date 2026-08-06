export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <p className="mb-3 uppercase tracking-[0.35em] text-[#7E1F29]">
              Our Story
            </p>

            <h2 className="mb-8 text-5xl font-bold text-[#16253D]">
              A Tradition of British Quality
            </h2>

            <p className="mb-6 text-lg leading-8 text-gray-600">
              Rawlins Foods has been producing premium British meat products
              using traditional recipes, carefully selected ingredients and
              uncompromising quality.
            </p>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              Today we proudly bring authentic British flavours to homes,
              cafés, restaurants and retailers throughout Malaysia.
            </p>

            <button className="rounded-full bg-[#16253D] px-8 py-4 text-white hover:bg-[#0F1D30] transition">
              Learn More
            </button>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/about.jpg"
              alt="Rawlins Foods"
              className="h-full w-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}