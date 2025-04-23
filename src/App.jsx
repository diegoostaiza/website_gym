import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Equipaments from './components/Equipaments/Equipaments'
import Banner from './components/Banner/Banner'
import PricingCard from "./components/Pricing/PricingCard";
import Img from "/img/bannerImpetud.webp"
import Trainnes from './components/Trainners/Trainnes'
import PreFooter from './components/PreFooter/PreFooter'
import Footer from './components/Footer/Footer'

const BannerData = {
  imagen: Img,
  title: "ÍMPETU",
  subtitle:
    "Donde nacen los guerreros. Aquí no vienes solo a mover pesas, vienes a construir carácter, a romper tus límites y a transformar tu vida. Somos más que un gimnasio, somos una comunidad que respira disciplina, constancia y pasión."
};



const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Equipaments/>
      <Banner {...BannerData}/>
      <PricingCard />
      <Trainnes/>
      <PreFooter/>
      <Footer/>

    </div>
  )
}

export default App
