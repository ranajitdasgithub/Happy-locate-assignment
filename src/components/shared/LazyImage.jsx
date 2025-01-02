import React, { useState, useEffect, useRef } from "react";

const LazyImage = ({ src, alt, className, placeholderSrc }) => {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className={className}>
      {/* Lazy-load the image when it enters the viewport */}
      <img
        ref={imgRef}
        src={isInView ? src : placeholderSrc}
        alt={alt}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

export default LazyImage;
