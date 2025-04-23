import React, { useState } from 'react';
import {NavbarMenu} from "../../mockData/data"
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import ResponsiveMenu from './ResponsiveMenu';
const Navbar = () => {
    const [isMovile, setIsMovile] = useState(false)

    return (
      <>
       <nav>
        <div className="container flex justify-between items-center py-4 ">
            {/* LOGO */}
            <div className=" text-1xl md:text-2xl flex items-center gap-2 font-bold  uppercase ">
                <img src="/img/logo.webp" alt="logo impetud gym" className='w-[50px] h-[50px] rounded-full' />
                <p>Ímpetu</p>
                <p className='text-secondary'>Gym</p>
            </div>
            {/* MENU */}
            <div className="hidden md:block">
                <ul className='flex items-center gap-6 text-gray-600 '>
                    {NavbarMenu.map((item)=>{
                        return(
                            <li key={item.id}>
                                <a href={item.link}
                                className='inline-block py-1
                                px-3 hover:text-primary
                                font-semibold'>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* ICONOS */}
            <div className="flex items-center gap-2">
                <button className='text-2xl hover:bg-primary
                hover:text-white rounded-full p-2 duration-200 '>
                    <CiSearch/>
                </button>
                <button className='text-2xl hover:bg-primary
                hover:text-white rounded-full p-2 duration-200'>
                    <RiShoppingCartLine/>
                </button>
                <button className='hidden md:block font-semibold px-4 py-2 hover:bg-primary
                hover:text-white border-2 border-primary rounded-full p-2 duration-200'>
                   Inscríbete
                </button>
            </div>
            {/* MOBILE */}
            <div className="md:hidden" onClick={()=>setIsMovile(!isMovile)}>
                <CiMenuFries  className='cursor-pointer text-3xl'/>
            </div>
        </div>
       </nav>

       {/* SECCION MOBILE */}
       <ResponsiveMenu isMovile={isMovile} />
      </>
    );
};

export default Navbar;