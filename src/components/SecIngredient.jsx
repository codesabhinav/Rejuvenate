import React from "react";

const SecIngredient = ({
  ingredients = [
    {
      name: "Quercus infectoria",
      image: "/Infectoria.png"
    },
    {
      name: "Phyllanthus emblica", 
      image: "/Emblica.png"
    },
    {
      name: "Saraca asoca",
      image: "/Asoca.png"
    },
    {
      name: "Alum",
      image: "/Alum.png"
    }
  ],
  ctaHeading = "READY TO ELEVATE YOUR SEX LIFE TO A HEALTHIER LEVEL?",
  ctaSubtext = "Get your Product now and start experiencing the benefits!",
  ctaButtonText = "ORDER NOW"
}) => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Ingredients Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-medium text-[#b01a24] mb-12">
            KEY INGREDIENTS
          </h2>
          
          {/* Ingredients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex flex-col items-center ">
                <div className="transform: scale(0.869527, 0.869527); transform-origin: 0px 0px; width: 256px; height: 256px;">
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[#7F7F7F] text-sm md:text-2xl text-center">
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
