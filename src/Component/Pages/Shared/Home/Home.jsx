// import React from 'react';

import Banner from "../../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Pakage from "../Pakage/Pakage";
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
        <Pakage></Pakage>
      </div>

      <div className="my-2">
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
