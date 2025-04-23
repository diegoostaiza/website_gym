import React from 'react';
import { motion } from "framer-motion"
import { FadeUp, SlideRidgt } from '../../utility/animation';
import { PlanesPopular } from '../../mockData/planes';
function ProCarf(props) {
    return (
        <div>
            <motion.div
            class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 p-8 rounded-lg shadow-lg relative border-8 border-orange-300 max-w-sm"
             variants={SlideRidgt(0.6)}
                     initial= "hidden"
                     whileInView="visible"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                class="w-20 h-20 absolute -top-11 -left-11 fill-red-400">
                <path fill-rule="evenodd"
                    d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                    clip-rule="evenodd" ></path>
            </svg>
            <p class="mono text-sm absolute -top-4 bg-primary text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded">
                POPULAR
            </p>

            {PlanesPopular.map((item)=>{
                return(
                    <>
                     <div>
                <div class="flex gap-4 justify-center">
                    <p class="font-extrabold text-3xl mb-2">{item.nombrePlan}
    
                    </p>
                </div>
                <p class="opacity-60 text-center">Individual
    
                </p>
                <p class="opacity-60 text-center">
                </p>
                <div class="flex gap-4 justify-center">
                    <div class="flex flex-col items-center my-8">
                        <p class="font-extrabold text-4xl">{item.precio}
    
                        </p>
                        <p class="text-sm opacity-60">/mes
    
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-1">
             {item.beneficios?.map((beneficio, i) =>{
                return(                   <p key={i} class="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true" class="w-4 h-4 mr-2">
                    <path fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"></path>
                     </svg>
                     <b>{beneficio}</b><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         aria-hidden="true" class="w-4 h-4 ml-1 fill-orange-300">
                        
                     </svg>
                     
                 </p>)
             })}
             
                <div class="flex justify-center mt-8">
                    <button class="primary-btn">
                        Inscríbete Ahora
                        </button>
                </div>
            </div>
                    
                    </>
                )
            })}



        </motion.div>
            
        </div>
    );
}

export default ProCarf;