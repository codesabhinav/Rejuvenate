import React from "react";

/*
  Second Order Section (headline + doctor + products)
*/

const SecOrderSection = ({
  doctorSrc = "Doctor.png",
  boxLeftSrc = "OrderSec.png",
  bgColor = "#efeff0",
}) => {
  return (
    <section
      className="w-full h-auto sm:h-[500px] md:h-[600px] py-14"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-10 sm:py-15 md:py-20">
        <div className="">
          {/* Left copy */}
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-[40px] font-extrabold text-[#424242]">
              EXPERIENCE RESTORED INTIMACY &
              <br className="hidden sm:block " /> CONFIDENCE FOR GREATER
              <br className="hidden sm:block " /> SATISFACTION.
            </h2>

            <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-lg md:text-[30px] text-[#828488]">
              Thanks to advanced herbal formulation and rapid action, <br className="hidden sm:block" />Play Tonight Capsules & Amero Gel work together to <br className="hidden sm:block" />enhance stamina, restore firmness, and help you enjoy <br className="hidden sm:block" />longer, more fulfilling intimate moments.
            </p>
          </div>

          {/* Right visuals */}
          <div className="relative min-h-[200px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[520px] mt-8 md:mt-0">
            {/* Doctor */}
            <img
              src={doctorSrc}
              alt="Doctor"
              className="hidden sm:block absolute right-[16px] sm:right-[24px] md:right-[32px] bottom-[200px] sm:bottom-[280px] md:bottom-[360px] w-32 sm:w-40 md:w-52 lg:w-72 xl:w-80 h-auto"
            />

            {/* Products bottom right stack */}
            <div className="absolute right-[50px] sm:right-[150px] md:right-[250px] top-[-10px] sm:top-[-15px] md:top-[-20px] flex items-end gap-2 sm:gap-4">
              <img
                src={boxLeftSrc}
                alt="Product Left"
                className="w-[200px] sm:w-[300px] md:w-[400px] h-auto drop-shadow"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom shadow divider */}
      <div className="w-full h-3" style={{ boxShadow: "0 6px 14px rgba(0,0,0,0.18) inset" }} />
    </section>
  );
};

export default SecOrderSection;


