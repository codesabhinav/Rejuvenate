import React from "react";

const ForHerSection = () => {
    return (
        <section className="max-w-7xl mx-auto bg-white text-center px-3 sm:px-4 md:px-6 pb-6 sm:pb-8 md:pb-10">

            <h2 className="text-2xl sm:text-3xl md:text-[90px] font-extrabold text-[#aa1824] mb-2">
                FOR HER 
            </h2>
            <h3 className="text-lg sm:text-xl md:text-[50px] mt-6 sm:mt-8 md:mt-11 font-semibold text-[#b8424b]">
                YOUR INTIMATE HEALTH MATTERS
            </h3>
            <p className="text-lg sm:text-2xl md:text-[40px] text-[#525252] mt-3 sm:mt-4 md:mt-5">
                SO TAKE CONTROL OF YOUR FEMININE WELL-BEING
            </p>


            <p className="max-w-3xl mx-auto mt-2 text-[#818282] text-sm sm:text-base md:text-[19px] leading-relaxed px-2 sm:px-4">
                Did you know that many women silently experience changes
                in{" "}
                <span className="font-bold text-sm sm:text-base md:text-[20px] text-[#7e7e7e]">
                    vaginal firmness, even though they still desire closeness and satisfaction in their intimate life?
                </span>{" "}
                Research indicates the following:
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-6 sm:my-8 md:my-10 gap-3 sm:gap-4">
                <div className="h-auto sm:h-28 w-full sm:w-72">
                    <h1 className="text-3xl sm:text-4xl md:text-[55px] text-black">40%</h1>
                    <p className="text-sm sm:text-base md:text-[20px] text-[#818282] mt-1">
                        over 40% of women notice a
                        decline in vaginal tightness
                        after childbirth or with age.
                    </p>
                </div>
                <div className="h-auto sm:h-28 w-full sm:w-72">
                    <h1 className="text-3xl sm:text-4xl md:text-[55px] text-black">70%</h1>
                    <p className="text-sm sm:text-base md:text-[20px] text-[#818282] mt-1">
                        large number of women
                        avoid intimacy altogether
                        due to a lack of confidence.
                    </p>
                </div>

                <div className="h-auto sm:h-28 w-full sm:w-76">
                    <h1 className="text-3xl sm:text-4xl md:text-[55px] text-black">55%</h1>
                    <p className="text-sm sm:text-base md:text-[20px] text-[#818282] mt-1">
                        studies show that more than
                        half of women feel reduced
                        tightness affects their pleasure.
                    </p>
                </div>
                <div className="h-auto sm:h-28 w-full sm:w-76">
                    <h1 className="text-3xl sm:text-4xl md:text-[55px] text-black">35%</h1>
                    <p className="text-sm sm:text-base md:text-[20px] text-[#818282] mt-1">
                        many report that self-
                        consciousness prevents them
                        from enjoying fulfilling intimacy.
                    </p>
                </div>
            </div>


        </section>
    );
};

export default ForHerSection;
