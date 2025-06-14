function AboutSection() {
  return (
    <section className="bg-[#4C2D2D] py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img src="/about.jpg" alt="About" className="w-full h-auto rounded" />
        <div>
          <h3 className="text-2xl mb-4 font-serif">About Us</h3>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur. Laboris fringilla mauris nunc est tempor pellentesque amet. Mi a semper ut sed consectetur facilisis. Sit blandit augue magna scelerisque pellentesque semper facilisis non tellus.
          </p>
          <button className="bg-[#EAD5C8] text-[#4C2D2D] px-6 py-2 rounded-md hover:bg-[#F3DDEB]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;