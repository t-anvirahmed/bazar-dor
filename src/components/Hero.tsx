import Image from "next/image";
import bannerHero from "../../public/bazar-hero.png";

const Hero = () => {
  return (
    <div className="container mx-auto overflow-hidden rounded-2xl border border-green-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12 lg:py-12">
      <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row-reverse md:gap-10">
        <Image
          alt="Tailwind CSS hero component"
          src={bannerHero}
          priority
          width={600}
          height={500}
          className="h-auto w-full max-w-[480px] object-contain"
        />

        <div className="w-full text-center md:w-1/2 md:pl-6 md:text-left lg:pl-10">
          <h1 className="text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            আজকের বাজারের দাম <br /> এক নজরে
          </h1>

          <p className="py-5 text-base leading-8 text-gray-600 sm:py-6 sm:text-lg">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, <br className="hidden lg:block" />
            সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <button className="primary-btn w-full sm:w-auto">
            সব পণ্য দেখুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
