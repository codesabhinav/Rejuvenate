import React from "react";


const CoupleSection = ({
  topPhoto = "CoupleFir.png",
  bottomPhoto = "CoupleSec.png",
  items = [
    {
      title:
        "Helps improve stamina and endurance for more powerful performance.",
    },
    {
      title:
        "Supports natural firmness and sensitivity for deeper satisfaction.",
    },
    {
      title:
        "Boosts confidence and intimacy, allowing you to connect at your best.",
    },
  ],
}) => {
  return (
    <section className="w-full bg-white py-2 md:py-4 mt-6 sm:mt-8 md:mt-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          
          <div className="relative mx-auto w-full max-w-xl">
          
            <img
              src={topPhoto}
              alt="Couple Top"
              className="w-[200px] sm:w-[280px] md:w-[350px] h-[250px] sm:h-[320px] md:h-[400px] rotate-[-14deg] select-none pointer-events-none -mt-40 sm:-mt-60 md:-mt-80 pr-6 sm:pr-8 md:pr-12 mr-8 sm:mr-12 md:mr-16"
            />
            
            <img
              src={bottomPhoto}
              alt="Couple Bottom"
              className="absolute left-10 sm:left-16 md:left-20 top-3 sm:top-4 md:top-5 w-[100px] sm:w-[240px] md:w-[300px] h-auto rotate-[14deg] shadow-2xl select-none pointer-events-none"
            />
          </div>

          
          <div className="space-y-3 sm:space-y-4 mt-12 sm:mt-16 md:mt-24 -ml-0 sm:-ml-20 md:-ml-36">
            {items.map((it, idx) => (
              <div key={idx} className="flex items-start gap-3 sm:gap-4 md:gap-6">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#aa1541] text-white text-2xl sm:text-4xl md:text-6xl font-extrabold shrink-0">
                  {idx + 1}
                </div>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#282828] text-extrabold leading-snug">
                  {it.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 sm:mt-30 md:mt-40 text-center px-2 sm:px-4">
          <p className="text-[#aa1541] font-semibold tracking-widest uppercase text-sm sm:text-lg md:text-[24px]">
            STOP WORRYING ABOUT YOUR SEX LIFE AND START
          </p>
          <p className="text-[#aa1541] font-semibold tracking-widest uppercase text-sm sm:text-lg md:text-[24px]">
            ENJOYING IT TO THE FULLEST WITH FOREX TODAY!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;


