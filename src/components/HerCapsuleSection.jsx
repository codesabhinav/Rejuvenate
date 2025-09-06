import React from "react";

const HerCapsuleSection = () => {
    return (
        <section className="bg-white py-0">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
               
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-0">
                    {/* Left intro */}
                    <div className="text-center md:text-right">
                        <h2 className="text-lg sm:text-xl md:text-[30px] font-semibold text-gray-900">
                            Introducing Ameora
                            Feminine Tightening Gel
                        </h2>
                        <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-lg md:text-[28px] leading-6 sm:leading-7 md:leading-8 text-gray-600">
                            Formulated with natural extracts,
                            trusted by thousands of women,
                            Ameora is designed to help you
                            restore firmness, improve elasticity,
                            and enjoy a renewed sense of
                            feminine confidence.
                        </p>
                    </div>

                    {/* Center image placeholder */}
                    <div className="flex justify-center">
                        <div className="w-full rounded flex items-center justify-center text-gray-500">
                            <span className="text-sm"><img src="WomenCapsules.png" alt="Capsule Image" className="bg-transparent w-32 h-32 sm:w-48 sm:h-48 md:w-full md:h-auto" /></span>
                        </div>
                    </div>

                    {/* Right benefits */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg sm:text-xl md:text-[30px] font-semibold text-gray-900">
                            Feel Youthful, Confident
                            & Satisfied Again!
                        </h3>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-[28px] leading-6 sm:leading-7 md:leading-8 text-gray-600">
                            Enhance your tightness,
                            sensitivity, and pleasure –
                            gently and effectively! Amero
                            ensures you can reconnect with
                            your partner and embrace
                            intimacy without hesitation.
                        </p>
                    </div>
                </div>

               
                <div className="text-center mt-6 sm:mt-8 md:mt-10 px-2 sm:px-4">
                    <h1 className="text-xl sm:text-2xl md:text-[40px] font-bold tracking-wide text-[#aa1824] uppercase">
                        EXPERIENCE THE BEST RESULTS WITH AMEORA™
                    </h1>
                    <p className="mt-2 text-lg sm:text-xl md:text-[35px] font-semibold tracking-wide text-gray-700">
                        AND ENJOY A MORE CONFIDENT, SATISFYING INTIMATE LIFE!
                    </p>
                    <p className="mt-2 text-sm sm:text-lg md:text-[25px] text-[#aa1824]">
                        Ameora is safe, easy to use, and free from harmful chemicals.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HerCapsuleSection;
