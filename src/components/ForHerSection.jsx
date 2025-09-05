import React from "react";

const ForHerSection = () => {
    return (
        <section className="max-w-7xl mx-auto bg-white text-center px-6 pb-10">

            <h2 className="text-3xl md:text-[90px] font-extrabold text-[#aa1824] mb-2">
                FOR HER 
            </h2>
            <h3 className="text-xl md:text-[50px] mt-11 font-semibold text-[#b8424b]">
                YOUR INTIMATE HEALTH MATTERS
            </h3>
            <p className="text-[40px] text-[#525252] mt-5 ">
                SO TAKE CONTROL OF YOUR FEMININE WELL-BEING
            </p>


            <p className="max-w-3xl mx-auto mt-2 text-[#818282] text-[19px] leading-relaxed">
                Did you know that many women silently experience changes
                in{" "}
                <span className="font-bold text-[20px] text-[#7e7e7e]">
                    vaginal firmness, even though they still desire closeness and satisfaction in their intimate life?
                </span>{" "}
                Research indicates the following:
            </p>


            <div className="grid grid-cols-2 md:grid-cols-4 my-10">
                <div className="h-28 w-72">
                    <h1 className="text-[55px] text-black">40%</h1>
                    <p className="text-[20px] text-[#818282] mt-1">
                        over 40% of women notice a
                        decline in vaginal tightness
                        after childbirth or with age.
                    </p>
                </div>
                <div className="h-28 w-72">
                    <h1 className="text-[55px] text-black">70%</h1>
                    <p className="text-[20px] text-[#818282] mt-1">
                        large number of women
                        avoid intimacy altogether
                        due to a lack of confidence.
                    </p>
                </div>

                <div className="h-28 w-76">
                    <h1 className="text-[55px] text-black">55%</h1>
                    <p className="text-[20px] text-[#818282] mt-1">
                        studies show that more than
                        half of women feel reduced
                        tightness affects their pleasure.
                    </p>
                </div>
                <div className="h-28 w-76">
                    <h1 className="text-[55px] text-black">35%</h1>
                    <p className="text-[20px] text-[#818282] mt-1">
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
