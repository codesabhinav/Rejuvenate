import React from 'react'
import HeroSection from './components/HeroSection'
import ForHimSection from './components/ForHimSection'
import CapsuleSection from './components/CapsuleSection'
import ForHerSection from './components/ForHerSection'
import OrderSection from './components/OrderSection'
import HerCapsuleSection from './components/HerCapsuleSection'
import SecOrderSection from './components/SecOrderSection'
import CoupleSection from './components/CoupleSection'
import DoubleCapsuleSection from './components/DoubleCapsuleSection'
import IngredientsSection from './components/IngredientsSection'
import AmeroSection from './components/AmeroSection'
import Footer from './components/Footer'
import SecIngredient from './components/SecIngredient'
import TestimonialsCarousel from './components/TestimonialsCarousel'


function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ForHimSection /> 
      <CapsuleSection/>
      <img src="src/assets/Banner.png" alt="For Her Banner" className="mt-2 w-full h-auto" />
      <ForHerSection />
      <HerCapsuleSection/>
      <OrderSection />
      <SecOrderSection/>
      <CoupleSection/>
      <TestimonialsCarousel />
      <DoubleCapsuleSection />
      <IngredientsSection />
      <AmeroSection />
      <SecIngredient />
      <Footer />
    </div>
  )
}
export default App
