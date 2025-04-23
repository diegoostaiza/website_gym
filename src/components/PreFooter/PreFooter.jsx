import React from 'react';
import {motion} from 'framer-motion'
import { SlideRidgt } from '../../utility/animation';
function PreFooter(props) {
    return (
        <section class="text-gray-600 body-font bg-black  mt-12">
        <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
            <div
                class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h4
                    class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                   Sobre Nosotros
                </h4>
                <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                Ímpetu Fitness & Gym te ofrece las mejores instalaciones de entrenamiento en Babahoyo con entrenadores profesionales que garantizan los resultados que tanto esperabas.
                </p>
                <div class="flex justify-center">
                    <a href="#"
                        class="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded text-lg">Visitanos 
                    </a>
                </div>
            </div>
            <motion.div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6"
            variants={SlideRidgt(0.8)}
            initial="hidden"
            whileInView="visible"

            
            >
            <img className="object-cover object-center rounded" alt="hero" src="/img/local.webp"/>
            </motion.div>
        </div>
    </section>

 



    );
}

export default PreFooter;