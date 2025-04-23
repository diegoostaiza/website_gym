import React from 'react';
import SimpleCard from './SimpleCard';
import ProCard from './ProCard';
import { PlanesAnual, PlanesIndivulas } from '../../mockData/planes';

function PricingCard (props) {
    return (
        <div id="planes" className="container grid lg:grid-cols-3 px-8 gap-10 text-zinc-800 mt-20 mb-10 font-playFire">    
            <SimpleCard data={PlanesIndivulas} />
            <ProCard/>
            <SimpleCard data={PlanesAnual} />
           
        </div>
        
    );
}

export default PricingCard ;