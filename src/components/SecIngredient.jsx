import React from "react";

const SecIngredient = ({
  ingredients = [
    {
      name: "Quercus infectoria",
      image: "Infectoria.png"
    },
    {
      name: "Phyllanthus emblica", 
      image: "Emblica.png"
    },
    {
      name: "Saraca asoca",
      image: "Asoca.png"
    },
    {
      name: "Alum",
      image: "Alum.png"
    }
  ],
  ctaHeading = "READY TO ELEVATE YOUR SEX LIFE TO A HEALTHIER LEVEL?",
  ctaSubtext = "Get your Product now and start experiencing the benefits!",
  ctaButtonText = "ORDER NOW"
}) => {
  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-10">
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

    </section>
  );
};

export default SecIngredient;
