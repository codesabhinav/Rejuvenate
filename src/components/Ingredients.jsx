import React from "react";

const IngredientsSection = ({
  ingredients = [
    {
      name: "Maca Root Extract",
      image: "/Root.png"
    },
    {
      name: "Panax Ginseng", 
      image: "/Ginseng.png"
    },
    {
      name: "Tribulus Terrestris",
      image: "/Tribulus.png"
    },
    {
      name: "Ashwagandha Extract",
      image: "/Ashwagandha.png"
    }
  ],
  ctaHeading = "READY TO ELEVATE YOUR SEX LIFE TO A HEALTHIER LEVEL?",
  ctaSubtext = "Get your Product now and start experiencing the benefits!",
  ctaButtonText = "ORDER NOW"
}) => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Ingredients Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#b01a24] mb-12">
            KEY INGREDIENTS
          </h2>
          
          {/* Ingredients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 shadow-lg border-4 border-black">
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm md:text-base font-medium text-center">
                  {ingredient.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="relative w-full h-44 overflow-hidden"
        style={{
          backgroundImage: 'url(/Strip.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            {ctaHeading}
          </h3>
          <p className="text-lg md:text-2xl text-white/70 mb-6">
            {ctaSubtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
