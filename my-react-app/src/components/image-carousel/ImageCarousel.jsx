import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'

function ImageCarousel({images}) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); // 3秒ごとに切り替え
        return () => clearInterval(timer);
    }, [images.length]);
    
  return (
    <div className="image-carousel">
      {images.map((src, idx) => {
        let className = "carousel-image";
        if (idx === current) className += " center";
        else if (idx === (current + 1) % images.length) className += " right";
        else if (idx === (current - 1 + images.length) % images.length) className += " left";
        else className += " hidden";
        return (
          <img className={className} src={src} alt={`carousel-${idx}`} key={idx} />
        );
      })}
    </div>
  )
}

export default ImageCarousel