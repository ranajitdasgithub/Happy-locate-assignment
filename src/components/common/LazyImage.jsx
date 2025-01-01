import React, { useState, useEffect, useRef } from "react";

const LazyImage = ({ src, alt, className, placeholderSrc }) => {
  const [isInView, setIsInView] = useState(false); // To determine if the image is in the viewport
  const imgRef = useRef(null); // Ref for the image element

  // Use the IntersectionObserver to detect when the image comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // If in view, set state to load the image
        }
      },
      { threshold: 0.1 } // 10% of the image must be in the viewport to trigger the loading
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Clean up observer when the component is unmounted
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
        src={isInView ? src : placeholderSrc} // Show placeholder until the image comes into view
        alt={alt}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

export default LazyImage;
