import React from "react";

const CapsuleSection = () => {
  return (
    <section className="bg-white py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="grid md:grid-cols-3 items-center">
          {/* Left intro */}
          <div className="text-right">
            <h2 className="text-[30px] font-semibold text-gray-900">
              Introducing Play Tonight Performer Virility Capsules
            </h2>
            <p className="mt-6 text-[28px] leading-8 text-gray-600">
              Crafted with a blend, trusted formula by more than one million user. Play Tonight is designed to help you experience a more intense and powerful Sex Life.
            </p>
          </div>

          {/* Center image */}
          <div className="flex justify-center">
            <div className="w-full flex items-center justify-center text-gray-500">
              <span className="text-sm"><img src="/Capsules.png" alt="Capsule Image" className="bg-transparent"/></span>
            </div>
          </div>

          {/* Right benefits */}
          <div className="text-left">
            <h3 className="text-[30px] font-semibold text-gray-900">
              Boost your stamina,
              size, and virility—quickly
              and effectively!
            </h3>
            <p className="mt-4 text-[28px] leading-8 text-gray-600">
              Ensure you can satisfy your partner anytime and never let sexual dysfunction hold you back again.
            </p>
          </div>
        </div>

        {/* Bottom headlines */}
        <div className="mt-10 text-center">
          <h1 className="text-[40px] #810d29 font-semibold tracking-wide text-[#aa1824] uppercase">
            Achieve Maximum Results with Play Tonight™
          </h1>
          <p className="mt-2 text-[35px]  tracking-wide text-gray-700">
            Enjoy Long-Lasting Performance!
          </p>
          <p className="mt-2 text-[25px] text-[#aa1824]">
            Play Tonight is completely safe to use and free from any harmful side effects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CapsuleSection;
