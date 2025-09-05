import React from "react";

/*
  Second Order Section (headline + doctor + products)
*/

const SecOrderSection = ({
  doctorSrc = "/Doctor.png",
  boxLeftSrc = "/OrderSec.png",
  bgColor = "#efeff0",
}) => {
  return (
    <section
      className="w-full h-[600px]"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="">
          {/* Left copy */}
          <div>
            <h2 className="text-[40px] font-extrabold leading-tight text-[#424242]">
              EXPERIENCE RESTORED INTIMACY &
              <br /> CONFIDENCE FOR GREATER
              <br /> SATISFACTION.
            </h2>

            <p className="mt-6 text-[30px] text-[#828488]">
              Thanks to advanced herbal formulation and rapid action, <br />Play Tonight Capsules & Amero Gel work together to <br />enhance stamina, restore firmness, and help you enjoy <br />longer, more fulfilling intimate moments.
            </p>
          </div>

          {/* Right visuals */}
          <div className="relative min-h-[360px] lg:min-h-[520px]">
            {/* Doctor */}
            <img
              src={doctorSrc}
              alt="Doctor"
              className="absolute right-[32px] bottom-[360px] w-52 md:w-72 lg:w-80 h-auto"
            />

            {/* Products bottom right stack */}
            <div className="absolute right-[250px] top-[-20px] flex items-end gap-4">
              <img
                src={boxLeftSrc}
                alt="Product Left"
                className="w-[400px] h-auto drop-shadow"
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


