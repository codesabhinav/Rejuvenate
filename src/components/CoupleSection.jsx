import React from "react";


const CoupleSection = ({
  topPhoto = "src/assets/CoupleFir.png",
  bottomPhoto = "src/assets/CoupleSec.png",
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
    <section className="w-full bg-white py-2 md:py-4 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          
          <div className="relative mx-auto w-full max-w-xl">
          
            <img
              src={topPhoto}
              alt="Couple Top"
              className="w-[350px] h-[400px] rotate-[-14deg]  select-none pointer-events-none -mt-80 pr-12 mr-16"
            />
            
            <img
              src={bottomPhoto}
              alt="Couple Bottom"
              className="absolute left-20 top-5 w-[300px] h-auto rotate-[14deg] shadow-2xl select-none pointer-events-none"
            />
          </div>

          
          <div className="space-y-4 mt-24 -ml-36">
            {items.map((it, idx) => (
              <div key={idx} className="flex items-start gap-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#aa1541] text-white text-6xl font-extrabold shrink-0">
                  {idx + 1}
                </div>
                <p className="text-xl md:text-2xl text-[#282828] text-extrabold leading-snug">
                  {it.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-40 text-center">
          <p className="text-[#aa1541] font-semibold tracking-widest uppercase text-[24px]">
            STOP WORRYING ABOUT YOUR SEX LIFE AND START
          </p>
          <p className="text-[#aa1541] font-semibold tracking-widest uppercase text-[24px]">
            ENJOYING IT TO THE FULLEST WITH FOREX TODAY!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;


