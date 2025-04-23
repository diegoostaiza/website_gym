import React from 'react';
import { Trainers } from '../../mockData/traines';
import { motion } from "framer-motion"
import { SlideLeft } from '../../utility/animation';
function Trainnes(props) {
    return (
        <>
          

<section id='entrenadores' class="bg-white container font-playFire">
    <div class="container mx-auto max-w-7xl">
   
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-primary">Nuestros Entrenadores</h2>
        <div class="h-1 w-20 bg-gradient-to-rmx-auto mb-2 rounded-full"></div>
        <p class="text-gray-600 text-lg"> Los que estaran listos para impulsarte a dar lo mejor de ti en cada entrenamiento.</p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

      {Trainers.map((item)=>{
        return(

            <motion.div
            variants={(SlideLeft(0.8))}
            initial="hidden"
            whileInView="visible"
            class="group bg-[#faf9f9] rounded-sm">

            <div class="relative overflow-hidden rounded-xl mb-4">
              <img src={item.image} alt={item.nameTrainer} class="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
              </div>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-800">{item.nameTrainer}</h3>
              <p class="text-primary/80 font-medium">{item.profesion}</p>
              <p class="text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        )


       })}  
    
       
      </div>
      
 
    </div>
  </section>

        </>
    );
}

export default Trainnes;