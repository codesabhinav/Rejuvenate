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
        <div className="bg-black/10 h-full  py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-4">
            <div className="gap-4 items-center h-full">
              {/* Left copy */}
              <div className="text-white">
                <h2 className="mt-5 text-3xl font-extrabold">
                  UNLOCK YOUR TRUE INTIMACY TODAY WITH PLAY TONIGHT & AMERO!
                </h2>
                <p className="mt-1 pl-1 text-base sm:text-lg md:text-xl text-[#ffd86a]">
                  Reignite passion and satisfaction in your relationship with our trusted solutions.
                </p>

                <ul className="mt-3 space-y-3 text-lg md:text-xl">
                  <li className="flex gap-3">
                    <span className="">•</span>
                    <span>
                      For Men: Play Tonight Capsules – boost stamina, power, and long-lasting performance.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="">•</span>
                    <span>
                      For Women: Amero Gel – restore tightness, enhance confidence, and feel youthful again.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 text-[22px] text-[#ffd86a]">
                  TOGETHER, THEY HELP YOU AND YOUR PARTNER ENJOY THE MOST <br />
                  FULFILLING INTIMATE EXPERIENCE EVER.
                </p>

                <div className="mt-4 md:flex md:items-center md:gap-6">
                  <button className="inline-flex items-center gap-2 bg-[#aa1541] hover:bg-[#aa1541] text-white font-bold rounded-full ml-5 px-16 py-4 text-lg shadow-md z-10 relative">
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
          className="hidden md:block absolute left-[1000px] top-[190px] w-[600px] h-[400px]"
        />
      </div>
      {/* Bottom accent bar */}
      <div className="h-5 w-full bg-[#aa1541]" />
    </section>
  );
};

export default OrderSection;


