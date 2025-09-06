import React from "react";

const Footer = ({
  disclaimer = "Due to limited availability, product sales are restricted to a maximum of 250 units per day. Please note that the efficacy and safety of Play Tonight and Amero have not been evaluated by the Food and Drug Administration (FDA). The FDA evaluates foods and drugs, not dietary supplements like these. These products are not intended to diagnose, prevent, treat, or cure any disease.",
  healthNotice = "These products are formulated to complement a healthy lifestyle and regular wellness routine. Always consult with a qualified healthcare professional before starting any new supplement, topical gel, or diet plan to ensure it aligns with your personal health needs.",
  rights = "© 2025, Play Tonight & Amero. All Rights Reserved.",
  terms = "Terms & Conditions | Privacy Policy | Contact Us"
}) => {
  return (
    <footer className="w-full bg-black text-white py-4 sm:py-5 md:py-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
     
        <div className="text-center mb-4 sm:mb-5 md:mb-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-[24px] leading-relaxed mb-2 sm:mb-3">
            {disclaimer}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-[24px] leading-relaxed mb-2 sm:mb-3">
            {healthNotice}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-[24px] leading-relaxed mb-2 sm:mb-3">
            {rights}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-[24px] leading-relaxed">
            {terms}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
