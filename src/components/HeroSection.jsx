import React from 'react';
import { motion } from 'framer-motion';

const defaultItems = [
  { line1: "ISO", line2: "Certified", img: "ISO.png" },
  { line1: "FDA", line2: "Approved", img: "FDA.png" },
  { line1: "GMP", line2: "Certified", img: "GMP.png" },
  { line1: "100%", line2: "Ayurvedic", img: "Ayurvedic.png" },
  { line1: "Natural", line2: "Pure Herbs", img: "Natural.png" },
  { line1: "Specially", line2: "Formulated", img: "Specially.png" },
];

const HeroSection = ({ items = defaultItems, bgSrc = "bg.png" }) => {
  return (
    <div className="relative page-hero w-full flex h-[85vh] md:h-[calc(100vh-80px)]  bg-[#aa1541] md:bg-[#c2c7c9] "
    
    // style={{
    //   background: "#ff9696",
    //   backgroundImage:
    //     "linear-gradient(90deg,rgb(189, 20, 71) 0%, rgba(180, 58, 58, 1) 50%, rgba(143, 130, 130, 1) 61%, rgba(252, 252, 252, 1) 100%)",
    // }}
    >
      {/* Background Image - Desktop Only */}
      <motion.img 
        src={bgSrc} 
        alt="Pink Bg" 
        className="hidden md:block w-[1500px] mx-auto  h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Desktop Layout - Unchanged */}
      <div className="hidden md:block ">
        <motion.div 
          className="absolute top-0 left-0 w-full p-6 mt-3 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.h1 
            className="text-[70px] uppercase font-extrabold tracking-wide leading-tight text-white ml-10" 
            style={{ fontFamily: 'Bebas Neue' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Rediscover. Rejuvenate.
          </motion.h1>
          <motion.p 
            className="ml-10 text-2xl tracking-wide text-[#f5c755]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            pure ayurvedic wellness for a confident life
          </motion.p>

          {/* Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 mt-8 ml-10 md:pr-[calc(100%-500px)] gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            {items.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col font-[300] items-center gap-0"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
              >
                <div className="w-20 h-20">
                  <img
                    src={item.img}
                    alt={(item.line1 || '') + ' ' + (item.line2 || '')}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center leading-tight -mt-1">
                  <p className="text-white text-lg leading-tight">{item.line1 || ''}</p>
                  <p className="text-white text-lg leading-tight">{item.line2 || ''}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Center Div - Desktop */}
        <motion.div 
          className="absolute bottom-[-65px] left-1/2 transform -translate-x-1/2 bg-[#aa1541] h-[30%] w-[1200px] max-w-[100%] z-50 flex flex-col md:flex-row items-center justify-between px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          {/* Box 1 */}
          <motion.div 
            className="border-2 border-white p-3 w-[24%] h-[80%] flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.3 }}
          >
            <h1 className="text-white mb-2 font-bold text-xl text-center">
              FREE SHIPPING
            </h1>
            <div className="flex items-center justify-between">
              <img src="Truck.png" alt="Icon" className="w-24 h-24 object-contain font-bold" />
              <p className="text-white text-sm ml-2 font-[500]">
                Get free shipping on all orders above $50. Shop Now.
              </p>
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div 
            className="border-2 border-white p-5 w-[24%] h-[80%] flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.5 }}
          >
            <h1 className="text-white mb-2 font-bold text-xl text-center">
              24X7 SUPPORT
            </h1>
            <div className="flex items-center justify-between">
              <img src="HeadPhone.png" alt="Icon" className="w-20 h-20 object-contain" />
              <p className="text-white text-sm ml-2 font-[500]">
                Our team is always ready to support 24x7.
              </p>
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div 
            className="border-2 border-white p-5 w-[24%] h-[80%] flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.7 }}
          >
            <h1 className="text-white mb-2 font-bold text-xl text-center">
              100% GENUINE
            </h1>
            <div className="flex items-center justify-between">
              <img src="Ok.png" alt="Icon" className="w-20 h-20 object-contain" />
              <p className="text-white text-sm ml-2 font-[500]">
                Our products are
                100% genuine and
                ethically sourced.
              </p>
            </div>
          </motion.div>

          {/* Box 4 */}
          <motion.div 
            className="border-2 border-white p-5 w-[24%] h-[80%] flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.9 }}
          >
            <h1 className="text-white mb-2 font-bold text-xl text-center">
              EASY RETURN
            </h1>
            <div className="flex items-center justify-between">
              <img src="Clock.png" alt="Icon" className="w-20 h-20 object-contain" />
              <p className="text-white text-sm ml-2 font-[500]">
                Easy return incase
                you don't like it or
                have issues
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile & Tablet Layout - Completely Different */}
      <div className="md:hidden">
        {/* Mobile Hero Content */}
        <motion.div 
          className="absolute top-0 left-0 w-full p-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl uppercase font-extrabold tracking-wide leading-tight text-white text-center mb-4" 
            style={{ fontFamily: 'Bebas Neue' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Rediscover. Rejuvenate.
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl tracking-wide text-[#f5c755] text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            pure ayurvedic wellness for a confident life
          </motion.p>

          {/* Mobile Certifications - Horizontal Scroll */}
          <motion.div 
            className="flex overflow-x-auto gap-6 pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            {items.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 flex flex-col items-center gap-2 min-w-[80px]"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src={item.img}
                    alt={(item.line1 || '') + ' ' + (item.line2 || '')}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white text-xs sm:text-sm leading-tight">{item.line1 || ''}</p>
                  <p className="text-white text-xs sm:text-sm leading-tight">{item.line2 || ''}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mobile Bottom Features - Stacked Cards */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full bg-[#aa1541] p-4 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          {/* Mobile Feature Cards */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.3 }}
          >
            <div className="flex items-center gap-3">
              <img src="Truck.png" alt="Icon" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-white font-bold text-lg">FREE SHIPPING</h3>
                <p className="text-white/90 text-sm">Get free shipping on all orders above $50</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
          >
            <div className="flex items-center gap-3">
              <img src="HeadPhone.png" alt="Icon" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-white font-bold text-lg">24X7 SUPPORT</h3>
                <p className="text-white/90 text-sm">Our team is always ready to support 24x7</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.7 }}
          >
            <div className="flex items-center gap-3">
              <img src="Ok.png" alt="Icon" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-white font-bold text-lg">100% GENUINE</h3>
                <p className="text-white/90 text-sm">Our products are 100% genuine and ethically sourced</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.9 }}
          >
            <div className="flex items-center gap-3">
              <img src="Clock.png" alt="Icon" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-white font-bold text-lg">EASY RETURN</h3>
                <p className="text-white/90 text-sm">Easy return in case you don't like it or have issues</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
