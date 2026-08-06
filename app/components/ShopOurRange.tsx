import Image from "next/image";

const products = [
  {
    title: "Traditional British Sausages",
    description:
      "Authentic British recipes crafted using premium pork and traditional seasoning.",
    image: "/images/sausages.jpg",
    oddle: "https://rawlinsfoods.oddle.me/",
  },
  {
    title: "British Back Bacon",
    description:
      "Naturally cured and traditionally prepared for the perfect British breakfast.",
    image: "/images/bacon.jpg",
    oddle: "https://rawlinsfoods.oddle.me/",
  },
  {
    title: "Premium Burgers",
    description:
      "Juicy handmade burgers made from premium pork with authentic flavour.",
    image: "/images/burgers.jpg",
    oddle: "https://rawlinsfoods.oddle.me/",
  },
  {
    title: "BBQ Ribs",
    description:
      "Slow-cooked, tender and packed with flavour for effortless entertaining.",
    image: "/images/ribs.jpg",
    oddle: "https://rawlinsfoods.oddle.me/",
  },
];
export default function ShopOurRange() {
  return (
    <section className="bg-[#F8F4EC] py-28">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.35em] text-[#7E1F29] font-semibold">
            Shop Our Range
          </p>

          <h2 className="text-5xl font-bold mt-5 text-[#16253D]">
            Authentic British Favourites
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            Discover our handcrafted range of premium British pork products,
            made for breakfasts, family meals and BBQs.
          </p>

        </div>

        <div className="space-y-24">

          {products.map((product, index) => (

            <div
              key={product.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />

              </div>

              <div>

                <h3 className="text-4xl font-bold text-[#16253D]">
                  {product.title}
                </h3>

                <p className="mt-6 text-lg leading-9 text-gray-600">
                  {product.description}
                </p>

                <div className="mt-10 flex gap-5">

                  <a
                    href={product.oddle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#16253D] px-8 py-4 text-white font-semibold hover:bg-[#0F1D30] transition"
                  >
                    Shop Online
                  </a>

                  <button className="rounded-full border border-[#16253D] px-8 py-4 hover:bg-[#16253D] hover:text-white transition">
                    Learn More
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}