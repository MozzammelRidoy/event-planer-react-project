import React, { useCallback, useEffect, useRef, useState } from 'react';
import ILightGallery from 'lightgallery/react';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-rotate.css';
import lgVideo from 'lightgallery/plugins/video';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgRotate from 'lightgallery/plugins/rotate';
import lgShare from 'lightgallery/plugins/share';

const ReactGallery = () => {
  const [gallery, setGellery] = useState([]); 
  console.log(gallery);
  const containerRef = useRef(null);

  const onInit = useCallback((detail) => {
    if (detail) {
      detail.instance.openGallery();
    }
  }, []);

  useEffect(() => {
    fetch('/gallery.json')
    .then(res => res.json())
    .then(data => setGellery(data)); 

    if (containerRef.current) {
      // Initialize lightGallery here if needed
    }
  }, []);

  return (
    <div>
      <div data-aos="zoom-in" data-aos-duration="1000" style={{ height: '800px' }} ref={containerRef}></div>
      <ILightGallery
        container={containerRef.current}
        speed={500}
        onInit={onInit}
        plugins={[lgThumbnail, lgVideo, lgAutoplay, lgRotate, lgShare]}
        closable={false}
        showMaximizeIcon={true}
        slideDelay={400}
        thumbWidth={130}
        thumbHeight={'100px'}
        thumbMargin={6}
        appendSubHtmlTo={'.lg-item'}
        dynamic={true}
        dynamicEl={ gallery.map( image => ({
          src: image.image,
            responsive: image.image,
            thumb: image.image,
            subHtml: `<div class="lightGallery-captions">
                          <h4>Photo by Event Planner</h4>
                          <p>Published on ${image.publish_date}</p>
                      </div>`,

     })) }
        hash={false}
        elementClassNames={'inline-gallery-container'}
      ></ILightGallery>
    </div>
  );
};

export default ReactGallery;
