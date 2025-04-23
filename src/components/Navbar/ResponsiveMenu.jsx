import { AnimatePresence , motion} from 'motion/react';
import React from 'react';
import {NavbarMenu} from "../../mockData/data"
function ResponsiveMenu({isMovile}) {
    return (
       <AnimatePresence mode='wait'>
        {
            isMovile && (
                <motion.div
                initial={{opacity: 0 , y:100}}
                animate={{opacity: 1, y:0}}
                exit={{opacity: 0, y:-100}}
                transition={{duration: .3}}
                className='absolute top-20 left-0 w-full h-screen z-[99999]'
                >
                    <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
                        {NavbarMenu.map((item)=>{
                                                return(
                                                    <ul className='flex flex-col justify-center items-center gap-10 cursor-pointer py-5'>
                                                    <li key={item.id} >
                                                        <a href={item.link}
                                                        className=''>
                                                            {item.title}
                                                        </a>
                                                    </li>

                                                    </ul>
                                                )
                                            })}


                      
                    </div>
                    
                </motion.div>
            )
        }

       </AnimatePresence>
    );
}

export default ResponsiveMenu;