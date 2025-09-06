import React from "react";

const OrderSection = ({
  bgSrc = "BannerSec.png",
  rightImageSrc = "OrderFir.png",
}) => {
  return (
    <section className="relative w-full">
      {/* Background */}
      <div
        className="relative w-full mt-8"
        style={{
          backgroundImage: `url(${bgSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay tint to improve text readability; adjust/disable as needed */}
        <div className="bg-black/10 h-full py-6 sm:py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 h-full py-2 sm:py-3 md:py-4">
            <div className="gap-4 items-center h-full">
              {/* Left copy */}
              <div className="text-white">
                <h2 className="mt-3 sm:mt-4 md:mt-5 text-lg sm:text-2xl md:text-3xl font-extrabold">
                  UNLOCK YOUR TRUE INTIMACY TODAY WITH PLAY TONIGHT & AMERO!
                </h2>
                <p className="mt-1 pl-1 text-sm sm:text-base md:text-lg lg:text-xl text-[#ffd86a]">
                  Reignite passion and satisfaction in your relationship with our trusted solutions.
                </p>

                <ul className="mt-3 space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg lg:text-xl">
                  <li className="flex gap-2 sm:gap-3">
                    <span className="">•</span>
                    <span>
                      For Men: Play Tonight Capsules – boost stamina, power, and long-lasting performance.
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <span className="">•</span>
                    <span>
                      For Women: Amero Gel – restore tightness, enhance confidence, and feel youthful again.
                    </span>
                  </li>
                </ul>

                <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg lg:text-[22px] text-[#ffd86a]">
                  TOGETHER, THEY HELP YOU AND YOUR PARTNER ENJOY THE MOST <br className="hidden sm:block" />
                  FULFILLING INTIMATE EXPERIENCE EVER.
                </p>

                <div className="mt-3 sm:mt-4 flex justify-center md:justify-start">
                  <button className="inline-flex items-center gap-2 bg-[#aa1541] hover:bg-[#aa1541] text-white font-bold rounded-full px-8 sm:px-12 md:px-16 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg shadow-md z-10 relative">
                    <span>▶</span>
                    <span>ORDER NOW</span>
                  </button>
                </div>
              </div>

             
            </div>
          </div>
        </div>
        <img
          src={rightImageSrc}
          alt="Order Visual"
          className="hidden lg:block absolute top-[150px] right-10 w-[clamp(400px,30vw,600px)] max-h-[400px] object-cover"
        />

      </div>
      {/* Bottom accent bar */}
      <div className="h-5 w-full bg-[#aa1541]" />
    </section>
  );
};

export default OrderSection;


