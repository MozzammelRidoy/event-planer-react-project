import { useLoaderData } from "react-router-dom";
import Pakage from "./Pakage";

const PakagePlan = () => {
    const services = useLoaderData(); 
    
  return (
    <div>
      <h2
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="md:text-6xl text-2xl font-bold text-center"
      >
        Our Pakage Plan
      </h2>

      <div className="grid md:grid-cols-2 gap-6 my-8 ">
        {
          services.map(pakage => <Pakage key={pakage.id} pakage={pakage}></Pakage>)
        }
      </div>


      
      
    </div>
  );
};

export default PakagePlan;
