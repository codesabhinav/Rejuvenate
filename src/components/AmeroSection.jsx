import React from "react";

const AmeroSection = ({
  logoSrc = "Amero Logo.png",
  productBoxSrc = "WomenCapsules.png",
  productJarSrc = "WomenCapsules.png",
  heading = "A SMALL DOSE FOR LASTING INTIMATE CONFIDENCE",
  description = "Specially crafted for women, Amero gel helps restore natural tightness, freshness, and youthful confidence – enhancing pleasure and closeness.",
  benefits = [
    {
      title: "Restored Tightness",
      description: "Revitalizes firmness and elasticity.",
      position: "left-top"
    },
    {
      title: "Increased Sensitivity", 
      description: "Enhances natural pleasure and arousal.",
      position: "left-bottom"
    },
    {
      title: "Youthful Confidence",
      description: "Makes you feel fresher and more assured.",
      position: "right-top"
    },
    {
      title: "Better Intimacy",
      description: "Strengthens connection with your partner.",
      position: "right-bottom"
    }
  ]
}) => {
  return (
    <section className="w-full bg-white">
     
      <div className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            {/* Logo */}
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <img
                src={logoSrc}
                alt="Amero Logo"
                className="w-40 h-32 sm:w-48 sm:h-36 md:w-56 md:h-44 object-contain"
              />
            </div>
            
            
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold text-[#b01a24] leading-tight mb-2">
                {heading}
              </h2>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>


      <div 
        className="w-full"
        style={{
          backgroundImage: 'url(/BannerRose.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full p-2 sm:p-4 md:p-6 lg:p-8 mb-16 sm:mb-18 md:mb-20">
          <div className="flex flex-col lg:flex-row items-center h-auto lg:h-[280px] gap-8 lg:gap-0">
            {/* Left Part */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16">
                {benefits
                  .filter(benefit => benefit.position.startsWith('left'))
                  .map((benefit, index) => (
                    <div key={index} className="text-center lg:text-right">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#b01a24]">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 text-sm sm:text-lg md:text-[24px]">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Product Image */}
            <div className="flex-shrink-0 order-first lg:order-none">
              <img
                src={productBoxSrc}
                alt="Amero Product"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-full lg:h-[500px] object-contain mt-0 sm:mt-8 md:mt-[110px] scale-100"
              />
            </div>

            {/* Right Part*/}
            <div className="flex-1 w-full lg:w-auto">
              <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16">
                {benefits
                  .filter(benefit => benefit.position.startsWith('right'))
                  .map((benefit, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#b01a24] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 text-sm sm:text-base md:text-[17px]">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmeroSection;
