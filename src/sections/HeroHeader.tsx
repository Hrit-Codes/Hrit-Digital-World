export default function HeroHeader() {
  return (
    <section className="w-full my-20 overflow-hidden mx-auto pt-6 pb-14 px-4 md:px-8 relative">
      
      {/* Content */}
        <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center text-center gap-4">
            <p className="uppercase max-w-3xl text-xs md:text-sm leading-relaxed bg-gradient-to-r from-[#0b525b] to-[#006466] inline-block px-4 py-2 rounded-full text-white/90 mb-6">
            Digital Craftsmanship
            </p>

            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
            The ARCHITECTURE OF{" "}
            <span className="bg-gradient-to-r from-[#006466] via-[#065a60] to-[#0b525b] bg-clip-text text-transparent animate-gradient">
                PERFORMANCE
            </span>
            </h2>

            <p className="text-sm md:text-base max-w-2xl text-gray-300 leading-relaxed">
            Expertise forged in the fires of fullstack engineering. Leveraging cutting edge technologies 
            to build resilient, scalable and elegant digital solutions.
            </p>
        </div>
    </section>
  );
}