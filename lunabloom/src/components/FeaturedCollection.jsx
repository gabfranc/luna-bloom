function FeaturedCollection() {
  const collections = [
    { name: "Weddings", img: "/weddings.jpg" },
    { name: "Seasonal Blooms", img: "/seasonal.jpg" },
    { name: "Custom Bouquets", img: "/custom.jpg" },
    { name: "Dried Flowers", img: "/dried.jpg" },
  ];

  return (
    <section className="bg-[#fadadd] py-12 text-center">
      <h2 className="text-2xl md:text-3xl mb-8 font-serif text-[#4C2D2D]">
        Featured Collection
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        {collections.map((item) => (
          <div key={item.name} className="overflow-hidden rounded shadow-lg">
            <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
            <div className="bg-[#4C2D2D] py-2 text-white">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCollection;