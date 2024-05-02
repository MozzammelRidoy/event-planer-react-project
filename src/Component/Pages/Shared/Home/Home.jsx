// import React from 'react';

import Banner from "../../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import PakagePlan from "../Pakage/PakagePlan";
import Services from "../Service/Services";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="my-2">
        <Services></Services>
      </div>
      <div className="my-2">
        <PakagePlan></PakagePlan>
      </div>

      <div className="my-2">
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
