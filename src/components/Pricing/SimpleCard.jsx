import React from 'react';
import { motion } from "framer-motion"
import { SlideRidgt } from '../../utility/animation';
function SimpleCard({ data }) {
    return (
      <div>
        <motion.div
          className="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm"
          variants={SlideRidgt(0.8)}
          initial="hidden"
          whileInView="visible"
        >
          {data.map((item, index) => (
            <div key={index}>
              <section>
                <h2 className="font-extrabold text-3xl text-center mb-2">{item.nombrePlan}</h2>
                <p className="opacity-60 text-center">Individual</p>
                <div className="flex flex-col items-center my-8">
                  <p className="font-extrabold text-4xl">{item.precio}</p>
                  <p className="text-sm opacity-60">/mes</p>
                </div>
              </section>
  
              <div className="flex flex-col gap-1">
                {item.beneficios?.map((beneficio, i) => (
                  <p key={i} className="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                      />
                    </svg>
                    {beneficio}
                  </p>
                ))}
                <div className="flex justify-center mt-8">
                  <button className="primary-btn">Inscribirse</button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  }
  
export default SimpleCard;