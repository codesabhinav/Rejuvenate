// import React from "react";

// /*
//   DoubleCapsuleSection
//   - Heading + description
//   - Center product image
//   - Two feature bullets on the left and two on the right
//   Pass your own assets/labels via props.
// */

// const DoubleCapsuleSection = ({
//   logoSrc = "/Logo.png",
//   productSrc = "/Capsules.png",
//   heading = "2 CAPSULES AT A TIME FOR MAXIMUM PERFORMANCE",
//   subText =
//     "Tried and trusted, Play Tonight capsules are made to restore stamina, power, and confidence – helping men achieve a more satisfying intimate life.",
//   featuresLeft = [
//     { title: "Enhanced Vitality", text: "Naturally boosts stamina and energy." },
//     { title: "Improved Endurance", text: "Supports longer‑lasting performance." },
//   ],
//   featuresRight = [
//     { title: "Stronger Erections", text: "Helps you stay firm whenever you desire." },
//     { title: "Boosted Confidence", text: "Restores self‑assurance in intimacy." },
//   ],
// }) => {
//   return (
//     <section className="w-full bg-white">
//       {/* Top header */}
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex items-start gap-6">
//           {logoSrc && (
//             <img
//               src={logoSrc}
//               alt="Logo"
//               className="w-48 h-48 object-contain"
//             />
//           )}
//           <div>
//             <h2 className="text-[#aa1824] font-bold leading-tight text-[36px] mt-5">
//               {heading}
//             </h2>
//             <p className="mt-2 text-[27px] text-[#928e8b]">
//               {subText}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div 
//         className="w-full mt-4 relative"
//         style={{
//           backgroundImage: 'url(/BannerRose.png)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}
//       >
//         <div className="px-4 sm:px-6 lg:px-8 ">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center py-8">
//             {/* Left features */}
//             <div className="order-2 lg:order-1 space-y-10 text-right">
//               {featuresLeft.map((f, i) => (
//                 <div key={i}>
//                   <h3 className="text-[#b83a5f] font-bold text-4xl mb-2">
//                     {f.title}
//                   </h3>
//                   <p className="text-black text-[19px]">{f.text}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Center product image */}
//             <div className="order-1 lg:order-2 flex justify-center">
//               <img
//                 src={productSrc}
//                 alt="Product"
//                 className="w-[800px] h-auto drop-shadow-2xl"
//               />
//             </div>

//             {/* Right features */}
//             <div className="order-3 space-y-10">
//               {featuresRight.map((f, i) => (
//                 <div key={i}>
//                   <h3 className="text-[#b83a5f] font-bold text-4xl mb-2">
//                     {f.title}
//                   </h3>
//                   <p className="text-black text-[19px]">{f.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

      
//     </section>
//   );
// };

// export default DoubleCapsuleSection;


import React from "react";

const DoubleCapsuleSection = ({
  logoSrc = "/Logo.png",
  productBoxSrc = "/Capsules.png",
  productJarSrc = "/WomenCapsules.png",
  heading = "2 CAPSULES AT A TIME FOR MAXIMUM PERFORMANCE",
  description = "Tried and trusted, Play Tonight capsules are made to restore stamina, power, and confidence – helping men achieve a more satisfying intimate life.",
  benefits = [
    {
      title: "Enhanced Vitality",
      description: "Naturally boosts stamina and energy.",
      position: "left-top"
    },
    {
      title: "Improved Endurance", 
      description: "Supports longer‑lasting performance.",
      position: "left-bottom"
    },
    {
      title: "Stronger Erections",
      description: "Helps you stay firm whenever you desire.",
      position: "right-top"
    },
    {
      title: "Boosted Confidence",
      description: "Restores self‑assurance in intimacy.",
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
              <h2 className="text-[36px] font-semibold text-[#AA1440] leading-tight mb-2">
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
        className="w-full bg-[#FFEFF4]"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-36">
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
                className="w-full h-[500px] object-contain mt-[40px] scale-110"
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

export default DoubleCapsuleSection;


