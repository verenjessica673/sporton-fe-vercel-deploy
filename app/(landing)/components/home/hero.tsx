import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section>
      <div className="relative self-center">
        <div className="relative ml-40 w-full">
          <div className="text-primary italic">Friday Sale, 50%</div>

          <h1
            className="
              font-extrabold text-[95px] italic
              bg-gradient-to-b from-black to-[#979797]
              bg-clip-text text-transparent
            "
          >
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTWEAR
          </h1>

          <p className="w-2/3 leading-loose mt-8 text-lg text-gray-700">
            Engineered for endurance and designed for speed.
            Experience gear that moves as fast as you do. Premium fabrics.
            Unmatched comfort. Limitless motion.
          </p>

          <div className="flex gap-5 mt-8">
            <Button>Explore More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;