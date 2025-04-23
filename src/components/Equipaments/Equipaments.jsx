import React from 'react';
import { FaDumbbell, FaPeopleCarry, FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp, GiMuscleUp, GiGymBag, GiShinyApple } from "react-icons/gi";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import { motion } from "framer-motion"
import { SlideLeft } from '../../utility/animation';

function Equipaments(props) {

    const EquipamentsData = [
        {
          id: 1,
          name: "Tu gym, tu poder",
          icon: <GrYoga />,
          desc: "Accede a más de 300 máquinas de última generación en un ambiente premium y al mejor precio.",
          delay: 0.2,
        },
        {
          id: 2,
          name: "Espacios que inspiran",
          icon: <FaDumbbell />,
          desc: "Instalaciones modernas con más de 500 m², diseñadas para tu máximo rendimiento.",
          delay: 0.3,
        },
        {
          id: 3,
          name: "Entrenamiento estilo guerrero",
          icon: <GiWeightLiftingUp />,
          desc: "Clases y rutinas de alto impacto para quienes buscan superarse día a día.",
          delay: 0.4,
        },
        {
          id: 4,
          name: "Comunidad imparable",
          icon: <FaPeopleCarry />,
          desc: "Eventos, retos y entrenamientos grupales que te motivan a dar siempre más.",
          delay: 0.5,
        },
        {
          id: 5,
          name: "Coaching personalizado",
          icon: <MdOutlineFitnessCenter />,
          desc: "Nuestros entrenadores te guían paso a paso en tu camino a la grandeza.",
          delay: 0.6,
        },
        {
          id: 6,
          name: "Nutrición para campeones",
          icon: <GiShinyApple />,
          desc: "Asesoría nutricional especializada para potenciar tus resultados.",
          delay: 0.7,
        },
        {
          id: 7,
          name: "Todo lo que necesitas",
          icon: <GiGymBag />,
          desc: "Equipamiento, lockers, duchas y más... para una experiencia completa.",
          delay: 0.8,
        },
    ]

    return (
        <div>
            <div className="container mt-5 p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playFire">
                <div className="space-y-3 p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    ¿Por qué elegirnos?
                </h2>
                <p className="text-gray-600">
                    No solo entrenas, te transformas. Creamos espacios únicos donde cuerpo y mente se fortalecen, para alcanzar tu mejor versión.
                </p>
                </div>

                    {
                        EquipamentsData.map((item) => {
                            return(
                                <motion.div 
                                 variants={SlideLeft(item.delay)}
                                    initial= "hidden"
                                    whileInView="visible"

                                
                                className="space-y-4 p-6 bg-[rgb(247,245,245)] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]">

                                <div className="flex justify-center">
                                <div className="text-4xl text-primary">{item.icon}</div>
                                </div>

                                    <p className='text-2xl font-semibold '>{item.name}</p>
                                    <p className='text-gray-500'>{item.desc}</p>
                                </motion.div>
                            )
                        })

                    }
                </div>
            </div>
        </div>
    );
}

export default Equipaments;