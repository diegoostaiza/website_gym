import React from 'react';
import { motion } from "framer-motion"
import { SlideLeft , SlideRidgt,FadeUp} from '../../utility/animation';
const Banner = ({imagen, title, subtitle}) => {
    return (
        <div className='container bg-[#faf9f9] rounded-2xl font-playFire'>
            <div className="grid grid-cols-1 md:grid-cols-2
            space-y-6 md:space-y-0 py-14">
                <motion.div
            variants={SlideRidgt(0.6)}
                                   initial= "hidden"
                                   whileInView="visible"     
                className="flex justify-center items-center">
                    <img className='w-[500px] h-[500px] rounded-xl ' src={imagen} alt="" />
                </motion.div>
                <motion.div
                 variants={FadeUp(0.6)}
                 initial= "hidden"
                 whileInView="visible" 
                
                
                className="flex flex-col justify-center text-center md:text-left space-y-4
                lg:max-w-[500px] px-4">
                    <p className='text-2xl lg:text-4xl
                    font-bold capitalize font-playFire'>{title}</p>
                    <p className='text-left'>{subtitle}</p>
                    <div className="flex justify-center md:justify-start">
                        <button className='primary-btn'>Unirse</button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;