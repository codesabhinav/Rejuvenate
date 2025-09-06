import React from "react";

const IngredientsSection = ({
  ingredients = [
    {
      name: "Maca Root Extract",
      image: "Root.png"
    },
    {
      name: "Panax Ginseng", 
      image: "Ginseng.png"
    },
    {
      name: "Tribulus Terrestris",
      image: "Tribulus.png"
    },
    {
      name: "Ashwagandha Extract",
      image: "Ashwagandha.png"
    }
  ],
  ctaHeading = "READY TO ELEVATE YOUR SEX LIFE TO A HEALTHIER LEVEL?",
  ctaSubtext = "Get your Product now and start experiencing the benefits!",
  ctaButtonText = "ORDER NOW"
}) => {
  return (
    <section className="w-full bg-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Key Ingredients Section */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#b01a24] mb-8 sm:mb-10 md:mb-12">
            KEY INGREDIENTS
          </h2>
          
          {/* Ingredients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[#7F7F7F] text-xs sm:text-sm md:text-lg lg:text-2xl text-center mt-2 sm:mt-3">
                  {ingredient.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36 overflow-hidden"
        style={{
          backgroundImage: 'url(Strip.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-3 sm:px-4 md:px-6">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight mt-2 sm:mt-4 md:mt-6">
            {ctaHeading}
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70">
            {ctaSubtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
