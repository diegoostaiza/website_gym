import React from 'react';
import { motion } from "framer-motion"
import { SlideLeft , SlideRidgt } from '../../utility/animation';
const Hero = () => {
    return (
        <>
        <section className="relative min-h-[650px] overflow-hidden">
            {/* VIDEO DE FONDO */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/video/bg-video.mp4"
                autoPlay
                muted
                loop
                playsInline        
            ></video>

            {/* CAPA OSCURA PARA TEXTO LEGIBLE */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

            {/* CONTENIDO ENCIMA DEL VIDEO */}
            <div className="container relative z-20 grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
                {/* INFORMACIÓN */}
                <div className="flex flex-col justify-center py-14 md:py-0 font-playFire overflow-hidden">
                    <div className="text-center md:text-left space-y-6">
                        <motion.h1 
                        variants={SlideLeft(0.6)}
                        initial= "hidden"
                        animate="visible"
                        className='text-5xl text-white lg:text-6xl font-bold leading-relaxed xl:leading-normal'>
                            Construye tu mejor <span className='text-primary'>versión</span>
                        </motion.h1>
                        <motion.p 
                        variants={SlideRidgt(1.2)}
                        initial= "hidden"
                        animate="visible"
                        className='text-xl space-x-2 text-gray-200 xl:max-w-[500px]'>
                        Aquí no hay excusas, solo ganas de subir de nivel. <br />¿Te unes o te lo sigues perdiendo?
                        </motion.p>
                        {/* BOTÓN */}
                        <motion.div
                         variants={SlideRidgt(1.5)}
                         initial= "hidden"
                         animate="visible"
                        
                        className="md:justify-start mt-4">
                            <button className='primary-btn'>Inscríbete Ahora</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Hero;