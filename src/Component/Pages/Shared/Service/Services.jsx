// import React from 'react';

import { useLoaderData } from "react-router-dom";
import ServiceCarouselCard from "./ServiceCarouselCard";

const Services = () => {
    const services = useLoaderData(); 
    console.log(services); 
    return (
        <div className="my-8">
             <h3 className="md:text-6xl mb-8 text-3xl font-bold text-center">Our Event Services</h3>
             <ServiceCarouselCard></ServiceCarouselCard>

             

             </div>
       
    );
};

export default Services;