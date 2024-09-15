"use client";

import React, { useEffect, useState } from "react";

function FeaturesCard({ title, body }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simule un délai pour déclencher l'animation lors du montage
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Tu peux ajuster le délai ici
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col gap-5 shadow-md shadow-gray-600/90 p-3 rounded-2xl 
      transform transition-transform duration-1000 
      hover:scale-105 hover:shadow-sky-800 
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <h3 className="title-green font-black rounded-md shadow-md shadow-inherit text-center text-2xl py-2 sm:text-3xl">
        {title}
      </h3>
      <p className="text-sm sm:text-base leading-relaxed p-3">{body}</p>
    </div>
  );
}

export default FeaturesCard;
