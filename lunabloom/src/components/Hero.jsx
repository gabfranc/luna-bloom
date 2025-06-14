import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    // Hero Section
    <section
      className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="bg-white/60 p-8 rounded-lg max-w-xl">
        <h1 className="text-3xl md:text-5xl text-rosewood font-serif mb-4">
          Where Flowers Speak the Language of Love
        </h1>
        <button className="px-6 py-3 bg-blush text-rosewood font-semibold rounded-full shadow hover:bg-cocoa transition duration-300">
          SHOP BOUQUETS
        </button>
      </div>
    </section>
  );
}