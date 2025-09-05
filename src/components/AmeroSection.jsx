import React from "react";

const AmeroSection = ({
  logoSrc = "src/assets/Amero Logo.png",
  productBoxSrc = "src/assets/WomenCapsules.png",
  productJarSrc = "src/assets/WomenCapsules.png",
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
     
      <div className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={logoSrc}
                alt="Amero Logo"
                className="w-56 h-44 object-contain"
              />
            </div>
            
            
            <div className="flex-1">
              <h2 className="text-[36px] font-semibold text-[#b01a24] leading-tight mb-2">
                {heading}
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl">
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
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex items-center h-[280px]">
            {/* Left Part */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-16">
                {benefits
                  .filter(benefit => benefit.position.startsWith('left'))
                  .map((benefit, index) => (
                    <div key={index} className="text-center lg:text-right">
                      <h3 className="text-3xl font-semibold text-[#b01a24]">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 text-[24px]">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Product Image */}
            <div className="flex-shrink-0">
              <img
                src={productBoxSrc}
                alt="Amero Product"
                className="w-full h-[500px] object-contain mt-[110px] scale-100"
              />
            </div>

            {/* Right Part*/}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-16">
                {benefits
                  .filter(benefit => benefit.position.startsWith('right'))
                  .map((benefit, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <h3 className="text-3xl font-semibold text-[#b01a24] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 text-[17px]">
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
