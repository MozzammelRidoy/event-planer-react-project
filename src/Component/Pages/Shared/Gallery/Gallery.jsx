// import React from 'react';
import ReactGallery from './ReactGallery';

const Gallery = () => {
        return (
        <div>

            <h2 data-aos="zoom-in" data-aos-duration="1500" className="md:text-6xl my-8 text-3xl font-bold text-center">Our Previous Gallery</h2>
            <div>
               <ReactGallery></ReactGallery>
            </div>
            
        </div>
    );
};

export default Gallery;